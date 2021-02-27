import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, 
ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const { width, height } = Dimensions.get('window');



class ProfileScreen extends Component {

    state={
        username: '',
        usermail: ''
       
    }

    async getname() {
        try {
             const name =  await  AsyncStorage.getItem('name')
             const email =  await AsyncStorage.getItem('email')
            console.log('EMAAAAİLLL'+email)
            
  
              this.setState({
                  username : name,
                  usermail : email
                })
                
              
            
          } catch(e) {
            // error reading value
          }
    }

    
 componentDidMount() {
    
    this.getname()
      


 }

    render() {
        return(
            <ImageBackground
            style={{flex: 1}}
            source={require('../img/background.jpg')}>
                <View style={{width:width, height:height ,justifyContent:'center' , alignItems:'center'}}>
                <Text style={{color:'black'}}>
                 {this.state.usermail}
                </Text>
                <Text style={{color:'black'}}>
                 {this.state.username}
                </Text>
                </View>

                

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width, 
        height: height, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#7b7786'
    },
    text: {
        color: 'black'
    },
    topView: { 
        flex: 0.17, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    logo: { 
        alignSelf: 'center', 
        width: 90, 
        height: 78
    },
    titleView: { 
        flex: 0.1, 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24, 
        marginTop: height*0.03, 
        fontWeight: "bold", 
        color: 'white'
    },
    signUp: {
        fontSize: 17, 
        fontWeight: "bold", 
        color: 'white'
    },
    inputContainerView: { 
        flex: 0.85, 
        marginTop: height*0.02,
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    inputStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/1.32,
        height: height/16.182,
        borderRadius: 30,
        color: 'white',
        fontSize: height/55.4375,
        marginLeft: width*0.03
    },
    textInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/1.22,
        height: height/16.182,
        backgroundColor: '#7b7786',
        borderRadius: 30,
        color: 'white',
        flexDirection: 'row'
    },
    textInputContainer2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/1.22,
        height: height/16.182,
        backgroundColor: '#7b7786',
        borderRadius: 30,
        color: 'white',
        marginTop: height*0.02,
        flexDirection: 'row'
    },
    pickerTouchable: {
        marginLeft: width*0.01,
        width: width*0.4,
        height: 750/12.182,
        backgroundColor: '#7b7786',
        borderRadius: 30,
        justifyContent: 'center'
    },
    buttonContainer: { 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button: { 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 25,
        width: width*0.5,
        height: height*0.07,
        backgroundColor: '#ff0045'
    },
    emailicon: {
        alignSelf: 'center', 
        width: width/20.77, 
        height: height/35.3717,
        marginLeft: width*0.1
    },
    passwordicon: {
        alignSelf: 'center', 
        width: width/20.77, 
        height: height/35.3717,
        marginLeft: width*0.1
    },
    forgotPassword: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width,
        height: height/20.588,
    },
    forgotPasswordText: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: '#a7a7a7',
        fontSize: 16,
    },
    verificationMailText: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: '#a7a7a7',
        fontSize: 13,
        fontStyle: 'italic'
    },
    passwordChar: {
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        width: width/1.32,
        height: height/20.588,
    },
    signInText: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: '#ff0045',
        fontSize: 16,
    },
    verificationmailView: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width,
        height: height/20.588,
    }
})

export default ProfileScreen;
