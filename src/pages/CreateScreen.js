import React, { Component } from 'react';
import { Button ,View, Text, ImageBackground, Dimensions, StyleSheet,
    Image, TouchableOpacity, BackHandler, Platform, StatusBar, Alert, PermissionsAndroid } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




// get screen dimensions for UX
const { width, height } = Dimensions.get('window');



class CreateScreen extends Component {
    //Setting nessesary states
    state={
        videoarray : [],
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: "",
        pic1uri: this.props.pic1uri1,
        pic2uri: this.props.pic2uri1,
        pic3uri: this.props.pic3uri1,
        pic4uri: this.props.pic4uri1,
        videonumber : 0
        
    }


     //Open gallery **only videos
    openImagePicker(type) {
        const options = {
            title: 'CHOOSE PIC',
            mediaType: 'video',
            storageOptions: {
              skipBackup: true,
              path: 'video',
            },
            takePhotoButtonTitle: 'Lets pıc',
            chooseFromLibraryButtonTitle: 'please choose pıc',
            cancelButtonTitle: 'iptal',
            videoQuality: 'medium',
            quality: 1,
          };
            
            
          // Handle response from gallery
          launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };

              //take video uris to state

                if(type === 'photo1') {
                    this.setState({
                        pic1: source,
                        pic1uri: source.uri,
                      });
                      this.setState({
                        videoarray : [this.state.pic1uri , this.state.pic2uri, this.state.pic3uri , this.state.pic4uri]
                      });
                      
                }else if(type === 'photo2') {
                    this.setState({
                        pic2: source,
                        pic2uri: source.uri,
                      });
                      this.setState({
                        videoarray : [this.state.pic1uri , this.state.pic2uri, this.state.pic3uri , this.state.pic4uri]
                      });
                      
                }else if(type === 'photo3') {
                    this.setState({
                        pic3: source,
                        pic3uri: source.uri,
                      });
                      this.setState({
                        videoarray : [this.state.pic1uri , this.state.pic2uri, this.state.pic3uri , this.state.pic4uri]
                      });
                      
                }else {
                    this.setState({
                        pic4: source,
                        pic4uri: source.uri,
                      });
                      this.setState({
                        videoarray : [this.state.pic1uri , this.state.pic2uri, this.state.pic3uri , this.state.pic4uri]
                      });
                      
                }
            }
          });
    }
    //handle video pressing

    renderPickerButton(onPress) {
        return(
            <TouchableOpacity style={styles.emptyPicker}
            onPress={onPress}>
                    <View>
                        <Image
                        style= {styles.plus}
                        source={require('../img/mail.png')}
                        />
                    </View>
            </TouchableOpacity>
        );
    }


    ///Showing video previews
    showPhoto1(onPress) {
        return(
            <TouchableOpacity
            onPress={onPress}
            >
            <Video
            source={{uri: this.state.pic1uri}} 
              ref={(ref) => {
                this.player = ref
              }}        
               
                                        
              style={{ width: 100, height: 100 }}
              repeat={true}  
              
             />

            </TouchableOpacity>
        )
    }

    showPhoto2(onPress) {
        return(
            <TouchableOpacity
            onPress={onPress}
            >
                <Video
            source={{uri: this.state.pic2uri}} 
              ref={(ref) => {
                this.player = ref
              }}        
               
                                        
              style={{ width: 100, height: 100 }}
              repeat={true}  
              
             />
            </TouchableOpacity>
        )
    }

    showPhoto3(onPress) {
        return(
            <TouchableOpacity
            onPress={onPress}
            >
                <Video
            source={{uri: this.state.pic3uri}} 
              ref={(ref) => {
                this.player = ref
              }}        
               
                                        
              style={{ width: 100, height: 100 }}
              repeat={true}  
              
             />
            </TouchableOpacity>
        )
    }

    showPhoto4(onPress) {
        return(
            <TouchableOpacity
            onPress={onPress}
            >
                <Video
            source={{uri: this.state.pic4uri}} 
              ref={(ref) => {
                this.player = ref
              }}        
               
                                        
              style={{ width: 100, height: 100 }}
              repeat={true}  
              
             />
            </TouchableOpacity>
        )
    }

    //render all videos consecutive

    componentDidUpdate() {
        if(this.state.videonumber + 1 == this.state.videoarray.length && this.state.videoarray.length != 0){
            this.setState({
                videonumber: 0,
              });
        }

    }

    //Using storage to send videos home screen

    async savevideo(){

        try {
            //const jsonValue = JSON.stringify(this.state.videoarray)
            await AsyncStorage.setItem('savedvideo1', this.state.pic1uri)
            await AsyncStorage.setItem('savedvideo2', this.state.pic2uri)
            await AsyncStorage.setItem('savedvideo3', this.state.pic3uri)
            await AsyncStorage.setItem('savedvideo4', this.state.pic4uri)
          } catch (e) {
            alert(e)
          }
        
            
          
        

    }


    render() {
        return(
            <ImageBackground
            style={{flex: 1}}
            source={require('../img/background.jpg')}>
          
          <View
          style={{width:width ,height:width ,justifyContent:'center' , alignItems:'center'}}>

        
          <Video
            source={{uri: this.state.videoarray[this.state.videonumber]}} //render main video
              ref={(ref) => {
                this.player = ref
              }}        
              //end of the video load next
              onEnd={() => 
                this.setState(prevState => ({videonumber : prevState.videonumber + 1}))              
                } 
                                        
              style={{ width: 300, height: 300 }}
              repeat={true}  
              
             />

          </View>
          

                <StatusBar translucent={true} backgroundColor='transparent' /> 

                <View style={styles.topView}>

                    <View
                    style={{width: width*1}}>
                    </View>

                </View>

                
                <View style={styles.addPic}> 
                    
                    { this.state.pic1 !== "" ?
                    this.showPhoto1(() => this.openImagePicker('photo1'))
                    : this.renderPickerButton(() => this.openImagePicker('photo1'))}

                    { this.state.pic2 !== "" ?
                    this.showPhoto2(() => this.openImagePicker('photo2'))
                    : this.renderPickerButton(() => this.openImagePicker('photo2'))}

                     { this.state.pic3 !== "" ?
                    this.showPhoto3(() => this.openImagePicker('photo3'))
                    : this.renderPickerButton(() => this.openImagePicker('photo3'))}

                    { this.state.pic4 !== "" ?
                    this.showPhoto4(() => this.openImagePicker('photo4'))
                    : this.renderPickerButton(() => this.openImagePicker('photo4'))}
                </View>

                

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}
                    onPress={() => alert('Video Saved')
                    //this.savevideo()
                    }>
                        <Text >{"Save Merged Video"}</Text> 
                    </TouchableOpacity>

                </View>
                
                
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    pickerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/4.177,
        height: height/4.1512,
        backgroundColor: '#7b7786',
        borderRadius: 5,
    },
    emptyPicker: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/7,
        height: height/7,
        backgroundColor: '#7b7786',
        marginRight: width*0.03,
        marginLeft: width*0.03,
        borderRadius: 5,
    },
    plus: { 
        height: 28.5, 
        width: 27
    },
    showPhoto: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width/7,
        height: width/7,
        marginLeft: width*0.03,
        marginRight: width*0.03,
        borderRadius: 5
    },
    topView: { 
        flex: 0.15, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    backButtonContainer: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width*0.2
    },
    backButtonTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.15,
        height: height*0.11,
        borderRadius: 30,
    },
    backButtonIconView: { 
        width: width*0.11, 
        height: height*0.06, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButtonIcon: { 
        height: height/29.767, 
        width: width/30.64
    },
    logo: { 
        alignSelf: 'center', 
        marginTop: height*0.05,
        width: 90, 
        height: 78
    },
    titleView: { 
        flex: 0.10,
        marginTop: height*0.03, 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    titleText: { 
        marginTop: height*0.02,
        fontSize: 25, 
        fontWeight: "bold", 
        color: 'white'
    },
    addPic: { 
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonView: { 
        justifyContent: 'center', 
        alignItems: 'center'
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

})

export default CreateScreen;
