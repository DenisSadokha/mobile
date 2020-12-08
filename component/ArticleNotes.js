
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
class Article extends Component {
    constructor(props){
        super(props);
        this.art = props.art;
        this.id =props.art.id;
        this.token = props.token;
        

    }
    render(){
        let text = this.props.art.done ? "Отменить" : "Выполнить"
        let status = this.props.art.done ? "Выполнена" :"Не выполнена"
        let color = this.props.art.done ? "green" : "gray"
        return(
            <View >
                <Text style = {{color: color}}>
                    {status}
                </Text>
                <Text >
                    {this.art.title}
                </Text>
                <Text >
                    {this.art.body}
                </Text>
            <Button title = "Редактировать" >

            </Button>
            <Button title = {text} >

            </Button>
            <Button title = "Удалить" >

</Button>
            </View>

        )
    }
}
export default  Article;