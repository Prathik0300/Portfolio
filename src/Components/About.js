import React from 'react'
import { OWNER } from '../shared/prathik'
import { Button} from 'reactstrap';
import { FaEnvelope,FaPhoneAlt,FaArrowAltCircleDown } from 'react-icons/fa';
import {Link} from "react-router-dom";

const owner = OWNER;
var FileSaver = require("file-saver");

export default function About() {

    const Download = () => {
        FileSaver.saveAs(owner[0].resume,"PRATHIK_PUGAZHENTHI_RESUME.pdf");
    }

    const contacts = <div className="mt-5" style={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
        <div style={{marginRight:"2.5rem"}}>
            <Button id="contactBtn" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
                <a id="ContactLink" href="tel:9176844636">
                    <FaPhoneAlt style={{fontSize:"1.5rem"}}/>
                </a>
            </Button>
        </div>

        <div>
            <Link to="/Portfolio">
                <Button id="contactBtn" style={{paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
                    <a id="ContactLink" href="mailto:prathik0300@gmail.com">
                        <FaEnvelope style={{fontSize:"1.5rem"}}/>
                    </a>
                </Button>
            </Link>
        </div>
    </div>

    return (
        <>
            <div className="container-fluid customContainer opacity">
                <div className="row pb-5" style={{paddingTop:"3rem"}}>
                    <div className="col-md-6 text-center mt-5 " style={{fontSize:"2rem",color:"#fff"}}>
                        <b className="FooterName">{owner[0].name}</b>  
                    </div>
                    <div className="col-md-6 text-center contacts" style={{marginTop:"-5rem"}}>
                        <div id="ContactTitle" className="text-center mb-4 contact" style={{fontSize:"1.3rem",color:"#fff"}}>
                            <b>CONTACT ME</b>
                        </div>
                        {contacts}
                        <div style={{marginLeft:"0.4rem"}} className="mt-5">
                            <Button className="py-3 px-2" id="contactBtn" onClick={Download}>
                                <b >Download Resume</b>
                                <span>{'  '}<FaArrowAltCircleDown id="ContactLink" style={{fontSize:"1.5rem"}}/></span>
                            </Button>
                            
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4 pb-3" style={{color:"#fff"}}>
                    <span>&copy; 2021 <a href="/"><b id="Owner">Prathik Pugazhenthi</b></a></span>
                </div>
            </div>
        </>
    )
}
