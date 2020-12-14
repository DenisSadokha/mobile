import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {observer} from "mobx-react"
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import store from "../store/StoreAuth"
import Login from "./LogIn"
import Registr from "./Registr"

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    DrawerLayoutAndroidComponent,
  } from 'react-native';
  import DrawerContent from "./DrawerContent"
  import NotesNavig from "./NotesNavig"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


 class App extends Component{
   
 render(){
   console.log("render")
 
  return (
   
        
    <NavigationContainer>
      {store.isAuth===true ? 
          <Drawer.Navigator initialRouteName="Home" drawerContent = {props => <DrawerContent {...props} />}>
          <Drawer.Screen name="UnLogin" component={Login} />
          <Drawer.Screen name="Home" component={NotesNavig} />

        </Drawer.Navigator>  :
         <Stack.Navigator  initialRouteName={"Login"}>

       <Stack.Screen name = "Login" component = {Login}/>
       <Stack.Screen name = "Registr" component = {Registr}/>
      
       </Stack.Navigator>
 }
      
   

   </NavigationContainer>
  )
 }

  } 
export default observer(App);
