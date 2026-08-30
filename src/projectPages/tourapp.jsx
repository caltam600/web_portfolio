import { useState } from "react";

function tourapp() {

    const images = Object.values(
        import.meta.glob(
            "../Slides/tourapp/*.png",
            {eager: true, import: "default"}
        )
    );

    const [leftFrame, setLeftFrame] = useState(0);
    const [rightFrame, setRightFrame] = useState(1);

    const captions = [
        "First we lead the user into a visually pleasing home page, captivating what it means to be a tourist. We allow the user to sign up/log in with an intuitive interface although log in is not required.",
        "The user will see tours in New York city both on the map and on the scrollable catalog. A pop up asks the user to share location which can help them find tours based on distance.",
        "Or the user can simply look up the area for any tours. The Kitchen tour is a test of another of our features. Using our supabase database of users we can grant certain users access to create tours. This will give them the Create Tour option, from which if they discover a new place in person they can submit it into the catalog of tours.",
        "Adding a trip from the tour catalog is simple. The user simply taps on desired tour and chooses date and time for the trip.",
        "They can then view, manage, and edit their bookings as needed. Because the bookings serve mainly as a planner, we made sure that if previously logged in, the user can view their bookings offline.",
        "There is so much room for growth. For example, the purpose for users can grow to  include the reviews of users for tours. Here we show one of the functionalities of the camera under an emulator for a user picture."
    ]

    images.map((image) => (
        <img src={image} />
    ))

    function priorFrames(){
        if (leftFrame>1){
            setLeftFrame(leftFrame - 2)
            setRightFrame(rightFrame -2)
        }
        else{
            setLeftFrame(images.length-2)
            setRightFrame(images.length-1)
        }
    }

    function nextFrames(){
        if (rightFrame<images.length-2){
            setRightFrame(rightFrame + 2)
            setLeftFrame(leftFrame + 2)
        }
        else {
            setRightFrame(1)
            setLeftFrame(0)
        }
    }

    return(
        <div className="projectPage">
            <h1 className="glass">Tour App</h1>
            <div className="slidesBox glass">
                <button onClick={priorFrames}>&lt;</button>
                    <div className="slides">
                        <img src={images[leftFrame]} className="showSlide"></img>
                    </div>
                    <div className="slides">
                        <img src={images[rightFrame]} className="showSlide"></img>
                    </div>
                <button onClick={nextFrames}>&gt;</button>
                <div className="captionBox glass">
                    <p className="caption">
                        {captions[leftFrame/2]}
                    </p>
                </div>
            </div>
            <div className="projectDetails glass">
                <a href="https://gitlab.com/caltam600/tour-app-recovery" className="safeserveLink" target="_blank">Visit Project GitLab Repository</a>
                <h4>Contributors: Jay Bacchus, Progga Kundu, Shokhsanam</h4>
                <h4>Technology/Platforms Used: Flutter (Dart)
                    Supabase (Authentication, Postgres Database, Storage)
                    Feature Flags
                    Hive (Offline Storage)
                    Location API + Camera API
                    Core Features
                    User authentication via Supabase
                    Tour list & tour detail views
                    Deep linking into individual tours,
                    OpenStreetMap API, Gitlab environment
                </h4>
                <h4>About</h4>
                <p>
                    Our tour app allows users to browse tours, search by distance, and book trips for later. While our app is 
                    currently based on a small database mainly in New York with examples/tests of tours, the implementation is real. Any authorized user
                    can add real tours into the database which will then expand the database of tours that other users can browse from.
                    Although the booking feature can be improved upon to contain more useful information on what is needed for the trip,
                    I am confident that this app is successful in its main role; Being a user friendly look up tool for nearby tours.
                    For more information, the gitlab repository has a more detailed README. Or contact me for any other questions.
                </p>
                <h4>My Contribution</h4>
                <p>navbar, location/camera uses (for maps, distance, profile pic), bookings/add trips, tour add/sort, feature flags, offline cache, polish/prepare.
                    AI (ChatGPT) was used to generate some front end UI and back end code. However I thoroughly inspected code snippets, and carefully built upon the code provided
                    while tweaking various parts for my purposes. I worked on most of the back end implementation.

                </p>
            </div>
        </div>


    )
}

export default tourapp