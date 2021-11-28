import React from 'react'
import {FaHandsHelping} from 'react-icons/fa';


export default function Volunteer({owner}) {

    const volunteer = owner.volunteer.map((details) => {
        return(
            <div key={details.id} className="container-fluid mt-4 mb-4">
                <div className="row AnimateRow">
                    <div style={{fontSize:"3rem"}} className="col-md-1">
                        <FaHandsHelping/>
                    </div>
                    <div className="col-md-11">
                        <div><b>{details.role}</b></div>
                        <div>{details.organization}</div>
                        <div>
                            {details.start} {' '} - {' '} {details.end}
                        </div>
                        <div>{details.cause}</div>
                        <div className="mt-3">
                            <li><b>Description</b></li>
                            <div className="mt-2 col-md-6">
                                {details.description}
                                <hr/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <div className="container-fluid opacity">
            <div style={{fontSize:"1.6rem"}} className="row text-center Heading">
                <b>VOLUNTEER</b>
            </div>
            {volunteer}
        </div>
    )
}
