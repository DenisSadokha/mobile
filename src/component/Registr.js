import React, { Component } from "react"
import { observer } from "mobx-react"
import store from "../store/StoreAuth"
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
        width: "70%"
    }


});


class RegsitrActivity extends Component {

    constructor(props) {
        super(props);
        this.registrate = this.registrate.bind(this);


    }
    registrate() {
        store.registr(store.login, store.pass).then(data => {
            console.log("REGIST " + data)
            if (data === true) {
                this.props.navigation.navigate("Login")

            }
        })
    }

    render() {
        if (store.isAuth) {
            return (
                <Text>вы уже вошли</Text>

            )
        }
        return (
            <View>
                <Text style={styles.text}>
                    Регистрация
         </Text>
                <BaseComp />
                <Button title="Зарегистрироваться" style={styles.button} onPress={this.registrate}>
                </Button>
                <Text ref={this.messIn}>
                    {store.statusReg}

                </Text>
            </View>

        )
    }
}
export default observer(RegsitrActivity);