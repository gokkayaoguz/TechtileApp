import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import MainScreen from  './pages/NavigationScreen';



class Root extends Component {
    render() {
        return(
            <Router>
                <Scene
                key='Root'>
                   
                    <Scene
                    key='LoginScreen'
                    component={LoginScreen}
                    hideNavBar
                    initial
                    
                    />
                     <Scene
                    key='SignUpScreen'
                    component={SignUpScreen}
                    hideNavBar
                    
                    />
                     <Scene
                    key='Navigator'
                    component={MainScreen}
                    hideNavBar
                    
                    
                    />
                    
                </Scene>
                
            </Router>
        )
    }
}

export default Root;