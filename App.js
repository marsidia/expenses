import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InputScreen from "./screens/InputScreen";
import ChartScreen from "./screens/ChartScreen";
import RecapScreen from "./screens/RecapScreen";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Input") {
                  return (
                    <AntDesign name="pluscircleo" size={24} color="#ffa1a1" />
                  );
                } else if (route.name === "Chart") {
                  return (
                    <AntDesign name="piechart" size={24} color="#ffa1a1" />
                  );
                } else if (route.name === "Recap") {
                  return <AntDesign name="bars" size={24} color="#ffa1a1" />;
                }
              },
              tabBarActiveTintColor: "#ffa1a1",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              options={{
                headerShown: true,
                title: "Add an expense",
                headerStyle: {
                  backgroundColor: "#fce6e6",
                },
              }}
              name="Input"
              component={InputScreen}
            />
            <Tab.Screen
              options={{
                headerShown: true,
                title: "Overview",
                headerStyle: {
                  backgroundColor: "#fce6e6",
                },
              }}
              
              name="Chart"
              component={ChartScreen}
            />
            <Tab.Screen
              options={{
                headerShown: true,
                title: "Your expenses",
                headerStyle: {
                  backgroundColor: "#fce6e6",
                },
              }}
              name="Recap"
              component={RecapScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
