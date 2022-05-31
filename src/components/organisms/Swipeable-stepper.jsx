
import React, { Component } from 'react'
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from '@emotion/styled'
import ganganyaan from '../../assets/img/ganganyaan.jpeg'
import babludablu from '../../assets/img/babludablu.jpeg'
import michaeljackson from '../../assets/img/michaeljackson.jpeg'
import ramayana from '../../assets/img/ramayana.jpeg'
import MediaControledCardComponent from '../atoms/MediaControledCard'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Gaganyaan: Bharat Ki Antariksh Udaan",
    discription: "India's brightest minds are set to chart new paths in space... and history.",
    imgPath: ganganyaan,
    firstActionLabel:"Don't Miss",
    secondActionLabel:"All New Episodes"
  },
  {
    label: "Bablu Dablu",
    discription: "Vicky, Carly, Briar and Bramble have new adventures on Pine Tree Mountain.",
    imgPath: babludablu,
    firstActionLabel:"Editor's Pick",
    secondActionLabel:"Must Watch"
  },
  {
    label: "Michael Jackson: A Faking It Special",
    discription: "Criminals portray themselves as victims to hide their guilt.",
    imgPath: michaeljackson,
    firstActionLabel:"All Time Fave",
    secondActionLabel:"Stream Now"
  },
  {
    label: "Legends of The Ramayana With Amish",
    discription: "Amish Tripathi traverses 5,000 kilometers in the footsteps of Rama.",
    imgPath: ramayana,
    firstActionLabel:"Trending",
    secondActionLabel:"Recommended"
  }

];

const Root = styled('div')(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  margin:"16px"
}));



class SwipeableStepper extends Component {

  constructor() {

    super()

    this.state = {
      activeStep: 0
    };
  }


  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <Root>
          
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? 

                <MediaControledCardComponent  title={step.label} subTitle={step.discription} imgPath={step.imgPath} firstActionLabel={step.firstActionLabel} secondActionLabel={step.secondActionLabel} /> 
                
                 : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}

            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {false ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                {false ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
      </Root>
    );
  }
}

export default SwipeableStepper;
