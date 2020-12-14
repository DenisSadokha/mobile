import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "./Notes"
import Create from "./CreateTask"
import EditC from "./EditNotes"




const Stack = createStackNavigator();

const NotesNavig = () => {
  return (
     <Stack.Navigator  initialRouteName={"Notes"}>
       <Stack.Screen name = "Notes" component = {Notes}/>
       <Stack.Screen name = "Create" component = {Create}/>
       <Stack.Screen name = "Edit" component = {EditC}/>

          
    </Stack.Navigator>
  );
};

export default NotesNavig;