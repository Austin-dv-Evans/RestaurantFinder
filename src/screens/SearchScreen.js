import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("Italian");
  const [searchApi, results, errorMsg] = useResults();


  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text style={{ color: "red" }}>{errorMsg}</Text> : null}
      <Text style={{ margin: 3 }}> We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          listHeading="On A Budget"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          listHeading="Nice Place"
        />
        <ResultsList
          results={filterResultsByPrice("$$$" || "$$$$")}
          listHeading="Ballin!"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
