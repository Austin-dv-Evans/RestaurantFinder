import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../API/yelp'


const ResultsShowScreen = ({ navigation }) => {
    
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    
    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result) {
        return null
    }

    return(
        <View style={{flex: 1}}>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.phoneAddy}>{result.display_phone}</Text>
            <Text style={styles.phoneAddy}>{result.location.address1}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 400,
        alignSelf: 'center',
        marginVertical: 20,

    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 3
    },
    phoneAddy: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 4
    }
})

export default ResultsShowScreen