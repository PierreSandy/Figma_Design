import React from "react";
import './Home.css'
import Navbar from "./components/Navbar";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Home() {
    return (
      <div className="Home">
  
        <div><Navbar/></div><br></br>
  
        <div><h3 className="lead_text">BUY , SELL , OR TRADE</h3></div>
  
        {/* First Circle Group */}
        <div className="circle_group">
  
          <div className='circle_1'>Buy </div>
  
          <div className='circle_2'>Sell </div>
  
          <div className='circle_3'>Trade </div>
        
        </div> <br></br><br></br><br></br><br></br>
  
        {/* Second Circle Group */}
        <div className="circle_name">TURNERS SERVCES</div> <br></br>
  
         <div className='second_circle_group'>
  
            <div className='second_circle_1'>Get Finance Now</div>
              
            <div className='second_circle_2'>Get Insurance Now</div>
           
           </div><br></br><br></br><br></br><br></br>
  
          {/* Square Box Group */}
  
          <div className="Square_name">FEATURED VEHICLES</div> <br></br>
  
            <div className='square_box_group'>
  
            <ArrowBackIosIcon/> 
            <div className='square_box'></div> 
            <ArrowForwardIosIcon/>
              
              
          </div><br></br><br></br><br></br><br></br>
  
  
        {/* Button grouping for Page */}
  
          <div>
          <Button  variant="contained" disableElevation> Login In Here </Button>
          </div> <br></br>
  
          <div>
          <Button variant="outlined">Register Here</Button>
          </div>
          
  
  
      </div>
    );
  }
  
  export default Home;
  