import uniqid from 'uniqid'
import './ExperienceContainer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ExperienceContainer=({experience})=>{
    return(
    <div className='experience'>
        <div className="container">
            <div className="first-end">
                <div style={{display:'flex'}}>
                 <img className='image' src={experience.icon}></img>
                 <h3>{experience.name}</h3>
                </div>
                <p>{experience.position}</p>
            </div>
            <div className="second-end">
                <p>{experience.time}</p>
            </div>
        </div>

    
    <div className='experience__description'>
    <ul>
        {
            experience.description.map((item)=>(
                <li key={uniqid()}>{item}</li>
            ))
        }
    </ul>
    </div>

    {experience.stack && (
      <ul className='experience__stack'>
        <label>Tools:</label>{experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

  </div>
    );
}
export default ExperienceContainer