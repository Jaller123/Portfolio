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
            skills: ["LUA", "Blender", "Terminal"],
            link: "https://github.com/Kenatho/FerryWheel"
        },
        {
            id: 2,
            title: "AR App",
            src: video2,
            description: "This is the first app I made in AR. I developed this app with C# and designed the UI in Unity! Unfortunately, I didn't have GitHub back then so I don't have a source code for this project. I do have the app saved on my phone, so feel free to contact me if you want to see the app in real time.",
            skills: ["Unity", "C#", "Terminal"]
        },
        {
            id: 3,
            title: "Food App",
            src: video3,
            description: "This is a food app I made in school where you can search for recipes to make at home! This was my first react app I developed.",
            skills: ["JS", "API", "HTML/CSS"],
            link: "https://github.com/Jaller123/Food-App",
            demo: "https://food-app-mu-peach.vercel.app"
        },
        {
            id: 4,
            title: "Weather App",
            src: video4,
            description: "This is a weather app I made during school. I wanted to experiment with my JS skills and created this project.",
            skills: ["JS", "API", "HTML/CSS"],
            link: "https://github.com/Jaller123/weather-app-vercel.git",
            demo: "https://weather-app-vercel-gilt.vercel.app"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="projects" className="bg">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Projects</h1>
            
            {/* Text Container outside of Carousel */}
            <div className="text-container">
                <h3>{videoProperties[currentSlide].title}</h3>
                <p>{videoProperties[currentSlide].description}</p>
                {videoProperties[currentSlide].link && (
                    <a href={videoProperties[currentSlide].link} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Source Code</a>
                )}
                {videoProperties[currentSlide].demo && (
                    <a href={videoProperties[currentSlide].demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                )}
                <div className="skillSetProject">
                    {videoProperties[currentSlide].skills.map(skill => (
                        <div key={skill} className="skill2">
                            <h4>{skill}</h4>       
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel */}
            <div className='bg'>
                <Carousel interval={null} activeIndex={currentSlide} onSelect={handleSlideChange}>
                    {videoProperties.map((videoObj) => (
                        <Carousel.Item key={videoObj.id}>
                            <div className="carousel-content">
                                {/* Video player inside the responsive wrapper */}
                                <div className="responsive-wrapper">
                                    <ReactPlayer
                                        className="video-player"
                                        url={videoObj.src}
                                        controls
                                        playing={false}
                                        width="1"  // Fills the wrapper
                                        height="1" // Keeps the aspect ratio
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;
