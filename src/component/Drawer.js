import React from "react"
import Logo from '../asset/IMG.png'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Nav } from "./Nav";

const Drawer = (props) => {
    return(
        <>
            <div className='side-menu'>
                <div className="top-section">
                    <div className="logo-container">
                        <img className='logo 2img' src={Logo} />
                    </div>
                </div>
                {Nav.map((val,i)=>(
                     <div className="item-container" onClick={()=>window.location.pathname=val.link}>
                          <div className={window.location.pathname === val.link ? "active-container" : "inactive-container"}>
                               <div className="icons">{val.icon}</div>
                                <div className="link">{val.name}</div>
                          </div>
                      </div>
                ))

                }
              
            </div>
            <div className="content">
                {props.children}
            </div>
        </>
    )
}

export default Drawer