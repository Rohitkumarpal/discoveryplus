import React from 'react'
import SwipeableStepper from '../organisms/Swipeable-stepper.jsx'
import RowContainer from '../templates/Row-container/RowContainer.jsx'
import PanelSliderCarousel from '../organisms/PanelSliderCarousel.jsx'
import AddSection from '../templates/addSection.jsx'

const  HomePage = ()=> {
  return (
    <>

      <AddSection/>
   
      <SwipeableStepper/>

      <PanelSliderCarousel/>

      <RowContainer/>

 

      </>
  )
}

export default HomePage