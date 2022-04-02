import React from "react"

import Drawer from '../component/Drawer'

const Home = () => {
    console.log(window.location.pathname)
    return(
        <>
          <Drawer>
            <h1>User Page</h1>
          </Drawer>
        </>
    )
    
}

export default Home