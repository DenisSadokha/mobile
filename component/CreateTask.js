import {observer} from "mobx-react"

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
class CreateActivity extends Component {
    constructor(props) {
        super(props)
        this.createTask = this.createTask.bind(this)


    }
    createTask() {
      storeNotes.createTask2(this.state.title, this.state.body).then(data =>{
        if(data!==false){
          return storeNotes.updateTask();
        }
        console.log("data "+ data)
      }).then(data =>{
          if(data===true){
            this.props.navigation.navigate("Notes") 
          }
        

      })
        // this.props.navigation.navigate("Notes") 

      

    }
    render() {
        return (
            <View>
                <TextInput onChangeText={title => this.setState({ title })} />
                <TextInput onChangeText={body => this.setState({ body })} />
                <Button title="Create" onPress={this.createTask} />


            </View>
        )
    }

}
export default observer(CreateActivity);