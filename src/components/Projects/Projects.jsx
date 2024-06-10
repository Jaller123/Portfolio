import React, { useState } from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import video1 from './ProjectsFolder/alloverse.mp4';
import video2 from './ProjectsFolder/furniturear.mp4';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => 
{
    const videoProperties = 
    [
        {
            id: 1,
            title: "Alloverse Amusement Park",
            src: video1,
            description: "This was a project I made in my first internship. I built this app by developing the logic/functionalities through terminal with LUA and made the 3D Models/Map using Blender."
        },
        {
            id: 2,
            title: "AR App",
            src: video2,
            description: "This is the first app I made in AR. I developed this app with C# and designed the UI in Unity! Unfortunately I didn't have have github back then so I don't have a source code for this project. I do have the app saved on my phone so I feel free to contact me if you want to see the app in real time."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => 
    {
        setCurrentSlide(index);
    };

    return (
        <div id="projects" className="bg">
            <div className='bg'>
            <Carousel interval={null} activeIndex={currentSlide} onSelect={handleSlideChange}>
                {videoProperties.map((videoObj, index) => 
                (
                    <Carousel.Item key={videoObj.id}>
                    <div className="text-container">
                            <h3>{videoObj.title}</h3>
                            <p>{videoObj.description}</p>
                            {videoObj.id === 1 && (<a href="https://github.com/Kenatho/FerryWheel" target="_blank" className="btn btn-primary">Source Code</a>)}

                        </div>
                        <ReactPlayer className ="video-player" url={videoObj.src} controls playing={false} />
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
        </div>
    );
}

export default Projects;
