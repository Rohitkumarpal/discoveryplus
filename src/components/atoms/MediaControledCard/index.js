
import PropTypes from "prop-types";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const MediaControledCardComponent = (props) => {

    return (
        <Card sx={{ display: 'flex' , backgroundColor:'inherit' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.subTitle}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" size="small">{props.firstActionLabel}</Button>
                    <Button variant="contained" color="secondary" size="small">{props.secondActionLabel}</Button>
                </CardActions>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    Play
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: '100%', maxHeight: '350px', borderRadius: '10px' }}
                image={props.imgPath}
                alt="Live from space album cover"
            />
        </Card>
    )
}

MediaControledCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    imgPath: PropTypes.string,
    firstActionLabel: PropTypes.string,
    secondActionLabel: PropTypes.string
    //   onClick: PropTypes.func,
};

MediaControledCardComponent.defaultProps = {
};

export default MediaControledCardComponent;
