import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import Notes from "./component/Notes"
import Create from "./component/CreateTask"



const Stack = createStackNavigator();

const NotesNavig = () => {
  return (
     <Stack.Navigator  initialRouteName={"Notes"}>
       <Stack.Screen name = "Notes" component = {Notes}/>
       <Stack.Screen name = "Create" component = {Create}/>
          
    </Stack.Navigator>
  );
};

export default NotesNavig;