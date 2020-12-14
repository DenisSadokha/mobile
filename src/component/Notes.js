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
    FlatList,
    Item

} from 'react-native';

const Drawer = createDrawerNavigator();
class Notes extends Component {

    constructor(props) {
        super(props);
        this.openCreateActivity = this.openCreateActivity.bind(this);


    }
    openCreateActivity() {
        this.props.navigation.navigate("Create")

    }

    navigates() {
        this.props.navigation.navigate("Edit")
    }
    render() {
        let arr = storeNotes.arrTask;
        const Item = ({ title }) => (

            <View>
                <Text >{title}</Text>
            </View>

        );
        let par = this.props.navigation;
        return (
            <View>

                <Button title="create task" onPress={this.openCreateActivity} />
                <FlatList data={arr}
                    renderItem={({ item }) => (
                        <ArticleNotes art={item} token={storeAuth.token} navigation={par}
                        />

                    )} />


            </View>




        )
    }

}
export default observer(Notes);