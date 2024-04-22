
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions,icons, COLORS } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";

const PhoneNumber = () => {
    const navigation = useNavigation();
  return (

    
    <View style={styles.container}>
    <View style={styles.helloContainer}>
      <Text style={styles.helloText}>Sign in </Text>
      <Text style={styles.confirmText}>Please confirm your country code 
 and enter your phone number </Text>
    </View>

    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/India.png")}
          style={styles.topImage}
          resizeMode="contain"
        />

    <View style={styles.iconContainer}>
    <AntDesign name={"down"} size={30} color={"black"} style={styles.icon} />
    

   
      </View>
           
             
    </View>
    

          
    </View>
    </View>
    

  );
};

export default PhoneNumber;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
container: {
  backgroundColor: "#E1E3F3",
  flex: 1,
},
helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#262626",
    marginTop: 80,
  },
  confirmText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "#262626",
    marginTop: 15,
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    marginHorizontal: 50,
   
  },
  iconContainer:{
    borderRadius: 100,
    height: 50,
    width: windowWidth - 30,
    alignItems: 'center',
    marginLeft: 16 ,
    marginTop: 70,
  },
  icon:{
    fontSize: 20,
    marginHorizontal:20,
  
  },
  topImageContainer: {
    width: windowWidth,
    height: windowHeight * 0.4, 
  },
  topImage: {
    width: "55%",
    height: "20%",
    marginTop: 70,
  },

});