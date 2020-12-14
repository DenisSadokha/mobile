
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

import StoreNotes from "../store/StoreNotes";
import qwe from "./Notes"
class Article extends Component {
    constructor(props) {
        super(props);
        this.art = props.art;
        this.id = props.art.id;
        this.token = props.token;
        this.deleteItem = this.deleteItem.bind(this);
        this.editTask = this.editTask.bind(this);
        this.navigation = this.props.navigation;
        this.completeTask = this.completeTask.bind(this);


    }
    deleteItem() {
        StoreNotes.deleteTask(this.id, this.token).then(data => {
            if (data !== false) {

                StoreNotes.updateTask();

            }
        })

    }
    editTask() {
        StoreNotes.setPropsTask(this.art.title, this.art.body, this.token, this.id, false);
        this.navigation.navigate("Edit");


    }
    completeTask() {
        StoreNotes.changeTaskState(this.art.title, this.art.body, this.token, this.id, !this.props.art.done)
            .then(data => {
                if(data!==false){
                  return true;
                    
                }
                return false;
                

            })
            .then(data => {
                if(data ===true){
                    StoreNotes.updateTask();
                }
            })
            

    }
    render() {
        console.log("ARTICLE render " + this.props.art.done)
        var s = this.props.art.done;
        let text = this.props.art.done ? "Отменить" : "Выполнить"
        let status = this.props.art.done ? "Выполнена" : "Не выполнена"
        let color = this.props.art.done ? "green" : "gray"
        return (
            <View >
                <Text style={{ color: color }}>
                    {status}
                </Text>
                <Text >
                    {this.art.title}
                </Text>
                <Text >
                    {this.art.body}
                </Text>
                <Button title="Редактировать" onPress={this.editTask} >

                </Button>
                <Button title={text} onPress={(this.completeTask)} >

                </Button>
                <Button title="Удалить" onPress={this.deleteItem}  >

                </Button>
            </View>

        )
    }
}
export default Article;