import React from 'react';
import axios from 'axios'
import { Api } from '@mui/icons-material';

const api = "http://192.168.1.6/tourmo/"

export default {
    baseUrl:api,
    userlist:async ()=>{
        let resp = await axios.get(api+"user/userlist");
        return resp.data;
    },
    userprofile:async (id)=>{
        let resp = await axios.get(api+"user/profile/"+id);
        return resp.data;
    },
    verify:(payload)=>{
        const headers ={
            "Content-Type" : "text/plain"
        }
        return axios.post(api+"user/verify",payload,{headers})
    },
    changeStatus:(payload) =>{
        const headers ={
            "Content-Type" : "text/plain"
        }

        return axios.post(api+"user/changeStatus",payload,{headers});
    },
    getvehicles:async() =>{
        let resp = await axios.get(api+"/vehicle/allvehicle");
        return resp.data;
    },
    getmotor : async(id) =>{
        let resp = await axios.get(api+"/vehicle/getbyid/"+id);
        return resp.data;
    },
    verifyMotorbike: (payload)=>{
        const headers = {
            "Content-Type" : "text/plain"
        }
        return axios.post(api+"/vehicle/verify",payload,{headers});
    }

}