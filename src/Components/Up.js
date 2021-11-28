import React, { useEffect, useState } from 'react';
import {FaArrowUp} from 'react-icons/fa';
import '../App.css';

function Up(){

    const [showUp,setShowUp] = useState(false);
    const [ValidTop,setValidTop] = useState(false)

    window.onscroll = () => {scrollEvent();};

    const scrollEvent = () => {
        if(document.body.scrollTop>=150 || document.documentElement.scrollTop>=150){
            setValidTop(true);
        }
        else{
            setValidTop(false);
        }
    }

    const ScrollUp = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        setShowUp(ValidTop);
    },[ValidTop]);


    return(

        <div>
            {showUp ? <div id='up' onClick={()=>ScrollUp()}>
        <FaArrowUp id='arrow' style={{backgroundColor:'#9c173a',color:'white',fontSize:'3rem'}}/>
        </div>:null}
        </div>
    );
}


export default Up;