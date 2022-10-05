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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import { auth } from "./firebase";

function SettingsScreen() {
  return <Text>Settings Screen</Text>;
}


const Stack = createNativeStackNavigator();

/*Stack navigation to handle basic navigation of overall app*/
function App({ navigation }) {
  
/*Sign out handler for firebase*/
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ route, navigation }) => ({
            title: "Home Screen",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Share a coffee")}
                title="Share coffee"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={(handleSignOut) => navigation.navigate("Login")}
                title="Sign Out"
              />
            ),
          })}
        />
        <Stack.Screen options={{headerShown: false}} name="Share a coffee" component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  containerHome: {},

  header: {
    fontSize: 28,
    color: "black",
    textAlign: "center",
    padding: 0,
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
  spacebox: {
    height: 20,
  },
  welcome: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontFamily: "sans-serif-light",
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
  loginButton: {
    color: "black",
  },

  scrollableItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 350,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    margin: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  homeImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20,
  },

  profileName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 300,
    padding: 5,
    paddingTop: 0,
    borderBottomWidth: 0.5,
  },

  profilePic: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
  },

  name: {
    textAlign: "left",
    margin: 5,
    fontSize: 18,
    fontFamily: "sans-serif",
  },

  caption: {
    margin: 10,
    textAlign: "left",
  },
});

export default App;
