import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Image,
  Settings,
  TouchableOpacityBase,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogIn = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      const user = userCredentials.user;
    });
  };

  return (
    <ImageBackground
      source={require("/Users/henniescheepers/mtn-app-academy-intermediate-m5/assets/img/new-background-4.jpg")}
      imageStyle={{ opacity: 0.65 }}
      style={styles.container}
    >
      <View style={styles.box}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.spacebox}></View>
        <Text style={styles.welcome}>
          Welcome back! Please take a moment to sign in
        </Text>
        <View style={styles.spacebox}></View>
        <TextInput
          style={styles.input}
          placeholder="Please enter username"
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.spacebox}></View>
        <TextInput
          style={styles.input}
          placeholder="Please enter password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.spacebox}></View>
        <Button
          title="Log In"
          style={styles.loginButton}
          onPress={handleLogIn}
        ></Button>
        <View style={styles.spacebox}></View>
        <Text style={styles.welcome}>
          New member? Please{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ color: "#2196f3" }}
          >
            sign up
          </Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  box: {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    padding: 45,
    paddingTop: 60,
    paddingBottom: 90,
    borderRadius: 20,
    width: Dimensions.get("window").width,
    borderColor: "white",
    borderWidth: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },

  header: {
    fontSize: 28,
    color: "black",
    textAlign: "center",
    padding: 0,
    fontFamily: "sans-serif-light",
  },

  spacebox: {
    height: 20,
  },

  welcome: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontFamily: "sans-serif-light",
  },

  input: {
    textAlign: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    color: "black",
    fontFamily: "sans-serif-light",
  },
});

export default LoginScreen;
