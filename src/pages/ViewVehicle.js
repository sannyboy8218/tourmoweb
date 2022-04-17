import { Grid,Paper,Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Drawer from '../component/Drawer';
import API from '../endpoints/API';


const ViewVehicle = () =>{
   const {id} = useParams()
   const [data,setdata] = useState({});
   
   useEffect(()=>{
        getdata();
   },[])
   
   const getdata = async() =>{
      let res = await API.getmotor(id);
      console.log(res);
      setdata(res.data);
    }
    
    const verify = () =>{
        const payload = {
            id:id
        }
        API.verifyMotorbike(payload).then(res=>{
            alert(res.data.message);
        })
    }
    return(
        <Drawer>
            <h1>Motorbike Data</h1>
            <Grid container spacing={4}>
                <Grid item>
                    <img src={API.baseUrl+data.pic1} className="verifyimg"/>
                </Grid>
                <Grid item>
                    <img src={API.baseUrl+data.pic2} className="verifyimg"/>
                </Grid>
                <Grid item>
                    <img src={API.baseUrl+data.pic3} className="verifyimg"/>
                </Grid>
                <Grid item>
                    <p>Brand: {data.brand}</p>
                    <p>Model: {data.name}</p>
                    <p>Transmission: {data.transmission}</p>
                    <Button onClick={verify}>Verify</Button>
                </Grid>
            </Grid>
        </Drawer>
    );
}

export default ViewVehicle;