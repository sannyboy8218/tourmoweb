import React, { useState,useEffect } from 'react';
import Drawer from '../component/Drawer';
import { useParams } from 'react-router-dom';
import API from '../endpoints/API';
import { Grid,Button } from '@mui/material';


const ViewUser = () =>{
    const {id} = useParams();
    const [profile,setprofile] = useState({});
    console.log(id);

    
    useEffect(()=>{
        getdata();
    },[])

    const getdata = async() =>{
        try{
            let res = await API.userprofile(id);
            setprofile(res.data[0])
        }catch(err){
            console.log(err);
        }
    }

    const verified = ()=>{
        const payload = {
            user_id:profile.user_id
        }
        API.verify(payload).then(res=>{
            console.log(res)
            if(res.data.status == 1){
                alert(res.data.message);
                getdata()
            }else{
                alert(res.data.message)
            }
        })
    }



    return(
        <Drawer>
            <>
                <h1 style={{padding:"10px 0"}}>User Profile</h1>
                <Grid container spacing={2}>
                    <Grid item spacing={8}>
                        <h5 style={{padding:"15px 10px"}} >Profile Picture</h5>
                        <img src={API.baseUrl+profile.user_pic} className="verifyimg"/>
                    </Grid>
                     <Grid item spacing={8}>
                     <h5 style={{padding:"15px 10px"}} >License Picture</h5>
                        <img src={API.baseUrl+profile.license_pic} className="verifyimg"/>
                    </Grid>
                    <Grid item spacing={8}>
                        <Grid container spacing={4} style={{padding:"5px"}}>
                            <Grid item sm style={{marginRight:20,fontWeight:'bold'}}><p>Full Name</p></Grid>
                            <Grid item style={{marginRight:20}} ><p >{profile.firstname + " " + profile.middlename + " " + profile.lastname }</p></Grid>
                        </Grid>
                        <Grid container spacing={4} style={{padding:"5px"}}>
                            <Grid item  sm style={{marginRight:20,fontWeight:'bold'}}><p>Email</p></Grid>
                            <Grid item  style={{marginRight:20}}><p >{profile.email}</p></Grid>
                        </Grid>
                        <Grid container spacing={4} style={{padding:"5px"}}>
                            <Grid item  sm style={{marginRight:20,fontWeight:'bold'}}><p>Contact</p></Grid>
                            <Grid item style={{marginRight:20}}><p>{ profile.contact}</p></Grid>
                        </Grid>
                        {profile.isVer == 0 &&
                             <Button variant='contained' onClick={verified}>Verify</Button>
                        }
                       
                    </Grid>
                </Grid>
            </>
        </Drawer>
    );
}

export default ViewUser;