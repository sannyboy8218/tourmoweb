import React, { useState } from "react"
import{ TextField,Button} from '@mui/material'
import Logo from '../asset/IMG.png'

 const Login = () =>{
    const [view,setview] = useState(false);
    const [message,setmessage] = useState("");

    const submit = () =>{
        setview(true)
        setmessage("Wrong Credential")
    }
return (
    <div className="login">
        <div className="container">
            <img className='img' src={Logo} />
        </div>
        <div className="container">
            <div style={style.box}>
                <div className="container1">
                    <h1>TOURMO</h1>
                </div>
                {view &&
                    <p>{message}</p>
                }
                <div className="formControl">
                    <TextField fullWidth id="fullWidth" label="Email" size="small" variant="outlined" />
                </div>
                <div className="formControl">
                    <TextField fullWidth id="fullWidth" label="Password" size="small" variant="outlined" />
                </div>

                <div className="button"> 
                <Button fullWidth size='large' variant="contained" onClick={submit}>
                    Log In
                </Button>
                </div>
                
            </div>
        </div>
    </div>
  
)
}
export default Login


const style = {
    box:{
        width:'80%',
        height:'400px',
        backgroundColor:'white',
        padding:20,
    },
  
}