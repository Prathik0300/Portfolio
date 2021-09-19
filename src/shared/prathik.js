import {faCertificate, faGraduationCap,faSchool} from '@fortawesome/free-solid-svg-icons';
import {FaCode,FaPython,FaJs,FaHtml5,FaCss3Alt,FaBootstrap,FaLaptopCode,FaNodeJs,FaReact,FaEthereum,FaSuitcase,FaHackerrank,FaLinkedin,FaGithubSquare,FaCertificate} from 'react-icons/fa';
import {SiLeetcode,SiPhp,SiMysql,SiMongodb} from 'react-icons/si';
export const OWNER = 
[
    {
        id:0,
        name: 'Prathik Pugazhenthi',
        image: 'assets/Images/prathik.jpg',
        age: 20,
        Mobile: '9176844636',
        resume:'assets/PRATHIK PUGAZHENTHI.pdf',
        Personal_email:'prathik0300@gmail.com',
        Work_email: 'A Computer Science final year grad having interest in developing web-apps and D-apps.Have knowledge in MERN stack,Solidity,Azure for developing scalable and responsive Solutions.',

        // TAGLINE

        taglines:[
            {
                id:0,
                tag: 'a Full Stack Web Developer'
            },
            {
                id:1,
                tag: 'a Blockchain enthusiast'
            },
            {
                id:2,
                tag: 'a Competitive Coder'
            }
        ],

        // SOCIAL MEDIA LINKS

        socialLinks:[
            {
                id:0,
                name:'LinkedIn',
                logo: <FaLinkedin/>,
                link: 'https://www.linkedin.com/in/prathik-pugazhenthi-487855177/'
            },
            {
                id:1,
                name:'Github',
                logo: <FaGithubSquare/>,
                link: 'https://github.com/Prathik0300'
            },
            {
                id:2,
                name:'Leetcode',
                logo: <SiLeetcode/>,
                link: 'https://leetcode.com/prathik0300/'
            },
            {
                id:3,
                name:'HackerRank',
                logo: <FaHackerrank/>,
                link: 'https://www.hackerrank.com/prathik0300'
            }

        ],

        // EDUCATION

        education:[
            {
                id:0,
                name: 'Vellore Institute of Technology, Vellore',
                degree: 'BTech - Bachelor of Technology',
                start: 2018,
                end:2022,
                icon:faGraduationCap,
                field: 'Computer Science',
                grade: 'CGPA(Till 6th Semester) - 8.66',
                activities:null
            },
            {
                id:1,
                name: 'Maharishi International Residential School',
                degree: 'High School',
                start: 2016,
                end:2018,
                icon:faSchool,
                field: 'PCM',
                grade: '86.6%',
                activities:null
            },
            {
                id:2,
                name: 'GAIL DAV public school',
                degree: null,
                start: 2014,
                end:2016,
                icon:faSchool,
                field: null,
                grade: 'CGPA - 10',
                activities:[
                    {
                        id:0,
                        name:'Student council, 2014-15.'
                    },
                    {
                        id:1,
                        name:'Winner of National cyber Olympiad at school and state level (2014, 2015).'
                    },
                    {
                        id:2,
                        name:'Public speaking: Won Extempore and Debate competitions '
                    } 
                ]
            }, 
            {
                id:3,
                name: 'Aditya Birla Public School, kesrol',
                degree: null,
                start: 2004,
                end:2014,
                icon:faSchool,
                field: null,
                grade: null,
                activities:[
                    {
                        id:0,
                        name:'Primary student council, 2010-11'
                    },
                    {
                        id:1,
                        name:'Won several inter school and intra school Science and mathematics quiz.'
                    },
                    {
                        id:2,
                        name:'Won several inter-school Debate competition'
                    },
                    {
                        id:3,
                        name:'Winner of National Science Olympiad, International English Olympiad, National Cyber Olympiad, International Mathematics Olympiad at school and state level'
                    }
                   
                ]
            }        
        ],

        // CERTIFICATIONS

        certifications:[
            {
                id:0,
                name:'React (Basic)',
                organization: 'HackerRank',
                logo:<FaCertificate/>,
                image:"assets/Certificates/react_basic.png",
                issue:'May 2021',
                expiry:'No Expiration Date',
                certificate:'https://www.hackerrank.com/certificates/7548e38569a6'
            },
            {
                id:1,
                name:'Problem Solving (Basic)',
                organization: 'HackerRank',
                logo:<FaCertificate/>,
                image:"assets/Certificates/prob_solving_basic.png",
                issue:'November 2020',
                expiry:'No Expiration Date',
                certificate:'https://www.hackerrank.com/certificates/2e0e24d093ab'
            },
            {
                id:2,
                name:'Problem Solving (Intermediate)',
                organization: 'HackerRank',
                logo:<FaCertificate/>,
                image:"assets/Certificates/prob_solving_intermediate.png",
                issue:'November 2020',
                expiry:'No Expiration Date',
                certificate:'https://www.hackerrank.com/certificates/bd40a4ab9bca'
            },
            {
                id:3,
                name:'Building Database Applications in PHP',
                organization: 'University of Michigan',
                logo:<FaCertificate/>,
                image:"assets/Certificates/PHP.jpg",
                issue:'August 2020',
                expiry:'No Expiration Date',
                certificate:'https://www.coursera.org/account/accomplishments/certificate/9Q83Q2TYC4C2'
            },
            {
                id:4,
                name:'Introduction to Structured Query Language(SQL)',
                organization: 'University of Michigan',
                logo:<FaCertificate/>,
                image:"assets/Certificates/SQL.jpg",
                issue:'July 2020',
                expiry:'No Expiration Date',
                certificate:'https://www.coursera.org/account/accomplishments/certificate/57C9GVLAVB9M'
            },
            {
                id:5,
                name:'Google Analytics for beginners',
                organization: 'Google',
                logo:<FaCertificate/>,
                image:"assets/Certificates/google_analytics.png",
                issue:'April 2020',
                expiry:'April 2023',
                certificate:'https://analytics.google.com/analytics/academy/course/6/certificate'
            },
            {
                id:6,
                name:'Theory of computation',
                organization: 'Indian Institute of Technology, Kanpur',
                logo:<FaCertificate/>,
                image:"assets/Certificates/TOC_NPTEL.jpg",
                issue:'September 2019',
                expiry:'No Expiration Date',
                certificate:"https://nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc19-cs79"
            }
        ],

        // VOLUNTEER

        volunteer: [
            {
                id:0,
                organization:'Entrepreneurship Cell, VIT',
                logo:null,
                role:'Event Manager',
                cause:'Education',
                start: 'March 2019',
                end: 'April 2019',
                description: 'Event manager of E-Summit 2019. E-Summit is a 3 days annual business summit conducted by the Entrepreneurship cell,Vellore. the summit has different events covering various aspects of entrepreneurship.'
            },
            {
                id:1,
                organization:'Entrepreneurship Cell, VIT',
                logo:null,
                role:'Event Coordinator',
                cause:'Education',
                start: 'December 2019',
                end: 'December 2019',
                description: 'coordinator of HackerTech 2019. HackerTech is a 36 hours hackathon participated by around 117 teams. where every team brainstorms into the provided domain and develop a solution with a profitable business model and pitch the idea to the esteemed panel of entrepreneurs.'
            }
        ],

        // SKILLS

        skills:[
            {
                id:0,
                name:'Python',
                logo:<FaPython/>,
                stars:4.5
            },
            {
                id:1,
                name:'Javascript (ES5,ES6)',
                logo:<FaJs/>,
                stars:4
            },
            {
                id:2,
                name:'React.js',
                logo:<FaReact/>,
                stars:4                
            },
            {
                id:3,
                name:'Node.js',
                logo:<FaNodeJs/>,
                stars:4
            },
            {
                id:4,
                name:'HTML5',
                logo:<FaHtml5/>,
                stars:4.5
            },
            {
                id:5,
                name:'CSS',
                logo:<FaCss3Alt/>,
                stars:4
            },
            {
                id:6,
                name:'Bootstrap',
                logo:<FaBootstrap/>,
                stars:4
            },
            {
                id:7,
                name:'PHP',
                logo:<SiPhp/>,
                stars:3.5
            },
            {
                id:8,
                name:'Solidity',
                logo:<FaEthereum/>,
                stars:3
            },
            {
                id:9,
                name:'SQL',
                logo:<SiMysql/>,
                stars:4
            },
            {
                id:10,
                name:'MongoDB',
                logo:<SiMongodb/>,
                stars:3.5
            }
        ],

        // EXPERIENCES

        experience:[
            {
                id:0,
                logo:<FaLaptopCode/>,
                role:'Summer Intern (Analyst)',
                organization:'UBS',
                type:'Internship',
                location:'Hyderabad',
                start: 'June 2021',
                End: 'August 2021',
                description:`Was a part of IBO India.

                Worked in Alteryx to design efficient workflows to handle large datasets and pre-process them for further analysis.
                Successfully converted 3 macros (EUAs) into Alteryx workflow.

                Worked in ARIS to map different processes to find the scope of digitization and reduce manual.tasks. successfully mapped 11 processes and as a team were able to reduce 7000+ manual/redundant tasks to around 500.
                `
            },
            {
                id:1,
                logo:<FaLaptopCode/>,
                role:'Web Developer (Backend)',
                organization:'ProjectF',
                type:'Internship',
                location:'Vellore',
                start: 'September 2020',
                End: 'October 2020',
                description:`I worked as a backend developer. Implemented Node.js and MongoDB to store and retrieve the vendor (different products of the vendor) in a fast and scalable way

                Skills learned:
                1) Node.js
                2) MongoDB
                3) MongooseODM`
            },
            {
                id:2,
                logo:<FaSuitcase/>,
                role:'Research Development Executive',
                organization:'Entrepreneurship Cell, VIT',
                type:null,
                location:'Vellore',
                start: 'July 2019',
                End: 'April 2020',
                description:'As a part of the research team, I along with the team were responsible to come up with better ideas to promote entrepreneurship among the college students and involve the students more in the entrepreneurial world. During my time in the research team, we as a team came up with ideas/events like futurepreneurs,udaan, etc which helped the students learn about different entrepreneurial aspects and improve them.'
            }
        ],

        // PROJECTS

        projects:[
            {
                id:0,
                name:'Heritage Club Website',
                start: 'April 2021',
                end: 'April 2021',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/HeritageClub',
                repo:'HeritageClub',
                description:'This is the official website of heritage club, VIT. The website also has an event portal to conduct all the events of the club.'
            },
            {
                id:1,
                name:'Make It Viral',
                start: 'April 2021',
                end: 'April 2021',
                logo:<FaCode/>,
                link:"https://github.com/Prathik0300/MakeItViral",
                repo:'MakeItViral',
                description:'This project is helpful for people who are very active in social media/ business trying to market their product via social media. Usually, lots of hashtags are used to improve the reach of the post on social media. Make It Viral is a small project aiming at helping the users with a list of Hashtags with the insights. The user can upload their image and the AI model will predict the list of tags associated with the image and these tags are further analyzed by scraping their information and finally the user gets a list of hashtags with insights like total posts, avg posting frequency, and avg time difference in the posts within a day. using this information users/influencers/businesses can use the appropriate hashtags to maximize the reach.'
            },
            {
                id:2,
                name:'Road Lane Detection',
                start: 'March 2021',
                end: 'March 2021',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Road_Lane_Detector',
                repo:'Road_Lane_Detector',
                description:'This project aims at detecting the road lanes and also predict the required change in the steering along with the direction of change to align the vehicle between the lane. This project uses OpenCV library in python to detect the road lanes.'
            },
            {
                id:3,
                name:'Voting DAPP',
                start: 'February 2021',
                end: 'March 2021',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Voting_DAPP',
                repo:'Voting_DAPP',
                description:`This is my first fully Decentralised Application. The idea is to provide users an easy way to vote but increasing the security for their votes. This is developed as a serverless Web Application that uses the blockchain network for its backend. The smart contracts are deployed on the Ethereum network. The WebApp provides two different sets of Users 
                1) The Voters
                2) The ECS
                
                The application grants access to the users based on which set the user belongs to. 
                
                1) The WebApp uses HTML5, CSS, Javascript for Frontend.
                2) web3.js for interacting with the smart contracts. 
                3) The smart contracts are programmed in Solidity 
                4) Ganache, metamask for the local blockchain network.`
            },
            {
                id:4,
                name:'Hand Gesture Controlled Video Player',
                start: 'January 2021',
                end: 'February 2021',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Video_Player_Control_Using_Hand_Gestures',
                repo:'Video_Player_Control_Using_Hand_Gestures',
                description:`This project is based on controlling the video player in your laptop using simple hand gestures. This project does not involve machine learning. This was to understand how, without deploying a complex machine learning model, the computer can be controlled. This project uses OpenCV in python to detect Hand Gestures. For now, the Project provides features like,
                
                1) Volume Up
                2) Volume Down
                3) Fast Forward
                4) Rewind
                5) Play/Pause.`
            },
            {
                id:5,
                name:'V-Interact',
                start: 'December 2020',
                end: 'December 2020',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/VirtualInteraction',
                repo:'VirtualInteraction',
                description:`This project aims at reducing the Touch interaction with the devices. With the increasing effects of the pandemic, it is very important to reduce contact to surfaces in public places. This uses the OpenCV library in python to track an Object and perform actions like 
                1) Cursor Movement
                2) Select
                3) Click
                4) Double Click`
            },
            {
                id:6,
                name:'V-Ink',
                start: 'November 2020',
                end: 'November 2020',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Virtual_Ink',
                repo:'Virtual_Ink',
                description:`This project helps the user to write on the device screen just by moving his fingers from a distance. this can be useful for people who are giving presentations, taking online classes, etc. the project uses OpenCV a python library for computer vision. After configuring the object the camera would start tracking the center point of the configured object and make a line between the coordinates i.e. the previous center point and the new center point.  also, the user can stop the camera from drawing a line by pressing 'S' once and restart the drawing process by pressing 'A'.`
            },
            {
                id:7,
                name:'IRIS',
                start: 'October 2020',
                end: 'October 2020',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Personal-Assistant',
                repo:'Personal-Assistant',
                description:`IRIS is a minimalized version of a personal assistant. at present, the program can handle very limited user queries. this project does not use any neural network instead to analyze the queries the program is split into different sections and the queries are tokenized and stop words are removed and then it is analyzed to see if the key of the word is present in the training keys. if yes then the action corresponding to the key in the training set is executed. at present, the program can handle search queries, music play, owner info, self info. 


                1) search queries: when the user searches for some query then the program executes the search function which initializes the google search with the query. and if there are any featured snippets or Wikipedia snippets or direct answers of the result, then the program would read it to us else it would simply show the query.
                2) Music play: this feature has two sub-feature. when the user wants the program to play some music, the program asks the user two options a) play from the saved playlist/history of music played by the user through the program, b) play some new music. 
                3) user info: the user can ask or store the user information in a local file DB. 
                4) self info: this feature is used to ask the program to tell who she is.`
            },
            {
                id:8,
                name:'ToDo WebApp',
                start: 'August 2020',
                end: 'September 2020',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/ToDo-list',
                repo:'ToDo-list',
                description:`This project is aimed at maintaining the to-do/reminder list of the user and a push notification is executed at the set time of the reminder. the backend of the WebApp is written in Node.js and uses MongoDB to store the information regarding the reminder and to-do of the user.`
            },
            {
                id:9,
                name:'Complaint Management System',
                start: 'May 2020',
                end: 'June 2020',
                logo:<FaCode/>,
                link:'https://github.com/Prathik0300/Complaint-Processing',
                repo:'Complaint-Processing',
                description:`Complaint Posting and Reviewing portal for the colony residents, where the users can post Complaints wrt different departments and the respective department workers will be notified with the complaint and the house no. directly. If any worker has not completed the complaint displayed in his portal then automatically the complaint would be removed from his portal and the worker with the least amount of work will be notified.`
            },
            // {
            //     id:10,
            //     name:'Instagram Hashtag Analysis',
            //     start: 'April 2020',
            //     end: 'April 2020',
            //     link:null,
            //     repo:null,
            //     description:`This program is used to analyze Instagram hashtags. The project covers 3 aspects of analyzing the hashtag,
            //     1) Analyzing hashtag used in a particular photo
            //     2) Analyzing a domain to find a prominent hashtag of that domain for eg: hashtag for finance domain.
            //     3) Analyzing a custom hashtag of the user
                
            //     The result is saved in a CSV format and provides the user with basic information about the hashtags.`
            // },
        ],

        // LANGUAGES

        languages:[
            {
                id:0,
                name:'English',
                proficiency:'Full professional proficiency'
            },
            {
                id:1,
                name:'Gujarati',
                proficiency:'Elementary proficiency'
            },
            {
                id:2,
                name:'Hindi',
                proficiency:'Full professional proficiency'
            },
            {
                id:3,
                name:'Tamil',
                proficiency:'Native or bilingual proficiency'
            }
        ]
    }

];