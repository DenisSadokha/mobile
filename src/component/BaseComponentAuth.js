import React, {Component} from "react"
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
  import store from "../store/StoreAuth"
class BaseComp extends Component {
    constructor (props){
        super(props);

    }

    render(){
       
        return(
            <View>

            <Input comp = {prop = {
                styleM:"boxLogin",
                text: "Логин",
                onClick: "setLogin",
               

            }} />
    
            <Input comp = {prop = {
                styleM:"boxPassword",
                text: "Пароль",
                onClick: "setPass"

            }}  ></Input>
            </View>
            
        )

    }


}
function Input(props){

    return (
        <View style = {styles[props.comp.styleM]}>
            <Text>
                {props.comp.text}:
            </Text>
 
        <TextInput style = {styles.input} onChangeText={val => store[props.comp.onClick](val)}> 
        </TextInput>
        </View>
    )

}
const styles = StyleSheet.create({
    boxLogin : {
    marginTop: 300,
    marginLeft: 10,
    flexDirection: "row",
    },
    boxPassword: {
        marginLeft: 10,
        marginTop: 15,
        flexDirection: "row"



    }, 
    text: {
        marginTop: 100,
        marginLeft: 130,
        fontSize: 25
    },
    button: {
        marginStart: 15,
       
        fontSize: 5
    },
    input: {
        borderStyle: "solid",
        borderColor: "#3949ab",
        borderBottomWidth: 2,
        width:"70%"
    }
   
   
 }); 
 export default BaseComp;
