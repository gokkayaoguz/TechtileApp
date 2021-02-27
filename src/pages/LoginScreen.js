import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, 
ImageBackground, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback,
Keyboard, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        name: ''
    }

    //Adding name and mail to see in profile screen

    async sendname (){

        try {
            await AsyncStorage.setItem('name', this.state.name)
            await AsyncStorage.setItem('email', this.state.email)
         } catch (e) {
           // saving error
         }

    }

    //handling login

    async login() {

        try {

            await fetch('https://api.backendless.com/D7264E8D-4AEE-083A-FF65-312E05098A00/1FEF1C63-0680-4027-83AA-CAE11659B163/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: this.state.email,
                    password: this.state.password
                })
            }).then((response) => response.json())
            .then((json) => {
              console.log(json);
              //taking response to find out user status
              if (json.code == 3003 || json.code == 3006){

                alert('Invalid email or password')

              }
              else {
               Actions.Navigator()
               this.setState({
                name : json.name
              })
               this.sendname()
               
               
                
              
               
                

              }
            })
            .catch((error) => {
              console.error(error);
            });

        } catch(e) {

            console.log(e)

        }
    }

    render() {
        return(
            <ImageBackground
            style={{flex: 1}}
            source={require('../img/background.jpg')}>

                <StatusBar translucent={true} backgroundColor='transparent' /> 

                <KeyboardAvoidingView style={{ height: height}} behavior="padding" enabled={false}>

                <View style={styles.topView}>

                </View>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ImageBackground
                style={{ flex: 0.83 }}
                imageStyle={{ opacity: 0.2 }}
                resizeMode={'stretch'}
                source={require('../img/filterop.png')}>

                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{"Welcome"}</Text>
                    </View>

                    <View style={styles.inputContainerView}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height*0.005}}>

                            

                            <View style={styles.textInputContainer2}>

                                <Image
                                style={styles.emailicon}
                                resizeMode={'contain'}
                                source={require('../img/mail.png')}>
                                </Image>

                                <TextInput style={styles.inputStyle}
                                autoCapitalize={false}
                                autoCorrect={false}
                                selectionColor={'#ff0045'}
                                placeholder={"Email"}
                                placeholderTextColor={'#b1afb5'}
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                >

                                </TextInput>

                            </View>

                            <View style={styles.textInputContainer2}>

                                <Image
                                style={styles.passwordicon}
                                resizeMode={'contain'}
                                source={require('../img/key.png')}>
                                </Image>

                                <TextInput style={styles.inputStyle}
                                autoCapitalize={false}
                                autoCorrect={false}
                                selectionColor={'#ff0045'}
                                placeholder={"Password"}
                                placeholderTextColor={'#b1afb5'}
                                secureTextEntry={true} 
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                >

                                </TextInput>

                            </View>    

                            <View style={styles.passwordChar}>
                                <Text style={styles.verificationMailText}>{"Don't have an account?"}
                                <Text onPress ={() =>
                                Actions.SignUpScreen()
                                }>
                                {"Sign Up."}
                                </Text>
                                </Text> 
                            </View>

                        </View>

                        <View style={styles.buttonContainer}>

                            <TouchableOpacity style={styles.button}
                            onPress={() => this.login()}>
                                <Text style={styles.signUp}>{"Login"}</Text> 
                            </TouchableOpacity>

                        </View>

                    </View>
                
                </ImageBackground>

                </TouchableWithoutFeedback>

                </KeyboardAvoidingView>

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
        color: 'pink'
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
        color: 'black',
        fontSize: 13,
        fontStyle: 'italic'
    },
    passwordChar: {
        justifyContent: 'center', 
        alignItems: 'center', 
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

export default LoginScreen;