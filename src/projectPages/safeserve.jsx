import { useState } from "react";

function safeserve() {

    const images = Object.values(
        import.meta.glob(
            "../Slides/safeserve/*.png",
            {eager: true, import: "default"}
        )
    );

    const [frame, setFrame] = useState(0);

    const captions = [
        "A well designed home page would be crucial to attract users. We let the user know what services we provide and offer an easy-to-navigate interface.",
        "Restaurant catalog page is intuitive. With location, and filters, our design allows the user to find the nearest matching restaurants",
        "Furthermore, by incorporating OpenStreetMap API, the user is able to see the physical restaurant locations relative to themselves.",
        "Here, we show the restaurant options after the user applies filters.",
        "The map is interactive and shows details on selected restaurant pins",
        "We included a review section that even allows users to find restaurants based on their reviews.",
        "A user friendly method of signing in or creating an account. Powered by FireAuth.",
        "Registered users can save their preferences to automatically apply filters and leave reviews."
    ]

    images.map((image) => (
        <img src={image} />
    ))

    function priorFrame(){
        if (frame>0){
            setFrame(frame - 1)
        }
        else{
            setFrame(images.length-1)
        }
    }

    function nextFrame(){
        if (frame<images.length-1){
            setFrame(frame + 1)
        }
        else {
            setFrame(0)
        }
    }

    return(
        <div className="projectPage">
            <h1 className="glass">Safeserve</h1>
            <div className="slideBox glass">
                <button onClick={priorFrame}>&lt;</button>
                    <div className="slides">
                        <img src={images[frame]} className="showSlide"></img>
                    </div>
                <button onClick={nextFrame}>&gt;</button>
                <div className="captionBox glass">
                    <p className="caption">
                        {captions[frame]}
                    </p>
                </div>
            </div>
            <div className="projectDetails glass">
                <a href="https://safeserve-ea1b6.firebaseapp.com/" className="safeserveLink" target="_blank">Visit Project Website</a>
                <br></br>
                <a href="https://github.com/jannatulahmed1/safeserve" className="safeserveLink" target="_blank">Visit Project Github Repository</a>
                <h4>Contributors: Tahia Godhuli, Jannatul Ahmed, Ishrar Kabir</h4>
                <h4>Technology/Platforms Used: Javascript, HTML, CSS, Firebase, FireAuth, FireStore, Github Environment, OpenStreetMap</h4>
                <h4>About</h4>
                <p>
                    Safeserve allows users to explore restaurants around them based on allergens, cuisines, and diets. 
                    With an intuitive restaurant page, users can filter restaurants and find the nearest matches. 
                    Additionally, users can log in to save preferences and add reviews.
                </p>
                <p>Safeserve is a concept idea with real functionality but lacking a real restaurant database. Be advised,
                    some restaurant information is innacurate and kept solely to bring this project to life.
                </p>
                <h4>My Contribution</h4>
                <p>Restaurant page: Front end design, and backend implementation. This included reading off a database
                    to create an appealing catalog of restaurant options. Adding filter and sort features to find desired restaurants.
                    Use user's location to find nearest restaurants, or allow them to explore restaurants on a map.
                </p>
            </div>
        </div>


    )
}

export default safeserve