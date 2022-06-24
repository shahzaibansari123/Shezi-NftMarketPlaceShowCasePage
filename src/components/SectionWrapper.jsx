import React from 'react'

const SectionWrapper = ({title, description, showBtn, mockupImg}) => {
  return (
    <div>
     <h1>{title}</h1>
     <h1>{description}</h1>
     <img src={mockupImg} alt="MockUp"/>
    </div>
  )
}

export default SectionWrapper
