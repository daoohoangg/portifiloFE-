import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class Introduction extends Component{
    render(){
        return(
            <div className="Introductions">
                <div className="row g-0 intro">
                    <div className="col-md-7">
                        <h1 className="intro-header">Introduction</h1>
                        <div className="intro-describe">
                            <h5>Person</h5>
                            <p>Hi, I'm Dylan Dao, a front-end developer with a passion for creating intuitive and responsive web interfaces. I specialize in React and have experience working on a variety of projects, from e-commerce platforms to interactive web applications. I'm always looking for opportunities to leverage my skills to solve challenging problems.</p>
                        </div>
                        <br />
                        <div className="intro-describe">
                            <h5>LinkedIn Summary</h5>  
                            <p>As a dedicated front-end developer, I specialize in creating seamless and engaging user experiences on the web. With a background in web design and a deep understanding of HTML, CSS, and JavaScript, I bring a unique blend of creativity and technical expertise to my projects. Over the past one years, I have honed my skills in libraries such as ReactJs and Bootstrap, successfully leading projects that have significantly improved user satisfaction and retention rates. I thrive in collaborative environments and enjoy working closely with designers and back-end developers to bring complex projects to life. Outside of coding, I am passionate about photography and often find inspiration for my work in the natural world.</p>
                        </div>
                        <div className="row ">
                            <div className="col-md-7 "><div className="more-links fix-details">About Me</div></div>
                            <div className="col-md-5"><div className="more-links">Front-end Developer</div></div>
                        </div>
                        
                    </div>

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
                            <div className="intro-img">
                                <img src="eee3ba3fdc5dc6cc0958c3c257805e37.jpg" alt="hehehehhe"></img>
                            </div>    
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;