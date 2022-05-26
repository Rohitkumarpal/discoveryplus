import React, { useState } from "react";
import adventure from '../../assets/img/adventure.jpeg'
import science from '../../assets/img/science.jpeg'
import history from '../../assets/img/history.jpeg'
import freeWatch from '../../assets/img/freeWatch.jpeg'
import investigation from '../../assets/img/investigation.jpeg'
import nature from '../../assets/img/nature.jpeg'
import animals from '../../assets/img/animals.jpeg'
import auto from '../../assets/img/auto.jpeg'
import lifestyle from '../../assets/img/lifestyle.jpeg'
import food from '../../assets/img/food.jpeg'
import styles from './styles/PanelSliderCaousel.module.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import Container from '@mui/material/Container';
import FullImageCardComponent from '../atoms/FullImageCard'
const imgList = [
    {
        label: "Adventure",
        imgPath: adventure
    },
    {
        label: "Science",
        imgPath: science
    },
    {
        label: "History",
        imgPath: history
    },
    {
        label: "Free Watch",
        imgPath: freeWatch
    },
    {
        label: "Investigation",
        imgPath: investigation
    },
    {
        label: "Nature",
        imgPath: nature
    },
    {
        label: "Animals",
        imgPath: animals
    },
    {
        label: "Auto",
        imgPath: auto
    },
    {
        label: "Life Style",
        imgPath: lifestyle
    },
    {
        label: "Food",
        imgPath: food
    },


];
export default function PanelSliderCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
            <div>
                <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={6}
                    itemsToScroll={3}
                    forwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: 'center',
                            background: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`>`}</span>,
                    }}
                    backwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: 'center',
                            background: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`<`}</span>,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: 6,
                            itemsToScroll: 3,
                            minWidth: 768,
                        },
                    ]}
                    speed={400}
                    easing="linear"
                >

                    {
                        imgList.map((item, index) => (
                            <div key={index}   className={styles["img-container"]} >
                                <FullImageCardComponent id={item.id} title={item.label} imgPath={item.imgPath} isShowTitle={true}  width="200px"></FullImageCardComponent>
                            </div>


                        ))
                    }

            </ReactSimplyCarousel>

            </div>
    );
}
