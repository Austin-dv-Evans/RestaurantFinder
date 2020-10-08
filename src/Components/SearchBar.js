import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    
    
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput 
                style={styles.inputStyle} 
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                autoCorrect={false}
                onEndEditing={onTermSubmit}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ffdd77',
        height: 40,
        borderRadius: 15,
        width: 400,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 12,
    }
})


export default SearchBar