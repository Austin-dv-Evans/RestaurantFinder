import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from '../Components/ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ listHeading, results, navigation }) => {
    if (!results.length){
        return null
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{listHeading}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => 
                            navigation.navigate('ResultsShow', { id: item.id }) }>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,

    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)