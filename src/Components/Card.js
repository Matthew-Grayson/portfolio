import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {Link, Route, Router} from 'react-router-dom';


export default function MediaControlCard(props) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <a href={props.project}>
                        <IconButton aria-label="site">
                            <GitHubIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </a>
                    <a href={props.site}>
                        <IconButton aria-label="project">
                            <LaunchIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </a>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={props.image}
                alt="img"
            />
        </Card>
    );
}