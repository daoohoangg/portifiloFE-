import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class PersonalAbilities extends Component{
    render(){
        return(
            <div className="PersonalAbilities">
                <div className="">  
                    {/* row-1 */}
                    <div className="row1 row g-0">
                        <div className="col-md-5 abilities-header"> 
                            <h1>Personal Abilities</h1>
                        </div>
                        <div className="col-md-4 abilities-describe">
                            <p>I am skilled in articulating complex technical concepts to non-technical stakeholders, ensuring everyone is aligned on project goals.</p>
                        </div>
                        <div className="orange-box col-md-3"><p>TEAMWORK</p></div>
                    </div>
                    {/* row-2 */}
                    <div className="row2 row g-0">
                        <div className="col-md-3 abilities-describe">
                            <p>I excel at breaking down complex issues into manageable parts, which allows me to develop effective solutions systematically.</p>
                        </div>
                        <div className="col-md-3 abilities-describe">
                            <p>In my previous web, I identified and resolved a critical performance bottleneck in our web application, improving load times by 40%.</p>
                        </div>
                        <div className="orange-box col-md-3"><p>PROBLEM SOLVING</p></div>
                        <div className="col-md-3 abilities-img" ><img src="28f62e1d6a2bde1e6ac0ae86b7d008df.jpg" alt="hihiihiihii" /></div>
                    </div>
                    {/* row 3 */}
                    <div className="row3 row g-0">
                        <div className="col-md-3 abilities-describe">
                            <p>I am known for my creative approach to UI/UX design, consistently developing interfaces that are both aesthetically pleasing and highly functional.</p>
                        </div>
                        <div className="orange-box col-md-3"><p> CREATIVITY AND INNOVATION</p></div>
                        <div className = 'col-md-5'>
                            <div className="content-right">
                                <div>
                                    
                                    <h2 className="font">Dao Trung  Hoang 
                                    Intern Font-End 
                                    Developer
                                    </h2>
                                    <p style={{color:"white"}}>“Nobody is bored when he is trying to make something that is beautiful, or to discover something that is true.” – William Ralph Inge</p>
                                </div>    
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default PersonalAbilities;