import React, { Component } from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./LogIn"
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
const Drawer = createDrawerNavigator();
class Notes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("render notes")
        return (
            <View>
                <Text>
                 its mnotes
                </Text>

        
           
            {/* <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="Home" component={Notes} />
            </Drawer.Navigator> */}
            </View>
        
        
               
        

        )
    }

}
export default Notes;