import React from 'react';
import StarRating from 'react-star-ratings';

export default function Skills({owner}) {

    const skill = owner.skills.map((item) => {
        return(
            <div key={item.id} className="container-fluid mt-4 mb-4">
                <div className="row AnimateRow">
                    <div className="col-md-1">
                        <span style={{fontSize:"2.5rem"}}>{item.logo}</span>
                    </div>

                    <div className="col-md-6">
                        <div>
                            <b>{item.name}</b>
                        </div>
                        <div className="mt-3">
                            <StarRating
                                rating={item.stars}
                                starRatedColor= '#9c173a'
                                numberOfStars={5}
                                name='rating'
                                starDimension="27px"
                            />
                        </div>
                        <div className="col-md-5">
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="container-fluid opacity">
            <div style={{fontSize:"1.6rem"}} className="row text-center Heading">
                <b>SKILLS</b>
            </div>
            <div className="row">
                <div className="ml-4">
                    {skill}
                </div>
            </div>
            
        </div>
    )
}
