import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Introduction extends Component{
    render(){
        return(
            <div className="Introductions">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Introduction</h1>
                        <div>
                            <h5>Person</h5>
                            <p>Hi, I'm Dylan Dao, a front-end developer with a passion for creating intuitive and responsive web interfaces. I specialize in React and have experience working on a variety of projects, from e-commerce platforms to interactive web applications. I'm always looking for opportunities to leverage my skills to solve challenging problems.</p>
                        </div>
                        <div>
                            <h5>LinkedIn Summary</h5>  
                            <p>As a dedicated front-end developer, I specialize in creating seamless and engaging user experiences on the web. With a background in web design and a deep understanding of HTML, CSS, and JavaScript, I bring a unique blend of creativity and technical expertise to my projects. Over the past one years, I have honed my skills in libraries such as ReactJs and Bootstrap, successfully leading projects that have significantly improved user satisfaction and retention rates. I thrive in collaborative environments and enjoy working closely with designers and back-end developers to bring complex projects to life. Outside of coding, I am passionate about photography and often find inspiration for my work in the natural world.</p>
                        </div>
                        <div>About Me</div>
                        <div>Front-end Developer</div>
                    </div>
                </div>
                <div className = 'item3 col-md-4'>
                    <div className="content-right">
                        <h5>Font-End Portfolio</h5>
                        <h2 className="font">Dao Trung  Hoang 
                            Intern Font-End 
                            Developer
                        </h2>
                        <p>“Nobody is bored when he is trying to make something that is beautiful, or to discover something that is true.” – William Ralph Inge</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;