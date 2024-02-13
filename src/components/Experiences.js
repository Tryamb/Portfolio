import uniqid from 'uniqid'
import {experiences} from '../portfolio'
import './Experiences.css'
import ExperienceContainer from './WorkExperience/ExperienceContainer';

const Experiences = () => {
    if(experiences.length===0) return null;
    return (
     
       <section id='experiences' className='section experiences'>
        <h2 className='section__title'>Work Experience</h2>
        <div className='experiences__grid'>
         {
           experiences.map((item)=>(
            <ExperienceContainer key={uniqid()} experience={item}/>
           ))
         }
        </div>
        </section>
      
    )
  }

export default Experiences
