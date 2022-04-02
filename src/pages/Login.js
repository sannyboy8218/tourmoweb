import React from "react"
import{ TextField,Button} from '@mui/material'
import Logo from '../asset/IMG.png'

 const Login = () =>{
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
                <div className="formControl">
                    <TextField fullWidth id="fullWidth" label="Email" size="small" variant="outlined" />
                </div>
                <div className="formControl">
                    <TextField fullWidth id="fullWidth" label="Password" size="small" variant="outlined" />
                </div>

                <div className="button"> 
                <Button fullWidth size='large' variant="contained" >
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