import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../App.css";


const Activities = ({activities}) => {

    const activity = activities.map((item) => {
        return(
            <li>{item.name}</li>
        );
    });

    return(
        <div className="row mt-4">
            <div><b>Activites</b></div>
            <div className="ml-1 mt-1">
                {activity}
            </div>
        </div>
    );
}

export default function Education({owner}) {

    const edu = owner.education.map((item) => {
        return(
            <div key={item.id} className="container-fluid ml-3 mt-4 mb-4">
                <div className="row AnimateRow">
                    <div className="col-md-1">
                        <FontAwesomeIcon style={{fontSize:"2.2rem"}} icon={item.icon}/>
                    </div>
                    <div className="col-md-11">
                        <div><b>{item.name}</b></div>
                        <div>
                            <span>
                                {item.degree ? <span>{item.degree},</span>:null}{' '}
                                {item.field ? <span>{item.field},</span>:null}{' '}
                                {item.grade ? <span>{item.grade}</span>:null}
                            </span>
                        </div>
                        <div>
                            {item.start} - {item.end}
                        </div>
                        <div className="col-md-6">
                            {item.activities? <Activities activities={item.activities}/>:null}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="container-fluid opacity">
            <div style={{fontSize:"1.6rem"}} className="row  text-center Heading">
                <b>EDUCATION</b>
            </div>
            {edu}
        </div>
    )
}

