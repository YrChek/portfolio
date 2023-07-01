import React from 'react';
import './ProjectList.css'

function ProjectList(props) {
  const { project } = props;
  let key = 0;
  return (
    <div className='projects'>
      {project.map((el) => <img key={key += 1} src={el.img} alt={'photo '+ el.category} />)}
    </div>
  )
}

export default ProjectList
