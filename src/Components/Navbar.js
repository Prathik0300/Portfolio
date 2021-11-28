import React, { useEffect, useState } from 'react';
import "../App.css";
import {Link} from "react-router-dom";

var openVal = 0;
const NavbarValues = ["Education","Certifications","Volunteer","Skills","Experience","Projects"];

export default function Navbar({URL}) {

    const [Active,setActive] = useState(false);
    const [HasOpened,setHasOpened] = useState(false);
    const [ActiveNavItem,setActiveNavItem] = useState(-1);

    useEffect(()=>{
        var idx = NavbarValues.indexOf(URL.slice(1));
        setActiveNavItem(idx);
    },[]);

    useEffect(() => {
        if(openVal>0){
            setActive(false);
        window.scroll({
            top:600
        })
        }
        else{
            setActive(false);
        }
        
    },[ActiveNavItem])

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
            <div className="Toggle opacity">
                <div onClick={()=>UpdateState()} className={`HamburgerWrapper ${Active?"ToggleActive":""}`}>
                    <div className="Hamburger"></div>
                </div>
            </div>

            <div className={`NavbarWrapper opacity ${Active?"ToggleActive":HasOpened?"NavSlide":""}`}>
                <div className="NavbarPane">
                    <div style={{marginTop:"8rem"}}>
                        {NavItems}
                    </div>
                </div>
            </div>
        </>
    )
}
