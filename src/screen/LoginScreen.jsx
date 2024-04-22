import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";

const LoginScreen = () => {
  const navigation = useNavigation();

  const signIn = () => {
    // Implement sign in logic here
    console.log('Signing in...');
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.jpeg")}
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Sign in now</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Entypo  name={"mail"} size={30} color={"black"} style={styles.icon}/>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={30} color={"black"} style={styles.icon}/>
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
      </View>

      <Text style={styles.forgotPassText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.signInButtonContainer} onPress={signIn}>
        <Text style={styles.signIn}>Sign in</Text>
      </TouchableOpacity>
      
      
        <Text style={styles.noAccountText}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={handleSignup}>
          <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      

      <Text style={styles.connectText}>or connect</Text>

      <View style={styles.iconContainer}>
        <AntDesign name={"google"} size={30} color={"black"} style={styles.icon} />
        <AntDesign name={"linkedin-square"} size={30} color={"blue"} style={styles.icon} />
        <AntDesign name={"apple1"} size={30} color={"black"} style={styles.icon} />
      </View>
    </View>
  );
};

export default LoginScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1E3F3",
    flex: 1,
  },
  topImageContainer: {
    width: windowWidth,
    height: windowHeight * 0.4, 
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#262626",
    marginTop: 15,
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom:  30,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    borderRadius:  20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 15,
    alignItems: 'center' ,
    height: 50,
    marginTop: 15,
    
  },
icon:{
  marginLeft: 15,
  marginRight: 5,

},

textInput:{
  flex: 1, 

},

forgotPassText:{
  color: '#000000',
  textAlign: 'center',
  fontSize: 15,
  marginBottom: 15,
},
signInButtonContainer: {
  backgroundColor: '#38B2E5',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 15, 
  paddingHorizontal: 50, 
  marginHorizontal: 40,
  marginBottom: 15,
  elevation: 10,
},
signIn: {
  color: '#FFFFFF',
  fontSize: 16,
  textAlign: 'center', 
  elevation: 5,
},

noAccountText:{
  color: '#000000',
  textAlign: 'center',
  fontSize: 15,
  },

  connectText:{
    color: '#000000',
    textAlign: 'center',
    fontSize: 15,

  },

  iconContainer: {
    backgroundColor: 'white',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 120,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  icon: {
    marginHorizontal: 10,
  }
});
