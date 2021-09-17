import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header';
import Education from './Education';
import Certification from "../Components/Certification";
import { OWNER } from "../shared/prathik";

export default function Main() {
    return (
        <>
            <Navbar/>
            <Header/>

            <Switch>
                <Route exact path="/" component={() => <Education owner={OWNER[0]}/>}/>
                <Route exact path="/Education" component={() => <Education owner={OWNER[0]}/>}/>
                <Route exact path="/Certifications" component={() => <Certification owner={OWNER[0]}/>}/>
                <Redirect to="/"/>
            </Switch>
        </>
    )
}
