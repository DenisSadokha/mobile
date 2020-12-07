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
  import {observer} from "mobx-react"
import store from "../store/StoreAuth"
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
        marginLeft: 175,
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

class LoginActivity extends Component{

    constructor(props) {
        super(props)
        this.logIn= this.logIn.bind(this)
       

    }

    logIn(){
        store.logIn(this.state.login, this.state.pass).then(data => {
            if(data!==false){
                
            }
             
        })
    }
    render(){
        if(store.isAuth){
            return (
                <View>

                <Text>вы уже вошли</Text>
                <Button title = "Перейти к заметкам" onPress = {() =>this.props.navigation.navigate("Notes")}>
                </Button> 
                </View>

    
            )
        }
        return (
        
            <View>
            <Text style = {styles.text}>
                Вход
            </Text>
            <View style = {styles.boxLogin} >
    
            <Text >
                Логин:  
            </Text>
           <TextInput style = {styles.input}  onChangeText={login => this.setState({login})} >       
           </TextInput>
           </View>
           <View style = {styles.boxPassword}>
               <Text>
                   Пароль:
               </Text>
    
           <TextInput style = {styles.input}  onChangeText={pass => this.setState({pass})}  >
           
    
           </TextInput>
           </View>
    
           <Button title = "Войти" style = {styles.button} onPress = {this.logIn} >
           </Button>

           <Button title = "Зарегистрироваться" style = {styles.button} onPress = {() => this.props.navigation.navigate("Registr")} >
           </Button>
           <Text>
               {store.statusLog}
           </Text>
           </View>
          
    
        )
    }

}
export default observer(LoginActivity);