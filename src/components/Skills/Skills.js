import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <div className='gif__design__div' >
        <img className='gif__design' src="https://thumbs.gfycat.com/RectangularDirtyFrogmouth-size_restricted.gif" alt="gif" /> 
        <img src="https://anyforsoft.com/static/a2da834e20a93f2114281a1174296b58/17.gif" alt="gif" /> 
      </div>
    </section>
    
  )
}

export default Skills
