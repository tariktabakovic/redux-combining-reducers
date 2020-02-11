import {
    createStore, 
    combineReducers
} from 'redux';


const UPDATE_CONTACT = 'UPDATE_CONTACT';
function actionUpdateContact(contactName){
    return {
        type: UPDATE_CONTACT,
        payload: {
            contactName
        }
    }
}


const UPDATE_JOBS = 'UPDATE_JOBS';
function actionUpdateJob(jobName){
    return {
        type: UPDATE_JOBS,
        payload: {
            jobName
        }
    }
}





const defaultContactSate= {
    contact: ''
}
function contacts (state= defaultContactSate, action){
    const newState= {...state};
    switch(action.type){
        case UPDATE_CONTACT:
            newState.contact = action.payload.contactName;
            break;
        default:
            break;
    }
    return newState;
}


const defaultJobState = {
    job: ''
}
function jobs (state= defaultJobState, action){
    const newState = {...state};
    switch(action.type){
        case UPDATE_JOBS:
            newState.job = action.payload.jobName;
            break;
        default:
            break;
    }
    return newState;
}

const rootReducer = combineReducers (
    {
        contacts: contacts,
        jobs: jobs
    }
)
















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
