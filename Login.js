import React from "react";
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login () {
    return (

        <div className="main_container">

            <div className="login_header"></div>
            
            <br></br><br></br>

             <div className="Heading_text">
                <h1 className="Main_text">Log In</h1> 
                <h5 className="Sub_text">Enter Your Phone Number To Log In</h5>
             </div> <br></br><br></br><br></br>


            {/* Login And Password Container  */}

             <div className="login_container ">
                 
                 <div><TextField id="outlined-multiline-flexible" label="Email" multiline maxRows={4}onC /></div> <br></br>
            
                 <div><TextField id="outlined-multiline-flexible" label="Password" multiline maxRows={4}onC /></div>
            
             </div> <br></br>

             {/* Button Class  */}

             <div className="button_container">
                 
                 <div><Button variant="contained">  Continue With App Login </Button></div> <br></br>

                 <div className="container"><p className="center_text"> Or </p></div> <br></br>

                 <div><Button variant="outlined" >Continue With Facebook</Button></div> <br></br><br></br><br></br>


                 <div><Button variant="outlined" >Continue with Apple Pay</Button></div>
            
            
            </div>


        </div>

    )
};

export default Login;