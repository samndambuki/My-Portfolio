import React from 'react'
import DevIcon from "devicon-react-svg";
import {tech} from '../../helpers/techs'
import './technologies.css'

function Technologies() {
  return (
    <div className='technologies__container' id="technologies">
     <div>
      <h1 style={{textAlign:"center"}}>
       Some of the Technologies I use
      </h1>
     </div>
     <div className='tech__cards__container'>
      {tech.map((e,idx)=>{
       return(
        <div key={idx} className="tech__card">
         <DevIcon className="tech__icons" icon={e.iconName} />
         <span style={{margin:'5px',fontSize:'1.5rem'}}>
          {e.name}
         </span>
         </div>
       )
      })}
     </div>
     
    </div>
  )
}

export default Technologies
