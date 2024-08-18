import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PersonalSkills extends Component{
    render(){
        return(
            <div className="PersonalSkills">
                <div className="intro ">
                    <div className="row g-0">
                        <div className="col-md-7 personal"><h1 className="intro-header">Personal Skills</h1></div>
                        <div className = 'col-md-5'>
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

                    <div className="row">
                        <div className="col-md-5 ">
                            <div className="PSs"><img src="e63d93ecd31c40194c8194bbf01ecf3c.jpg" alt="hihii" /></div>
                            <div className="mb5">
                                <h5>User Experience (UX) and User Interface (UI) Design</h5>
                                <p>UI/UX Principles, Figma</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb7">
                                <h5>Programming Languages</h5>
                                <p>HTML, CSS, JavaScript, Java</p>
                            </div>
                            <div className="mb7">
                                <h5>Version Control Systems</h5>
                                <p>Git, Github</p>
                            </div>
                            <div className="mb7">
                                <h5>Build Tools and IDE</h5>
                                <p>VSCode, npm/Yarn, Intellij, Netbean</p>
                            </div>
                            <div className="mb7">
                                <h5>API Integration</h5>
                                <p>RESTful APIs</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb7">
                                <h5>Front-End Frameworks and Libraries</h5>
                                <p>ReactJs, Bootstrap, Jest</p>
                            </div>
                            <div className="mb7">
                                <h5>Development Methodologies</h5>
                                <p>Agile, Scrum, DevOps</p>
                            </div>
                            <div className="mb7">
                                <h5>Containerization/Virtualization</h5>
                                <p>Knowledge of Docker, Kubernetes, or virtual machines.</p>
                            </div>
                            <div className="mb7">
                                <h5>Cloud Services</h5>
                                <p>Experience with cloud providers like AWS, Google Cloud</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalSkills;