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
            <div className ='row'>
                <div class="item1" className = 'col-md-4'>
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
                <div class="item2" className = 'col-md-4'>
                    <h5>Dylan Dao</h5>
                    <img src='f239a58af6fd14aeb0016fea9b9a609f.jpg' alt="No Img"></img>
                    <h1>Font-End</h1>
                    <br />
                    <h2>Developer</h2>
                </div>
                <div className = 'item3 col-md-4'>
                    <div>
                        <h4>Font-End Portfolio</h4>
                        <h2>Dao Trung  Hoang 
                            Intern Font-End 
                            Developer
                        </h2>
                        <p>“Nobody is bored when he is trying to make something that is beautiful, or to discover something that is true.” – William Ralph Inge</p>
                        <div>Work With Me<i class="bi bi-arrow-up-right"></i></div>
                    </div>
                </div>
            </div>    
        </nav>
        
        );
    }
    
}

export default Navbar;