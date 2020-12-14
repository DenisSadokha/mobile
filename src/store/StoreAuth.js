
import { action, observable, decorate } from "mobx";
import makeRequest from "../requestHelper"
import { requestApi } from "../congifRequest"
import Login from "../component/LogIn"
import StoreNotes from "./StoreNotes"
let form;
class Store {

  login;
  pass;
  statusReg;
  statusLog;
  isAuth;
  token;
  SignOut() {
    this.isAuth = false;
  }
  setLogin(login) {
    console.log("weqeqwe" + login)
    this.login = login;
    this.loginForStatus= login;
  }
  setPass(pass) {
    this.pass = pass;
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
          this.login="";
          this.pass="";
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
    this.login = login;

    return req = makeRequest(requestApi.loginApi, form, 'POST')
      .then(json => {
        this.token = json.id;
        if (json !== false) {
          StoreNotes.updateTask().then(data => {
            if (data === true) {
              this.isAuth = true;
              
              this.login="";
              this.pass="";
              return true;
            } else {
              this.statusLog = "ошибка входа";
              console.log("FALSE")
              return false
            };
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
  isAuth: observable
})
export default new Store();