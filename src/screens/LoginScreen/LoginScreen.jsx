import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

const Screen = ({ navigation }) => {

    const goToHomeScreen = () => navigation.navigate('Home');

    return (
        <View style={styles.sampleStyle}>
            <Text>Loginfdfdsfdsfs Screen of app</Text>
            <Button  title="Press Me"  onPress={goToHomeScreen}>Go to Homdasdase Screen</Button>
        </View>
    )
}

export default Screen;

const styles = StyleSheet.create({
    sampleStyle: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    }
});
