import React from 'react'

export default function About({owner}) {

    const abt = <div className="container-fluid">
    <div className="row col-md-12">
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            {owner.about}
        </div>
    </div>
</div>
    return (
        <div className="container-fluid text-center AboutHeading">
            <div className="row text-center AboutHeadingContent">
                {owner[0].about}
            </div>
        </div>
    )
}
