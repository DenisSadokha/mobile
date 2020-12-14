import React, { Component } from "react";
import BaseComp from "./BaseComponentAuth"

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
import { observer } from "mobx-react"
import store from "../store/StoreAuth"
const styles = StyleSheet.create({
    boxLogin: {
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
        width: "70%"
    }


});

class LoginActivity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            pass: ""

        }
        this.logIn = this.logIn.bind(this)


    }

    logIn() {
        store.logIn(store.login, store.pass);
    }
    render() {

        return (

            <View>
                <Text style={styles.text}>
                    Вход
            </Text>
                <BaseComp />
                <Button title="Войти" style={styles.button} onPress={this.logIn} >
                </Button>

                <Button title="Зарегистрироваться" style={styles.button} onPress={() => this.props.navigation.navigate("Registr")} >
                </Button>
                <Text>
                    {store.statusLog}
                </Text>
            </View>


        )
    }

}
export default observer(LoginActivity);