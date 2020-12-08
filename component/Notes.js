import React, { Component } from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./LogIn"
import storeNotes from "../store/StoreNotes"
import storeAuth from "../store/StoreAuth"
import ArticleNotes from "./ArticleNotes"

import { observer } from "mobx-react";



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
        this.openCreateActivity = this.openCreateActivity.bind(this);

    }
    openCreateActivity(){
        this.props.navigation.navigate("Create")

    }
    render() {

        console.log("render start")
        let arr = storeNotes.arrTask;
     console.log("render notes")
       console.log(arr+ " arr")

        if (arr.length > 0) {
            var tempNews = arr.map(function (item, index) {
              return <View >
                <ArticleNotes art={item} token={storeAuth.token} />
              </View>
            });
          } else {
          tempNews = <Text>заметок нету + {storeNotes.arrTask}</Text>
          }
        return (
            <View>

            <Button title = "create task" onPress = {this.openCreateActivity}/>
            <ScrollView>

            <View>
                
                {tempNews}
            
        

            </View>
            </ScrollView>
        
            </View>
        
               
        

        )
    }

}
export default observer(Notes);