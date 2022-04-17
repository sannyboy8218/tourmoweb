import React,{Profiler, useEffect} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Drawer from "../component/Drawer"
import API from "../endpoints/API";


const User = () =>{
    const [rows,setrow] = React.useState([]);

    useEffect(()=>{
        getdata()
    },[])

    const getdata = async() =>{
       try{
        let resp = await API.userlist();
        setrow(resp.data);
        console.log("Response",resp.data);
       }catch(e){
           console.log(e);
       }
        
    }
    
    const changeStatus = (id,status) =>{
        const payload = {
            id:id,
            status:status
        }
        API.changeStatus(payload).then(res=>{
            if(res.data.status ==1 ){
                alert(res.data.message);
                getdata();
            }else{
                alert(res.data.message);
            }
        })
    }

    return  (
        <Drawer>
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Full Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Contact</TableCell>
                            <TableCell align="left">Is Verified</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row,i) => (
                            <TableRow
                            key={i.toString()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"><a href={`/viewuser/${row.user_id}`}>{row.firstname+" "+row.middlename+" "+row.lastname}</a></TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.contact}</TableCell>
                                <TableCell align="left">{row.isVer == 0 ? "Semi-Verified" : "Verified"}</TableCell>
                                <TableCell align="left">{row.isActive == 1 ? " Active" : "Inactive"}</TableCell>
                                <TableCell align="center">{row.isActive == 1 ?
                                    (<Button variant="contained" onClick={()=>changeStatus(row.user_id,"0")} color="error">Deactivate</Button>)
                                    :
                                    (<Button variant="contained"  onClick={()=>changeStatus(row.user_id,"1")} color="success">Activate</Button>)

                                }</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </>
        </Drawer>
    )
}

export default User