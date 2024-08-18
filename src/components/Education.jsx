import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class Education extends Component{
    render(){
        return(
            <div className="Education">
                <div className="">
                    <div className="row g-0 ">
                        <div className="col-md-8 intro-edu intro">
                            <div className="pdl10">
                                <h1 className="intro-header">Education</h1>
                                <div>
                                    <div className="bar">
                                        <h3>FPT University</h3>
                                            <div className="bar-space"></div>     
                                        <h4>2022 - NOW</h4>
                                    </div>
                                    <div className="edu-content"><p>During my university journey, I immersed myself in the study of computer science, gaining a strong foundation in programming, algorithms, and software engineering. I actively participated in various projects and hackathons, which honed my practical skills and fostered a collaborative spirit.
                                    </p></div>
                                </div>

                                <div>
                                    <div className="bar">
                                        <h3>LTS Academy </h3>
                                        <div className="bar-space"></div>
                                        <h4>03/2023 - 10/2023</h4>
                                    </div>
                                    <div className="edu-content"><p>The Java Backend course provides essential knowledge and skills for developing robust server-side web applications using Java. It covers database connectivity, API development, and security techniques to create scalable web solutions.
                                    </p></div>
                                </div>

                                <div>
                                    <div className="bar">
                                        <h3>Certification</h3>
                                        <div className="bar-space"></div>
                                        <h4> NOW</h4>
                                    </div>
                                    <div className="edu-content-li">
                                        <ul>
                                            <a href=""><li>International English Language Test System (IDP Education) <span>: 6.0</span>
                                            
                                            </li></a>
                                            <a href=""><li>Web Design for Everybody: Basics of Web Development & Coding</li></a>
                                            <a href=""><li>Meta Front-End Developer Professional Certificate</li></a>
                                            <a href=""><li>LTS Java Back-End Developer Certificate</li></a>
                                        </ul>
                                    </div>
                                </div>       
                            </div>
                            
                        </div>
                        <div className="col-md-4 ">
                            <div className="school"><img src="180dc860ba0a8fd6337880830dff8135.jpg" alt="Fpt" /></div>
                            <div className="content-right">
                                <div>
                                    <h5>Font-End Portfolio</h5>
                                    <h2 className="font">Dao Trung  Hoang 
                                    Intern Font-End 
                                    Developer
                                    </h2>
                                    <p>“Nobody is bored when he is trying to make something that is beautiful, or to discover something that is true.” – William Ralph Inge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;