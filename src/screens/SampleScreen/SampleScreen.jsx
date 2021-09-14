import React from 'react';
import { Button,  Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '../../redux/slices/sampleSlice'

// import { Block } from 'galio-framework';

import styles from './Styles';

const Screen = ({ navigation }) => {

    const goToLoginScreen = () => navigation.navigate('Login');
    
    const count = useSelector((state) => state.sample.value)
    const dispatch = useDispatch()
    
    return (
        <View style={styles.sampleStyle}>
            <Text>{count}</Text>
            <Button  title="Press Me" onPress={goToLoginScreen}>Go to Login Screen</Button>
            <Button  title="Press Me" onPress={() => dispatch(increment())}></Button>
            <Button  title="Press Me" onPress={() => dispatch(decrement())}>Go to Login Screen</Button>
        </View>
    )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    
}
export default Screen;

