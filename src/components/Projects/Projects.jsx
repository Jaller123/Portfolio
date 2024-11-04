import React, { useState } from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import video1 from './ProjectsFolder/alloverse.mp4';
import video2 from './ProjectsFolder/furniturear.mp4';
import video3 from './ProjectsFolder/foodapp.mp4';
import video4 from './ProjectsFolder/weatherapp.mp4';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {
    const videoProperties = [
        {
            id: 1,
            title: "Alloverse Amusement Park",
            src: video1,
            description: "This was a project I made in my first internship. I built this app by developing the logic/functionalities through terminal with LUA and made the 3D Models/Map using Blender.",
            skills: ["LUA", "Blender"]
        },
        {
            id: 2,
            title: "AR App",
            src: video2,
            description: "This is the first app I made in AR. I developed this app with C# and designed the UI in Unity! Unfortunately, I didn't have GitHub back then so I don't have a source code for this project. I do have the app saved on my phone, so feel free to contact me if you want to see the app in real time."
        },
        {
            id: 3,
            title: "Food App",
            src: video3,
            description: "This is a food app I made in school where you can search for recipes to make at home! This was my first react app I developed."
        },
        {
            id: 4,
            title: "Weather App",
            src: video4,
            description: "This is a weather app I made during school. I wanted to experiment with my JS skills and created this project."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="projects" className="bg">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Projects</h1>
            <div className='bg'>
                <Carousel interval={null} activeIndex={currentSlide} onSelect={handleSlideChange}>
                    {videoProperties.map((videoObj, index) => (
                        <Carousel.Item key={videoObj.id}>
                            <div className="text-container">
                                <h3>{videoObj.title}</h3>
                                <p>{videoObj.description}</p>

                                {/* Conditional rendering for source code button and skills */}
                                {videoObj.id === 1 && (
                                    <div>
                                        <a href="https://github.com/Kenatho/FerryWheel" target="_blank" className="btn btn-primary">Source Code</a>
                                        <div className='skillSetProject'>
                                            <div className="skill2">
                                                <h4>LUA</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>Blender</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>Terminal</h4>       
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {videoObj.id === 3 && (
                                    <div>
                                        <a href="https://food-app-mu-peach.vercel.app" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                                        <a href="https://github.com/Jaller123/Food-App" target="_blank" className="btn btn-primary">Source Code</a>
                                        <div className='skillSetProject'>
                                            <div className="skill2">
                                                <h4>JS</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>API</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>HTML/CSS</h4>       
                                            </div>
                                        </div>
                                    </div>
                                    
                                )}

                                {videoObj.id === 4 && (
                                    <div>
                                        <a href="https://weather-app-vercel-gilt.vercel.app" target="_blank" className="btn btn-primary me-2">Live Demo</a>
                                        <a href="https://github.com/Jaller123/weather-app-vercel.git" target="_blank" className="btn btn-primary">Source Code</a>
                                        <div className='skillSetProject'>
                                            <div className="skill2">
                                                <h4>JS</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>API</h4>       
                                            </div>
                                            <div className="skill2">
                                                <h4>HTML/CSS</h4>       
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <ReactPlayer className="video-player" url={videoObj.src} controls playing={false} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;
