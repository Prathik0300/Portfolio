import React, { useEffect, useState } from 'react';
import "../App.css";
import {Link} from "react-router-dom";

var openVal = 0;
const NavbarValues = ["Education","Certifications","Volunteer","Skills","Experience","Projects"];


export default function Navbar() {

    const [Active,setActive] = useState(false);
    const [HasOpened,setHasOpened] = useState(false);
    const [ActiveNavItem,setActiveNavItem] = useState(-1);

    useEffect(() => {
        if(Active===false && openVal>0){
            setHasOpened(true);
        }
        else{
            setHasOpened(false);
        }
    },[Active]);

    const UpdateState = () => {
        setActive((x)=>!x);
        ++openVal;
    }

    const UpdateActiveNavItem = (idx) => {
        setActiveNavItem(idx);
    }

    const NavItems = NavbarValues.map((item,idx) => {
        const isActive = ActiveNavItem===idx?true:false;
        return(
            <Link to={`/${item}`} style={{textDecoration:"none"}}>
                <div key={idx} onClick={()=>UpdateActiveNavItem(idx)} className={`NavItemHighlight ${isActive?"NavItemActive":""}`}>
                    <b>{item}</b>
                </div>   
            </Link>         
        );
    })

    return (
        <>
            <div className="Toggle">
                <div onClick={()=>UpdateState()} className={`HamburgerWrapper ${Active?"ToggleActive":""}`}>
                    <div className="Hamburger"></div>
                </div>
            </div>

            <div className={`NavbarWrapper ${Active?"ToggleActive":HasOpened?"NavSlide":""}`}>
                <div className="NavbarPane">
                    <div style={{marginTop:"8rem"}}>
                        {NavItems}
                    </div>
                </div>
            </div>
        </>
    )
}
