import React from 'react';
import { OWNER } from "../shared/prathik";
import "bootstrap/dist/css/bootstrap.min.css";
import Typical from "react-typical";
import "../App.css";

const owner = OWNER;

export default function Header() {

    const social = owner[0].socialLinks.map((item) => {
        console.log(item.link,item.name);
        return(
                <p key={item.id}>
                    <a href={item.link} target="blank">
                        {item.logo}
                    </a>
                </p>
        );
    })

    const profile = owner.map((item) => {
        return(
            <div key={item.id} className="row">
                <div className="col-md-5 text-center Name">
                    <img object src={item.image} alt={item.name}/>
                </div>

                <div className="col-md-5 text-center Tagline">
                    <b><p style={{fontSize:"1.7rem"}}>{item.name}</p></b>
                    <p>
                        <span>I am</span>
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={
                                [
                                    ' a Full stack Web Developer',
                                    1000,
                                    ' a Blockchain enthusiast',
                                    1000,
                                    ' a Competitive coder',
                                    1000,
                                ]
                            }
                        />
                    </p>
                </div>

                <div style={{zIndex:"50"}} className="col-md-2 text-center SocialLink">
                    {social}
                </div>
            </div>
        );
    })

    return (
        <div className="container-fluid">
            {profile}
        </div>
    )
}
