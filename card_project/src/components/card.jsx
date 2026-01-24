import React from 'react'
import {Bookmark} from 'lucide-react'
const card = (props) => {
  console.log(props.company);
  console.log(props.logo);
  console.log(props.role);
  console.log(props.posted);
  console.log(props.type);
  console.log(props.level);
  console.log(props.salary);
  console.log(props.location);

  
    
  return (
    <div>
       <div className="card">


      <div>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12}   /></button>
      </div>


      <div className="center">
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>{props.role}</h2>
        <div className='tag'>
          <h4>{props.type}</h4>
          <h4>{props.level} level</h4>
        </div>
      </div>
      </div>



      <div className="bottom">
       <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
     </div>
    </div>
  )
}

export default card
