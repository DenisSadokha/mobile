
import { action, observable, decorate, computed, makeA } from "mobx";
import makeRequest from "../requestHelper"
import { requestApi } from "../congifRequest"
import Login from "../component/LogIn"
import storeAuth from "./StoreAuth"
import notes from "../component/Notes"


class StoreNotes {
    arrTask = [];
    title;
    body;
    curTitle;
    curBody;
    createTask2(title, body) {
        let form = {
            title: title,
            body: body,
            done: false
        }
        return req = makeRequest(requestApi.createApi + storeAuth.token, form, "POST");

    }
    deleteTask(id, token) {
        let url = requestApi.deleteApi + id + "?access_token=" + storeAuth.token;
        return makeRequest(url, null, "DELETE");

    }

    clear() {
        this.arrTask = [];

    }
    setBody(body) {
        this.body = body;
    }
    setTitle(title) {

        this.title = title;
        console.log("title " + this.title)
    }
    setPropsTask(title, body, token, idTask, done) {
        this.title = title;
        this.body = body;
        this.token = token;
        this.id = idTask;
        this.done = done;


    }
    changeTaskState(title, body, token, id, done) {
        let url = requestApi.editApi + id + "?access_token=" + token;
        let form = {
            title: title,
            body: body,
            done: done,
            id: id
        }
        return makeRequest(url, form, "PUT");
    }
    editTask(newTitle, newBody, id, token, done) {
        let form = {
            title: newTitle,
            body: newBody,
            done: this.done,
            id: this.id
        }
        console.log("form " + form.title)
        return makeRequest(requestApi.editApi + this.id + "?access_token=" + this.token, form, "PUT");

    }
    updateTask() {
        return req = makeRequest(requestApi.getApi + storeAuth.token, null, 'GET')
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




} StoreNotes = decorate(StoreNotes, {
    //  isAuth: observable,
    arrTask: observable,
    updateTask: action,
    deleteTask: action,
    // update: action,
    // clear: action,
    //  isLoading: observable,
    // loadStart: action,
    // loadComplete: action,
})

export default new StoreNotes();