import React, { useEffect, useState } from 'react';
import {Button} from "reactstrap";
import "../App.css";


export default function Certification({owner}) {
    const [ActiveBtn,setActiveBtn] = useState(-1);
    const [Certificate,setCertificate] = useState(-1);

    useEffect(()=>{
        setActiveBtn(-1);
        setCertificate(-1);
    },[]);

    const UpdateActiveBtn = (idx) => {
        setActiveBtn(idx);
    }

    const UpdateCertificate = (idx) => {
        setCertificate(idx);
    }

    const OpenCertificate = (id) => {
        UpdateActiveBtn(id);
        UpdateCertificate(id)
    }

    const certificates = owner.certifications.map((item) => {
        const Active = item.id===ActiveBtn?"ActiveBtn":"";
        const LoadCertificate = item.id===Certificate?item.image:null;

        return(
            <>
            <div key={item.id} className="container-fluid col-md-6 ml-2 mr-2">
                <div className="row mt-4 col-12 AnimateRow">
                    <div style={{fontSize:"2rem"}} className="col-md-1">
                        {item.logo}
                    </div>
                    <div className="col-md-11 AnimateRow">
                        <div style={{fontSize:"1.2rem"}}><b>{item.name}</b></div>
                        <div>{item.organization}</div>
                        <div>
                            <span>Issued {' '} {item.issue} {'- '} {item.expiry}</span>
                        </div>
                        {item.certificate?<div className="mt-1 mb-5 col-md-4 AnimateRow">
                            <Button  onClick={() => OpenCertificate(item.id)} className={`mt-3 Btn mb-3 btn ${Active}`}>
                            <b>Show Certificate</b>
                            </Button>
                            </div>:null}
                        {ActiveBtn===item.id?null:<hr/>}
                    </div>                   
                </div>
            </div>
            <div className={`container-fluid ImageRow mb-5 col-md-6 ${item.id===ActiveBtn?"InImg":""}`}>
                <div className="col-6 text-center AnimateRow">
                    {LoadCertificate?<a href={item.certificate} target="blank"><img  object src={LoadCertificate} alt={item.name}/></a>:null}
                </div>
            </div>
            <div className="pl-5 pr-5">
                {ActiveBtn===item.id?<hr/>:null}
            </div>
            </>
        );
    })

    return (
        <div className="container-fluid opacity">
            <div style={{fontSize:"1.6rem"}} className="row text-center Heading">
                <b>CERTIFICATIONS</b>
            </div>
            <div className="row">
                {certificates}
            </div>
        </div>
    )
}

