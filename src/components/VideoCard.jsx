import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card
            sx={{
                width: { sm: '356px', md: '320px' },
                height: '326px', 
                margin: 'auto',
                boxShadow: 'none',
                borderRadius: '20px', 
            }}
        >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
            image={snippet?.thumbnails?.high.url}
            alt={snippet?.title}
            sx={{ width: '100%', height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '146px', textAlign: 'center' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
    );
};

export default VideoCard;