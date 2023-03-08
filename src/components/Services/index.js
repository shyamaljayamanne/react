import React from "react";

export default function Services(){
    return(
        <div>
            <section className="section" id="services">
                <div className="section-heading">
                <h3 className="title is-2">Services</h3>
                <h4 className="subtitle is-5">Things I'm pretty good at (I think)</h4>
                </div>
                <div className="container">
                <div className="columns">
                    <div className="column">
                    <div className="box">
                        <div className="content">
                        <h4 className="title is-5">Front End Web Development</h4>
                        Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
                        Vue.js. 
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="box">
                        <div className="content">
                        <h4 className="title is-5">Back End Web Development</h4>
                        Develop Back End applications/services using Node.js or ASP .NET and SQL server or Mongo DB databases.
                        </div>
                    </div>
                    </div>
                </div>
            
                <div className="columns">
                    <div className="column">
                    <div className="box">
                        <div className="content">
                        <h4 className="title is-5">Coffee Creation</h4>
                        Develop excellent coffee with my fabulous barista skills.
                        </div>
                    </div>
                    </div>
                    <div className="column">
                    <div className="box">
                        <div className="content">
                        <h4 className="title is-5">Web Design</h4>
                        Visually appealing, polished, and professional outputs, guaranteed!
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="section" id="resume">
                <div className="section-heading">
                <h3 className="title is-2">Resume</h3>
                <h4 className="subtitle is-5">I'm all about the future but here's more about my past</h4>
                <a href="#" className="button is-link is-medium">
                    <span className="icon">
                    <i className="fas fa-file-alt"></i>
                    </span>
                    <span>Download My Resume</span>
                </a>
                </div>
            </section>
        
            <section className="section" id="contact">
                <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Contact</h3>
                    <h4 className="subtitle is-5">Get in touch</h4>
                </div>
                <br />
            
                <div className="columns">
                    <div className="column is-6 is-offset-3">
                    <div className="box">
                        <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                        </div>
            
                        <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                            <input className="input" type="email" placeholder="Email input" value="" />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        </div>
            
                        <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                        </div>
                        </div>
            
                        <div className="field is-grouped has-text-centered">
                        <div className="control">
                            <button className="button is-link is-large"><span className="icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span>Submit</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                </div>
            </section>
        </div>
    );
}