import myImage from '../assets/myImage.png'
import project1Img from '../assets/safeserve.png'
import project2Img from '../assets/tourapp.png'
import { Link } from 'react-router-dom'


function Home(){
    return(
        <div className="homePage">
            <div className="glass homeCard">
                <div className="leftHomeCard">
                    <h2 className="hiText">Introducing:</h2>
                    <h1 className="myName">Christopher</h1>
                    <h1 className="myName">Altamirano</h1>
                    <h2 className="title">- Software Engineer</h2>
                    <h3 className="quickdesc">
                        I build efficient, reliable and intuitive 
                        programs that aim to solve real world problems.
                        
                    </h3>
                </div>
                <div className="rightHomeCard">
                    <img src={myImage} className="myImage"></img>
                </div>
            </div>
            <div className="qualities">
                <div className="qualityBox glass">
                    <a href={`${import.meta.env.BASE_URL}Christopher Altamirano - Resume (IT).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="viewbutton">
                        Resume
                    </a>
                    <p className="visibleLink">Christopher Altamirano - Resume (IT).pdf</p>
                </div>
                <div className="qualityBox glass">
                    <a href="https://www.linkedin.com/in/christopheraltamirano/"
                        target="_blank"
                        className="viewbutton"
                    >LinkedIn</a>     
                    <p className="visibleLink">https://www.linkedin.com/in/christopheraltamirano/</p>           
                </div>
                              
            </div>
            <div className="latestProjects glass">
                <h3 className="hiText remMar">
                    Latest Projects:
                </h3>
                <div className="homeProjects">

                    <div className="projectBox glass">
                        <img src={project2Img} className="projectImg"></img>
                        <h3 className="projectTitle">Tour App</h3>
                        <p className="projectDesc remMar">An android app that helps users find tours around them, and add to their booking. Also has the ability to create tour options.</p>
                        <Link to="/Projects/tourapp" className="projectLink delink">View Project</Link>
                    </div>
                    <div className="projectBox glass">
                        <img src={project1Img} className="projectImg"></img>
                        <h3 className="projectTitle">SafeServe</h3>
                        <p className="projectDesc remMar">A website showcasing a restaurant search tool with filters. Allows users to save prefences and offer feedback.</p>
                        <Link to="/Projects/safeserve" className="projectLink delink">View Project</Link>                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home