import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header';
import Education from './Education';
import Certification from "./Certification";
import Volunteer from './Volunteer';
import { OWNER } from "../shared/prathik";
import Skills from './Skills';
import Experience from './Experience';
import Project from './Projects';
import "../App.css";
import About from './About';

const URL = window.location.pathname;
const owner = OWNER;

export default function Main() {
    return (
        <>
            <div className="background">
            <Navbar URL={URL}/>
            <Header/>
            <div className="container-fluid">
                <div className="row mt-5 col-md-12 px-5">
                    <div className="col-md-2 mx-1"></div>
                    <div className="col-md-8 mx-1 fontSel" style={{fontSize:"1.2rem",textAlign:"justify"}}>
                        <b>{owner[0].about}</b>
                    </div>
                    <div className="col-md-2 mx-1"></div>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={() => <Education owner={OWNER[0]}/>}/>
                <Route exact path="/Education" component={() => <Education owner={OWNER[0]}/>}/>
                <Route exact path="/Certifications" component={() => <Certification owner={OWNER[0]}/>}/>
                <Route exact path="/Volunteer" component={() => <Volunteer owner={OWNER[0]}/>}/>
                <Route exact path="/Skills" component={() => <Skills owner={OWNER[0]}/>}/>
                <Route exact path="/Experience" component={() => <Experience owner={OWNER[0]}/>}/>
                <Route exact path="/Projects" component={() => <Project owner={OWNER[0]}/>}/>
                <Redirect to="/"/>
            </Switch>
            <About/>
            </div>
            
        </>
    )
}
