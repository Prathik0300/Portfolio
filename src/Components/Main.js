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
import About from './About';

const URL = window.location.pathname;

export default function Main() {
    return (
        <>
            <Navbar URL={URL}/>
            <Header/>
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
        </>
    )
}
