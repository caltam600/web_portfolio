import project1Img from '../assets/safeserve.png'
import project2Img from '../assets/tourapp.png'

import wipImage from '../assets/wipImage.png'

function Projects(){
    return (
        <div className="projectsPage">
            <div className="homeProjects glass">
                <div className="projectBox glass">
                    <img src={project2Img} className="projectImg"></img>
                    <h3 className="projectTitle">TourApp</h3>
                    <p className="projectDesc remMar">An android app that helps users find tours around them, and add to their booking. Also has the ability to create tour options.</p>
                    <a href="/Projects/tourapp" class="projectLink delink">View Project</a>
                </div>
                <div className="projectBox glass">
                    <img src={project1Img} className="projectImg"></img>
                    <h3 className="projectTitle">Safeserve</h3>                    <p className="projectDesc remMar">A website showcasing a restaurant search tool with filters. Allows users to save prefences and offer feedback.</p>

                    <a href="/Projects/safeserve" class="projectLink delink">View Project</a>

                </div>
                <div className="projectBox glass">
                    <img src={wipImage} className="wipImg"></img>
                    <h3 className="projectTitle">Work In Progress</h3>
                    <p className="projectDesc remMar"> Check back soon!</p>
                </div>
            </div>
        </div>
    )
}

export default Projects