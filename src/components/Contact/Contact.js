import { Call, Email, LinkedIn, MoreVert, LocationOn } from '@material-ui/icons'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__handle'>
      
      <label><a href={`tel:${contact.phone}`}><Call className='icon'/></a>+919580365590</label>
      <label><a href={`mailto:${contact.email}`}><Email className='icon'/></a>trayambsachan2003@gmail.com</label>
      <label> <a href={contact.linkedin}><LinkedIn /></a>linkedin.com/in/tryamb19</label>
      

      </div>
    </section>
  )
}

export default Contact
