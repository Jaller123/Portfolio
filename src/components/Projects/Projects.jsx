import React from 'react';
import './Projects.css';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import video1 from './ProjectsFolder/alloverse.mp4'
import video2 from './ProjectsFolder/furniturear.mp4'
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => 
{
    const videoProperties = 
    [
        {
            id: 1,
            title: "Alloverse Amusement Park",
            src: video1,
            description: "This was a Ferris wheel made by me in LUA!"
        },
        {
            id: 2,
            title: "FurnitureAR",
            src: video2,
            description: "This is an AR App I made in C# 3 years back!"
        }
    ];
  return (
    <>
     <div id="projects" className="bg">
            <Carousel>
                {videoProperties.map((videoObj) => (
                    <Carousel.Item key={videoObj.id}>
                        <ReactPlayer url={videoObj.src} controls playing={false} /> {/* Set playing prop to false */}
                        <Carousel.Caption>
                            <h3>{videoObj.title}</h3>
                            <p>{videoObj.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </>
  )
}

export default Projects