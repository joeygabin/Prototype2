import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 


import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

// const Tab = createBottomTabNavigator();

// const TAB_ICON = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// };

// const Settings = () => (
//   <SafeArea>
//     <Text>Settings</Text>
//   </SafeArea>
// );
// const Map = () => ( this const map needs to be removed when using this code
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );

// const createScreenOptions = ({ route }) => {
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={createScreenOptions}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//     >
//        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
//       <Tab.Screen name="Map" component={MapScreen} /> change map screen
//       <Tab.Screen name="Settings" component={Settings} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );


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

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      // <Ionicons name={iconName} size={size} color={color} />
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
  };
};

// export default function App() {

//   const [oswaldLoaded] = useOswald({
//     Oswald_400Regular,
//   });

//   const [latoLoaded] = useLato({
//     Lato_400Regular,
//   });

//   if (!oswaldLoaded || !latoLoaded) {
//     return null;
//   }

  // return (
  //   <>
  //   <ThemeProvider theme={theme}>
  //   {/* <LocationContextProvider> */}
  //   {/* <RestaurantsContextProvider> */}
  
  export const AppNavigator = () => (
    <NavigationContainer>
    <Tab.Navigator

            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="DashBoard" component={RestaurantsNavigator} />
            <Tab.Screen name="Class" component={Class} />
            <Tab.Screen name="Courses" component={Courses} />
            <Tab.Screen name="Units" component={Units} />
            <Tab.Screen name="SpeechPractice" component={SpeechPractice} />

            {/* <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} /> */}

          </Tab.Navigator>
        </NavigationContainer>
        );