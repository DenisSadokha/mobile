import React, {Component} from "react";
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
  import store from "../store/StoreNotes"
class BaseComp extends Component {
    constructor(props){
        super(props);
        this.title = props.title;
        this.body = props.body;
        this.onClickM = props.onClickM;
        this.onClickM2 = props.onClickM2;

        this.bTitle = props.bTitle;
        this.onPress = props.onPress;
       
    }

    render(){
        return (
            <View>

        
            <Input title = {this.title} onClickM = {this.onClickM}  />
            <Input title = {this.body} onClickM = {this.onClickM2}  />
            <Button title = {this.bTitle} onPress = {this.onPress} />
            </View>

        )
    }


}
function Input(props){
    return(
        <View>

        <TextInput defaultValue = {props.title} onChangeText= {(val) =>store[props.onClickM](val)} />
        </View>

    )

}
export default BaseComp;