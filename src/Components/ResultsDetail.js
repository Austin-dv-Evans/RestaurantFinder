import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container}>
            <Image 
                style={styles.imageStyle}
                source={{ uri: result.image_url }}
                
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 17,
        marginBottom: 2,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    container: {
        marginLeft: 10,
    }
})

export default ResultsDetail