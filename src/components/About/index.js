import React from "react";
import myimg from "../../1.png"

export default function About(){
    return(
        <section className="section" id="about">
       
            <div className="section-heading">
            <h3 className="title is-2">About Me</h3>
            <h4 className="subtitle is-5">Passionate about code and kiribath</h4>
            <div className="container">
                <p>Web developer with <strong>well-rounded experience</strong> with a degree in the
                field of
                <strong>Information Systems</strong> and extensive knowledge in <strong>modern Web techniques</strong>. Food content creator with 
                <strong>well-rounded experience </strong>in the fields of<strong> Pizza Tossing</strong> and 
                <strong>Pol Rotti</strong>.
                Looking for an opportunity to work with and upgrade, as well as being involved in an organization that
                believes
                in gaining a competitive edge and giving back to the community.</p>
            </div>
            </div>
        
            <div className="columns has-same-height is-gapless">
            <div className="column">
            
                <div className="card">
                <div className="card-content">
                    <h3 className="title is-4">Profile</h3>
        
                    <div className="content">
                    <table className="table-profile">
                        <tr>
                        <th colspan="1"></th>
                        <th colspan="2"></th>
                        </tr>
                        <tr>
                        <td>Address:</td>
                        <td>No.42, Main St. Thumpane</td>
                        </tr>
                        <tr>
                        <td>Phone:</td>
                        <td>0779969420</td>
                        </tr>
                        <tr>
                        <td>Email:</td>
                        <td>shyamalruwantha@gmail.com</td>
                        </tr>
                    </table>
                    </div>
                    <br />
                    <div className="buttons has-addons is-centered">
                    <a href="#" className="button is-link">Github</a>
                    <a href="#" className="button is-link">LinkedIn</a>
                    <a href="#" className="button is-link">Twitter</a>
                
                    </div>
                </div>
                </div>
            </div>
            <div className="column">
            
                <div className="card">
                <div className="card-image">
                    <figure className="image is-3by3">
                    <img src={myimg} alt="Placeholder me" />
                    </figure>
                </div>
                </div>
            </div>
            <div className="column">
            
                <div className="card">
                <div className="card-content skills-content">
                    <h3 className="title is-4">Skills</h3>
                    <div className="content">
        
                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>JavaScript:</strong>
                            <br />
                            <progress className="progress is-primary" value="90" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
        
                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Vue.js:</strong>
                            <br />
                            <progress className="progress is-primary" value="90" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
        
                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Node.js:</strong>
                            <br />
                            <progress className="progress is-primary" value="75" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
        
                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>HTML5/CSS3</strong>
                            <br />
                            <progress className="progress is-primary" value="95" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
    
                    <article className="media">
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>Scrambling eggs</strong>
                            <br />
                            <progress className="progress is-primary" value="95" max="100"></progress>
                            </p>
                        </div>
                        </div>
                    </article>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}