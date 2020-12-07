
import { action, observable, decorate } from "mobx";
import makeRequest from "../requestHelper"
import {requestApi} from "../congifRequest"
import Login from "../component/LogIn"
let form;
class Store { 
  
    login;
    pass;
    statusReg;
    statusLog;
    isAuth;
    SignOut(){
      this.isAuth = false;
    }
    registr(login, password) {
        console.log(" ist LOGIN " + login)
        
       
            form = {
                email: login,
                password: password
            }            
            return req = makeRequest(requestApi.registrApi, form, 'POST')
                .then(data => {
                    if (data !== false) {
                        this.statusReg = "вы успешно зарегистрировались"
                        return true;


                    } else {
                        this.statusReg = "ошибка регистрации"
                        return false;

                    }

                });
       

    }
    logIn(login, password) { 
            form = {
              email: login,
              password: password
            }
            this.login=login;
        
           return  req = makeRequest(requestApi.loginApi, form, 'POST')
              .then(json => {
                if (json !== false) {
                  makeRequest(requestApi.getApi + json.id, null, 'GET')
                    .then(jsonArr => {
                      if (jsonArr !== false) {
                       this.isAuth = true;
                    //   this.props.navigation.navigate("Notes") 

                 //       StoreNotes.arrTask = jsonArr;
                   //     this.token = json.id;
                    //    this.isValid = true;
                    //    StoreNotes.loadComplete();
                        this.mess = '';
                        return true;
        
        
                      } else {
                        console.log("FALSE")
                        this.statusLog = "ошибка входа";
                        return false;
        
                      }
                    })
        
                } else {
                  this.isValid = false;
                  this.statusLog = "ошибка входа";
                  return false;

                }
              });
        
          
      


    }


}
Store = decorate(Store, {
    login: observable,
    pass: observable,
    statusReg: observable,
   statusLog: observable,
    onRegistr: action,
    isAuth:observable
})
export default new Store();