import React from 'react';
import { Button,  Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '../../redux/slices/sampleSlice'

// import { Block } from 'galio-framework';

import styles from './Styles';

const Screen = ({ navigation }) => {

    const goToSampleScreen = () => navigation.navigate('Sample');
    
    const count = useSelector((state) => state.sample.value)
    const dispatch = useDispatch()
    
    return (
        <View style={styles.sampleStyle}>
            <Text>{count}</Text>
            <Button  title="Press Me" onPress={goToSampleScreen}>Go to Login Screen</Button>
        </View>
    )
}

export default Screen;

