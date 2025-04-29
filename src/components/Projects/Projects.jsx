import React, { useState } from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import video5 from './ProjectsFolder/cartify.mp4'
import video1 from './ProjectsFolder/alloverse.mp4';
import video2 from './ProjectsFolder/furniturear.mp4';
import video3 from './ProjectsFolder/foodapp.mp4';
import video4 from './ProjectsFolder/weatherapp.mp4';
import video6 from './ProjectsFolder/ams.mp4';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {
    const videoProperties = [
        {
            id: 1,
            title: "AMS (Advanced Mocking Service)",
            src: video6,
            description: "AMS is a fullstack app made in my internship with two of my classmates where we all built this project together. It's a tool for developers and testers to create and simulate mock APIs, making it easier to test systems when real services are missing, unfinished, or hard to access. It supports custom requests, responses, scenarios, and traffic logs through a simple interface.",
            skills: ["React", "JS", "Node.js", "Express", "MySQL", "Docker", "Figma", "WireMock", "Cypress"],
            link: "https://github.com/Jaller123/AMS",
            demoText: "Live Demo coming out soon!"
        },
        {
            id: 2,
            title: "Cartify WebbShop",
            src: video5,
            description: "This was the first fullstack app I made during my free time outside of my education. I spent an entire summer learning backend while also cooperating Storybook with my frontend. I made a frontend, backend and app repo for this project and overall it was valuable and exciting project I worked a long time on.",
            skills: ["React", "JS", "Node.js", "Express", "MongoDB", "Storybook", "Figma", "HTML/CSS"],
            link: "https://github.com/stars/Jaller123/lists/cartify",
            demoText: "Live Demo coming out soon!"
        },
        {
            id: 3,
            title: "Alloverse Amusement Park",
            src: video1,
            description: "This was a project I made in my first internship. I built this app by developing the logic/functionalities through terminal with LUA and made the 3D Models/Map using Blender.",
            skills: ["LUA", "Blender", "Terminal"],
            link: "https://github.com/Kenatho/FerryWheel"
        },
        {
            id: 4,
            title: "AR App",
            src: video2,
            description: "This is the first app I made in AR. I developed this app with C# and designed the UI in Unity! Unfortunately, I didn't have GitHub back then so I don't have a source code for this project. I do have the app saved on my phone, so feel free to contact me if you want to see the app in real time.",
            skills: ["Unity", "C#", "Terminal"]
        },
        {
            id: 5,
            title: "Food App",
            src: video3,
            description: "This is a food app I made in school where you can search for recipes to make at home! This was my first react app I developed.",
            skills: ["JS", "API", "HTML/CSS"],
            link: "https://github.com/Jaller123/Food-App",
            demo: "https://food-app-mu-peach.vercel.app"
        },
        {
            id: 6,
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
                {videoProperties[currentSlide].demo ? (
  <a href={videoProperties[currentSlide].demo}
     target="_blank"
     rel="noopener noreferrer"
     className="btn btn-primary">
    Live Demo
  </a>
) : (
  <span className="demosoon">
    {videoProperties[currentSlide].demoText}
  </span>
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
