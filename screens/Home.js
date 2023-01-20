import { StyleSheet, Text, View, Button, FlatList, Image, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper';

const Home = ({ navigation }) => {
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const onChangeSearch = query => setSearchQuery(query);
    useEffect(()=>{
        fetch('https://www.melivecode.com/api/attractions?search='+searchQuery)
        .then(res => res.json())
        .then(result => {
            setItems(result)
            setIsLoading(false)
        })
    }, [isLoading])

    const renderItems = ({ item }) => (
        <View style={{ marginBottom: 50 }}>
            <TouchableHighlight onPress={() => navigation.navigate('map')}>
                <Image source={{ uri: item.coverimage }}
                    style={{ width: '100%', height: 333 }}
                />
            </TouchableHighlight>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                <Text>{item.detail}</Text>
            </View>
        </View>
    )

    return (
        <View style={{height: "100%"}}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => setIsLoading(true)}
                onSubmitEditing={() => setIsLoading(true)}
            />
            
            { isLoading ?
                <Text></Text>
            :
                <FlatList
                    
                data={items}
                    renderItem={renderItems}
                    keyExtractor={item => item.id}
                />   
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})