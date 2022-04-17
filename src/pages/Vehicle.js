import React,{useState,useEffect} from 'react';
import Drawer from "../component/Drawer";
import {useHistory} from 'react-router-dom';
import API from '../endpoints/API';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Vehicle = () =>{
    const [rows,setrows] = useState([]);  
    const {push} = useHistory();
    useEffect(()=>{
        getdata();
    },[])

    const getdata = async() =>{
        try{
            let res = await API.getvehicles();
            setrows(res.data);
        }catch(e){
            console.log(e);
        }
    }
    return(
        <Drawer>
              <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                        <TableCell align="left">Owner Full Name</TableCell>
                            <TableCell align="left">Brand</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Transmission</TableCell>
                            <TableCell align="left">Tourmo Points</TableCell>
                            <TableCell align="left">Is Verified</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row,i) => (
                            <TableRow
                            key={i.toString()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.firstname+" "+row.middlename+" "+row.lastname}</TableCell>
                                <TableCell align="left">{row.brand}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.transmission}</TableCell>
                                <TableCell align="left">{row.tourmopoints}</TableCell>
                                <TableCell align="left">{row.isVerified == 1 ? "Accepted":"On Verified"}</TableCell>
                                <TableCell align="center"> <Button onClick={()=>push("/viewVehicle/"+row.motor_id)}>View</Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
        </Drawer>
    );
}

export default Vehicle;


