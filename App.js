import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from '@expo/vector-icons'; 

import { MaterialIcons } from '@expo/vector-icons'; 

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  DashBoard: "dashboard",
  Class: "class",
  Courses: "auto-awesome-motion",
  Units: "smartphone",
  SpeechPractice: "mic",
};

// const TAB_ICON = {
// Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",

// };



const Class = () => (
  <SafeArea>
    <Text>Class</Text>
  </SafeArea>
);

const Courses = () => (
  <SafeArea>
    <Text>Courses</Text>
  </SafeArea>
);
const Units = () => (
  <SafeArea>
    <Text>Units</Text>
  </SafeArea>
);
const SpeechPractice = () => (
  <SafeArea>
    <Text>SpeechPractice</Text>
  </SafeArea>
);

// const Settings = () => (
//   <SafeArea>
//     <Text>Settings</Text>
//   </SafeArea>
// );
// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      // <Ionicons name={iconName} size={size} color={color} />
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    {/* <RestaurantsContextProvider> */}
    <NavigationContainer>
    <Tab.Navigator

            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="DashBoard" component={RestaurantsScreen} />
            <Tab.Screen name="Class" component={Class} />
            <Tab.Screen name="Courses" component={Courses} />
            <Tab.Screen name="Units" component={Units} />
            <Tab.Screen name="SpeechPractice" component={SpeechPractice} />

            {/* <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} /> */}

          </Tab.Navigator>
        </NavigationContainer>
        {/* </RestaurantsContextProvider> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
  </>

   );
}

