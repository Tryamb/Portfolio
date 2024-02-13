import uniqid from 'uniqid'
import { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { Close, MoreVert } from '@material-ui/icons'
import './ProjectContainer.css'
import { Card } from '@material-ui/core'

const ProjectContainer = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  console.log(project.image)
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return(
  <div className='project'>
    <h3>{project.name}</h3>
   {!expanded && <div>
   
   {
       project.image && 
       (<div className='project__img'>   
        <img src={project.image}></img>
      </div>)
   }
   
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
<div className='project__code-link'>
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
   </div>
      <label>view more<MoreVert className='icon' onClick={handleChange}/></label>
   
   </div>
   }
    
   { expanded && 
      <Card className='card'>
        <div>
          <h5>Description</h5>
          <Close className='icon' onClick={handleChange}/>
        </div>    
        <ul className='project__description'>
        {
            project.description.map((item)=>(
                <li key={uniqid()}>{item}</li>
            ))
        }
       </ul>
       </Card>     
   }
  
  </div>
    
  );
}

export default ProjectContainer
