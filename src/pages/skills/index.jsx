import './style.scss';

import {useState} from "react";
function MySkills(){
    let [skills,setSkills] = useState([
        {
            id:1,
            logo:'icon-html-five',
            name:'Html 5'

        },
        {
            id:2,
            logo:'icon-sass',
            name:'Css 3/Sass/Scss'

        },
        {
            id:3,
            logo:'icon-node-dot-js',
            name:'JavaScript'

        },
        {
            id:4,
            logo:'icon-typescript',
            name:'TypeScript'

        },
        {
            id:5,
            logo:'icon-react',
            name:'React JS'

        },
        {
            id:6,
            logo:'icon-redux',
            name:'Redux/Toolkit'

        },
        {
            id:7,
            name:'Node JS',
            logo:'icon-nodemon'
        },
        {
            id:7,
            name:'Express',
            logo:"icon-node-dot-js1"
        },
        {
            id:7,
            name:'MongoDB',
            logo:"icon-mongodb"
        },
        {
            id:8,
            name:'Vue JS',
            logo:"icon-vue-dot-js"
        },
        {
            id:9,
            name:'Vuex',
            logo:"icon-node-dot-js1"
        },
        {
            id:10,
            logo:'icon-figma',
            name:'Figma'

        },
        {
            id:11,
            logo:'icon-github',
            name:'Git/Github'

        },
       
     

    ])
    return(<div className='G-container'>
        <div className='P-skillsBox'  data-aos="flip-left" data-aos-duration="700">
            <div className='P-skillsBox-left'>
                <p className="P-skills-info" data-aos="flip-right">Tech I Use</p>
            </div>

            <div className='P-skillsBox-right'>
                <div className='P-skills-description'>
                    {
                        skills.map(elt => <div key={elt.id} className='P-skill-item' data-aos="fade-up-right">
                            {elt.name}
                            <div className={`P-skill-icon ${elt.logo}`} ></div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    </div>)
}
export default MySkills