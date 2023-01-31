import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native'
import React, { useCallback } from 'react'
import data from './attractions.json'

const Detail = ({ navigation, route }) => {
    let d = data.find(o => o.id === route.params.id)

    const handleMap = useCallback(async () => {
        await Linking.openURL('https://map.google.com/maps?q='+d.latitude+','+d.longitude);
    })

    return (
        <View>
            <Image 
                style={styles.coverImage}
                source={{
                    uri: d.coverimage,
                }}
            />
            <View style={styles.textBox}>
                <Text style={{ fontSize: 25, marginBottom: 5 }}>{d.name}</Text>
                <Text style={styles.bottomBox}>{d.detail}</Text>
                <Text style={styles.bottomBox}>Latitude : {d.latitude}</Text>
                <Text style={{ marginBottom: 20 }}>Longitude : {d.longitude}</Text>
                <Button title="Map" onPress={handleMap} >Map</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    coverImage: {
        width: '100%',
        height: 300,
        marginBottom: 10
    },
    textBox: {
        margin: 10
    },
    bottomBox: {
        marginBottom: 10
    }
});

export default Detail