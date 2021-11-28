import React from 'react'
import "../App.css";

export default function Experience({owner}) {

    const experience = owner.experience.map((item) => {
        return(
            <div className="container-fluid mt-4 opacity">
                <div className="row AnimateRow">
                    <div style={{fontSize:"3rem"}} className="col-md-1">
                        {item.logo}
                    </div>
                    <div className="col-md-11">
                        <div><b>{item.role}</b></div>
                        <div>
                            <span>{item.organization}</span>
                            {item.type ? <span>{' '}&bull;{' '} {item.type}</span>:null}
                            {item.location ? <span>{' '}&bull;{' '} {item.location}</span>:null}
                        </div>
                        <div>
                            <span>
                                {item.start} {' '} - {' '} {item.End ? item.End:null}
                            </span>
                        </div>
                        <div className="col-md-6 mt-4 mb-4 newLine">
                            <li><b>Description</b></li>
                            {item.description}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div className="container-fluid">
            <div style={{fontSize:"1.6rem"}} className="row mt-4 mb-5 text-center Heading">
                <b>EXPERIENCE</b>
            </div>
            {experience}
        </div>
    )
}
