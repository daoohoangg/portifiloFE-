import { Component } from "react";
import './NavbarStyle.css';
import {Link} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from './protifiloproject/src/assets/f239a58af6fd14aeb0016fea9b9a609f.jpg';



class Navbar extends Component{
    render(){
        return(
        <nav className="NavbarItems">
            <div className ='row g-0'>
                <div className = 'item1 col-md-4'>
                   <ul class ='font '>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> Home Page
                            </a>
                        </ul>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> Introduction
                            </a>
                        </ul>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> Personal Skills, Abilities
                            </a>
                        </ul>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> Education
                            </a>
                        </ul>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> My Projects
                            </a>
                        </ul>
                        <ul>
                            <a href=""><i class="bi bi-circle-fill"></i> Contacts
                            </a>
                        </ul>
                    </ul>
                </div>
                <div className = 'item2 col-md-4'>
                    <div className="name-child">
                        <h5>DYLAN DAO</h5>
                    </div>
                    <img src='f239a58af6fd14aeb0016fea9b9a609f.jpg' alt="No Img"></img>
                    <div className="h-fe">
                        <h1><strong>Front-End</strong></h1>    
                    </div>
                    <br />
                    <div className="h-dev">
                        <h2>Portfolio.</h2>    
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
                        <a href=""> 
                           <div className="box-link"><p>Work With Me</p><i class="bi bi-arrow-up-right"></i></div> 
                        </a>
                    </div>
                </div>
                <div className="footer-header"></div>    
            </div>    
            
        </nav>
        
        );
    }
    
}

export default Navbar;