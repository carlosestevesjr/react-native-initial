import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Screens from '../screens'

const MainNavigator = () => {
    
    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Home">
                <MainStack.Screen 
                    name="Login" 
                    component={Screens.LoginScreen} 
                    options={{
                        headerShown:true
                    }}
                />
                <MainStack.Screen 
                    name="Home" 
                    component={Screens.HomeScreen} 
                    options={{
                        headerShown:false
                    }}
                />
                <MainStack.Screen 
                    name="Sample" 
                    component={Screens.SampleScreen} 
                    options={{
                        headerShown:false
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    teste: state.auth,
})

const mapDispatchToProps = {
    
}


// const mapStateToProps = state => ({
//     consultas: state.consultas,
//     usuario_pesquisa: state.usuario_pesquisa.dados
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     mostraModalOutrasGrafias,
//     mostraModalPossiveisDatas,
//     mostraModalCnaesSecundarias,
//     mostraModalEditDadosGeraisPJ
// }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);

const styles = StyleSheet.create({})

