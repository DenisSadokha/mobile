import { observer } from "mobx-react"

import storeNotes from "../store/StoreNotes"
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
} from 'react-native';
import BaseComp from "./BaseCompNotes"
class CreateActivity extends Component {
  constructor(props) {
    super(props)
    this.createTask = this.createTask.bind(this)


  }
  createTask() {
    storeNotes.createTask2(storeNotes.title, storeNotes.body).then(data => {
      if (data !== false) {
        return storeNotes.updateTask();
      }
      console.log("data " + data)
    }).then(data => {
      if (data === true) {
        this.props.navigation.navigate("Notes")
        storeNotes.title = "";
        storeNotes.body = "";
      }


    })




  }
  render() {
    return (
      <BaseComp title="" body="" onClickM="setTitle" onClickM2="setBody"
        bTitle="Создать" onPress={this.createTask} />
    )
  }

}
export default observer(CreateActivity);