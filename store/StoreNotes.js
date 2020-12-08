
import { action, observable, decorate, computed, makeA } from "mobx";
import makeRequest from "../requestHelper"
import { requestApi } from "../congifRequest"
import Login from "../component/LogIn"
import storeAuth from "./StoreAuth"


class StoreNotes {
    arrTask = []; 
    createTask2(title, body){
        let form = {
            title: title,
            body: body,
            done: false
        }
        return req = makeRequest(requestApi.createApi + storeAuth.token, form, "POST");
        
    }
    updateTask(){
    return req =   makeRequest(requestApi.getApi + storeAuth.token, null, 'GET')
                        .then(jsonArr => {
                            if (jsonArr !== false) {
                                console.log("GET")
                                console.log(this.arrTask.length);
                                console.log(jsonArr.length);
                               this.arrTask = jsonArr;
                               console.log(this.arrTask.length);

                                return true;
 

                            } else {
                                console.log("NOPE1")

                                return false;

                            }
                        })

    }
   
    createTask(title, body) {
        let form = {
            title: title,
            body: body,
            done: false
        }
     //   return  makeRequest(requestApi.createApi + storeAuth.token, form, 'POST');


       return req = makeRequest(requestApi.createApi + storeAuth.token, form, 'POST')
            .then(json => {
                if (json !== false) {
                    makeRequest(requestApi.getApi + storeAuth.token, null, 'GET')
                        .then(jsonArr => {
                            if (jsonArr !== false) {
                                console.log("GET")
                               
                            
                               this.arrTask = jsonArr;
                                return true;


                            } else {
                                console.log("NOPE1")

                                return false;

                            }
                        })

                } else {
                    console.log("NOPE2")

                    return false;

                }
            });




    }


    StoreNotes = decorate(StoreNotes, {
        //  isAuth: observable,
        arrTask: observable,
        updateTask:action,
        // update: action,
        // clear: action,
        //  isLoading: observable,
        // loadStart: action,
        // loadComplete: action,
    })

}
export default new StoreNotes();