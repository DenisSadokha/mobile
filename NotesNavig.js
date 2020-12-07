import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import Notes from "./component/Notes"


const Stack = createStackNavigator();

const NotesNavig = () => {
  return (
     <Stack.Navigator  initialRouteName={"Notes"}>
       <Stack.Screen name = "Notes" component = {Notes}/>
          
    </Stack.Navigator>
  );
};

export default NotesNavig;