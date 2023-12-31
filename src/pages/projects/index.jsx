import './style.scss';
import zay from '../../assets/images/zay.png';
import toDo from '../../assets/images/Снимок экрана (32).png';
import group from '../../assets/images/beetee.png'
import booking from '../../assets/images/Снимок экрана (34).png'
import {useState} from "react";
import ProjectsComponent from "./components/myProject";
function MyProjects(){

    const [projects, setProjects] = useState([
        {
            id: 1,
            image: zay,
            title: 'Beetee',
            description: 'This is an amazing website that has several separate pages in which a lot of functionality and logic are written in other things, see for yourself.',
            class: 'P-projects-container-first',
            href:''
        },
        {
            id: 2,
            image:group,
            title: 'Beetee',
            description: 'Foot Hut is an amazing website  in which there is data validation  written on the input fields, see for yourself.',
            class: 'P-projects-container-second',
            href:'https://beetee.am/'
        },
        {
            id: 3,
            image: booking,
            title: 'Zay Shop',
            description: 'Zay Shop is an amazing website width a lot of functionality and and data validation in it, see for yourself.',
            class: 'P-projects-container-first',
            href:''
        },
        {
            id: 4,
            image: toDo,
            title: 'Todo-list/Recoil',
            description: 'This is a todo-list width pretty complex functionality by using Recoil, see for yourself.',
            class: 'P-projects-container-second',
            href:''
        }
    ])

    return(
        <div className='P-skills-block'>
            <div className='G-container'>
                <div className='P-skills-container' data-aos="flip-left" data-aos-duration="700">
                    <h2 className="P-skills">Projects</h2>
                    <p className="P-skills-text">At the moment in the portfolio you can see the results of my work on intensive HTML / CSS. JavaScript, as well as homemade layouts. Projects on React JS , TypeScript ,  Node JS</p>
                </div>
                {
                    projects.map(elt => <ProjectsComponent key={elt.id} item={elt}/>)
                }

            </div>
        </div>
    )
}

export default MyProjects