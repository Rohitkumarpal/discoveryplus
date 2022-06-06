import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography"
// --- Fill Image Card Component Imports --- //
import styles from './styles/FullImageCard.module.css'

import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";


const FullImageCardComponent = (props) => {

  // Declare a new state variable, which we'll call "isHovering"
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => {
    setIsHovering(true);
    console.log(isHovering)
  };

  const handleLeave = () => {
    setIsHovering(false);
    console.log(isHovering)
  };

  return (
    <FiCard
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={styles.fcard} sx={{height:props.height, width:props.width}} >
      <FiCardActionArea>
        <FiCardMedia
          sx={{height:props.height, width:props.width}}
          className={styles.fmedia}
          media="picture"
          alt="Contemplative Reptile"
          image={props.imgPath}
          title="Contemplative Reptile"
        />
        <FiCardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {props.isShowTitle && (<p>{props.title}</p>)}
          </Typography>
          <Typography
            variant="body2"

            component="div"
          >
            {isHovering && (
              <>
                <div className="fcard-title">
                  <PlayCircleOutlineIcon
                    style={{ fontSize: "70px", color: "white", fontWeight: "bolder" }}
                  />
                
                  {!props.isShowTitle && (<p>{props.title}</p>)}
                </div>
                <p style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {props.description}
                </p>
              </>
            )}
          </Typography>
        </FiCardContent>
      </FiCardActionArea>
    </FiCard>
  )
}

FullImageCardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string,
  isShowTitle: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string

  //   onClick: PropTypes.func,
};

FullImageCardComponent.defaultProps = {
  isShowTitle: false
};

export default FullImageCardComponent;
