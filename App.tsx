import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login";
import CriarConta from "./src/pages/CriarConta";
import Integrantes from "./src/pages/Integrantes";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Bairro from "./src/pages/Bairro";
import Dispositivo from "./src/pages/Dispositivo";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }: any) {
  const bairro = route?.params?.bairro;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#444444",
        tabBarStyle: {
          height: 60,
          paddingBottom: 0.01,
          paddingHorizontal: 0.01,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Bairro"
        component={Bairro}
        initialParams={{ bairro }}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="city-variant"
              size={26}
              color="#000"
            />
          ),
          tabBarLabel: "Bairro",
          tabBarActiveBackgroundColor: "#0AFAFA",
          tabBarInactiveBackgroundColor: "#E1F5FE",
        }}
      />
      <Tab.Screen
        name="Integrantes"
        component={Integrantes}
        options={{
          tabBarIcon: () => (
            <Ionicons name="people-sharp" size={26} color="#000" />
          ),
          tabBarLabel: "Integrantes",
          tabBarActiveBackgroundColor: "#0AFAFA",
          tabBarInactiveBackgroundColor: "#E1F5FE",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dispositivo"
          component={Dispositivo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
