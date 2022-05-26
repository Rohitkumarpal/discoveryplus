// --- Material Ui Imports --- //
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled, alpha } from '@mui/material/styles';

export const FiCard = styled(Card)(({ theme }) => ({
 
  position: "relative"
}));

export const FiCardActionArea = styled(CardActionArea)(({ theme }) => ({
 
  position: "relative"
}));

export const FiCardActions = styled(CardActions)(({ theme }) => ({
 
  position: "relative"
}));

export const FiCardContent = styled(CardContent)(({ theme }) => ({
  position: "relative",
  backgroundColor: "transparent",
  height:"180px"
}));
export const FiCardMedia = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "100%",
  // objectFit: "contain",
  // maxHeight: "250px",
  // margin: "17px 5px 17px 0",
  // transition: "transform 450ms",
  // borderRadius: "3px",
  // cursor: "pointer"
}));


// --- Exports --- //
export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
};
