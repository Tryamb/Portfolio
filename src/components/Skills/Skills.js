import uniqid from 'uniqid'
import { skills,skillcategory } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      
        {skills.map((skillset,index) => (
         <div>
          <label>{skillcategory[index]}</label>
          <ul className='skills__list'>
          {skillset.map((skill)=>(
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
          ))}
          </ul>
          </div>
        ))}
      
    </section>
  )
}

export default Skills
