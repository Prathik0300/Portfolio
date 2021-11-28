import React, { useState,useEffect } from 'react';
import { Button } from 'reactstrap';
import { Pie } from 'react-chartjs-2'

var ToSetID = -1;
const axios = require('axios');

const COLORS = ['#0088FE', '#00C49F','#cc00cc','#ffff00', '#FFBB28', '#FF8042'];

function Project({owner}){
    
    const [RepoLanguage,setRepoLanguage] = useState([]);
    const [ShowChartDivId,setChartDivId] = useState(-1);
    const [chartItems,setChartItems] = useState([]);
    const [ActiveBtn,setActiveBtn] = useState(-1);

    useEffect(() => {
        setChartDivId(ToSetID);
        RepoInfo(-1,null);
    },[])

    useEffect(() => {
        setChartDivId(ToSetID);
    },[chartItems]);

    useEffect(() => {
     
        var lang = [];
        var val = [];
        var s = 0;
        var obj = RepoLanguage[RepoLanguage.length -1];

        for(const language in obj){
            lang.push(language);
            val.push(obj[language])
            s+=obj[language];
        }

        for(var i=0;i<val.length;i++){
            val[i] = (val[i]/s)*100;
        }

        setChartItems([
            <Pie
            data={{
                labels:lang,
                datasets:[{
                    label:"Percentage use of languages in the project",
                    data:val,
                    backgroundColor:COLORS
                }]
            }}
            height={250}
            width={250} 
            options={{
                maintainAspectRatio:false,
            }} 
        />
        ])
    },[RepoLanguage]);

    const RepoInfo = (id,repo) => {

        if(repo===null || repo===undefined){
            ToSetID = id;
            return;
        }

        setActiveBtn(id);
        const finalLang = axios({
            method:"get",
            url: `https://api.github.com/repos/Prathik0300/${repo}/languages`,
        })
        .then((res) => {
            return res.data;
        }).catch((error) => {
            console.error(error);
        });

        const LoadVal = async() => {
            const lang = await finalLang;
            setRepoLanguage([...chartItems,lang]);
        }
        LoadVal();
        ToSetID = id; 
    }

    const OpenLink = (link) => {
        return window.open(link,"_blank");
    }
    
    const projects = owner.projects.map((details) => {
        const isActive = details.id === ActiveBtn ? "ActiveBtn" : "";
        return(
            <div key={details.id} className="container-fluid mt-5 mb-4">
                <div className="row col-md-12">
                    <div style={{fontSize:"3rem"}} className="col-md-1">
                        {details.logo}
                    </div>
                    <div className="col-md-5">
                        <div>
                            <b>{details.name}</b>
                        </div>
                        <div>
                            <span>
                                {details.start} {' '} - {' '} {details.end ? <span>{details.end}</span>:<span>Present</span>}
                            </span>
                        </div>
                        <div className="mt-4 newLine">
                            <li><b>Description</b></li>
                            {details.description}
                        </div>
                        <div key={details.id} style={{display:'flex',flexDirection:'row'}} className="mt-4 ProjectCustomBtn">
                            <div>
                                {details.link ? <Button className="Btn" onClick={() => OpenLink(details.link)}>Project Link</Button> : null}
                            </div>
                            <div>
                                {details.repo ? <Button className={`ProjectBtn Btn ${isActive}`} onClick={() => RepoInfo(details.id,details.repo)} target="blank">Project Info</Button> : null}
                            </div>
                        </div>                    
                    </div>
                    {ShowChartDivId===details.id ? <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="col-md-6">
                        <div className="chartDivMargin">
                            <div className="mb-2 mt-4 text-center">
                                <b>Percentage use of languages in the project : <u>{details.name}</u></b>
                                </div>
                                <div>{chartItems[chartItems.length - 1]}
                                </div>
                            </div>
                    </div>:null}
                </div>
                <>
                    <div className="col-md-6">
                        <hr/>
                    </div>
                </>
            </div>
        );
    });

    return(
        <div className="container-fluid opacity">
            <div style={{fontSize:"1.6rem"}} className="row mt-4 mb-5 text-center Heading">
                <b>PROJECTS</b>
            </div>
            <div className="row">
                <div className="ml-4">
                    {projects}
                </div>
            </div>
        </div>
    );
}

export default Project;