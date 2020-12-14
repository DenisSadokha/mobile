import { observer } from "mobx-react";
import React, { Component } from "react";
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
    BackHandler,
    Alert
} from 'react-native';
import BaseComp from "./BaseCompNotes"
import StoreNotes from "../store/StoreNotes";
import StoreAuth from "../store/StoreAuth";
class EditNotes extends Component {

    constructor(props) {
        super(props);
        this.saveTask = this.saveTask.bind(this);




    }
    backAction = () => {
        Alert.alert("WARN", "Are you sure you want to go back?", [
            {
                text: "Nea",
                onPress: () => null,

            },
            { text: "Da", onPress: () => this.props.navigation.goBack() }
        ]);
        return true;
    };
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }



    saveTask() {
        StoreNotes.editTask(StoreNotes.title, StoreNotes.body, StoreNotes.id, StoreAuth.token, StoreNotes.done).then(data => {

            if (data !== false) {
                StoreNotes.clear()
                StoreNotes.updateTask().then(data => {
                    if (data === true) {
                        this.props.navigation.navigate("Notes");
                        StoreNotes.title = "";
                        StoreNotes.body = "";
                    }
                })
            }
        })
    }
    render() {
        return (
            <BaseComp title={StoreNotes.title} body={StoreNotes.body} onClickM="setTitle" onClickM2="setBody"
                bTitle="Сохранить" onPress={this.saveTask} />

        )


    }

}
export default EditNotes;