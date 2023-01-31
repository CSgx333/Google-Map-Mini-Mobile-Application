import { View, Text, ScrollView, StyleSheet, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import data from './attractions.json'

const Home = ({ navigation }) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onChangeSearch = (text) => {
        setSearchTerm(text);
        setSearchResults(
            data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        );
    };

    const pressDetail = (id) => {
        navigation.navigate('detail', { id: id })
    }

    return (
        <View style={{height: "100%"}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchTerm}

            />
            
            <ScrollView>
                {searchResults.map(item => (
                    <View key={item.id} style={{ marginBottom: 50 }}>
                    <Pressable onPress={() => pressDetail(item.id)} >
                        <Image 
                            style={styles.coverImage}
                            source={{
                                uri: item.coverimage,
                            }}
                        />
                        <View style={styles.textBox}>
                            <Text style={{ fontSize: 25 }}>{item.name}</Text>
                        </View>
                    </Pressable>
                </View>
                ))}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    coverImage: {
        width: '100%',
        height: 300,
    },
    textBox: {
        margin: 10
    }
});
export default Home