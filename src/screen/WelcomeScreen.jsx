import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const go = () => {
        navigation.navigate("Login");
    };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/center.png")}
          style={styles.topImage}
          resizeMode="cover"  
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Stable yourself with your abilities</Text>
      </View>

      <TouchableOpacity style={styles.goButtonContainer} onPress={go}>
        <Text style={styles.go}>Go</Text>
      </TouchableOpacity>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E3F3',
    justifyContent: 'center',  
    alignItems: 'center',     
  },
  topImageContainer: {
    flex: 1,
    alignItems: 'center',      
    justifyContent: 'center', 
    marginTop: 150,            
  },
  topImage: {
    width: 400,                
    height: 500,  
    marginBottom: 200,            
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 30, 
    fontWeight: '500',
    color: '#000000',                            
  },
  goButtonContainer: {
    backgroundColor: '#38B2E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 60,
  },
  go: {
    elevation: 10,
    color: '#FFFFFF',
    fontSize: 15,
    width:  200, 
    textAlign: "center",
  },
});
