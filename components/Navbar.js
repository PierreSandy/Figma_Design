import React from "react";
import '../components/Navbar.css'
import MenuIcon from "@mui/icons-material/Menu";




function Navbar ( ) {
    return (
        <div className="main_nav">

            <div className="main_text"> <div className="Menu_decal"><MenuIcon/></div><br></br> <h1 className="header_text">Turners Cars</h1></div>

            <div className=" sub_text"><h3>We're Open for Business</h3></div>

        </div>

        
    )
}

export default Navbar;