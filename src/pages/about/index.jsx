import './style.scss';
import myImg from '../../assets/images/it.JPG'
function About(){
    return(
        <div className='P-about-block'>
            <div className='G-container P-about-container'>
                <div className='P-about-left'>
                    <h2 className="P-about-left-title">Hey</h2>
                    <p className="P-about-left-text" data-aos="fade-down-right" data-aos-duration="700">
                I am Vache  a frontend developer with 2 years of experience, I excel in creating dynamic and user-friendly websites. Here are my key skills and areas of expertise:
HTML5: Proficient in writing clean and semantic HTML code to structure web content effectively.
CSS3/SCSS/Sass: Skilled in crafting stylish and responsive designs using CSS preprocessors for enhanced flexibility and maintainability.
JavaScript ES6: Strong understanding of modern JavaScript, including ES6 syntax and features.
React.js: Experienced in building robust and interactive user interfaces using React.js, leveraging reusable components and the virtual DOM for efficient rendering.
Axios: Knowledgeable in making asynchronous HTTP requests and handling responses using Axios for seamless data integration.
Lodash: Familiar with Lodash utility library for simplifying common programming tasks and improving code efficiency.
Recoil: Proficient in state management using Recoil, allowing for predictable and scalable application architecture.
Vue.js/Vuex: Skilled in developing Vue.js applications and utilizing Vuex for centralized state management.
Node.js: Basic understanding of Node.js for server-side JavaScript development and building scalable web applications.
MongoDB: Familiar with MongoDB for handling data storage and retrieval in NoSQL databases.
TypeScript: Familiarity with TypeScript, a statically-typed superset of JavaScript, for enhanced code maintainability and scalability.
In my previous experience, I successfully contributed to the development of beetee.am, a website that showcases my ability to create visually appealing and functional web solutions.
                        </p>
                    <p className="P-about-left-text2" data-aos="fade-right" data-aos-duration="700">
                    </p>
                    <p className="P-about-left-text2" data-aos="fade-up-right" data-aos-duration="700">
                    </p>
                    <p className="P-about-left-text2" data-aos="flip-up" data-aos-duration="700">
                    </p>
                </div>
                <div className="P-about-right">
                    <h2 className="P-about-right-title"></h2>
                    <p className="P-about-right-contact"></p>
                    <div className="P-about-right-img"  data-aos="flip-right" style={{backgroundImage:`url('${myImg}')`}}><div className="P-about-my-image"></div></div>
                    <p className="P-about-right-info"  data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="700">
                    </p>
                    <a href="mailto:vacheasatryan001@gmail.com" className='P-about-email' data-aos="zoom-in">Send me an email</a>
                </div>
            </div>
        </div>
    )
}
export default About