import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from './utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data?.items) {
          setVideos(data.items);
        } else {
          console.error('Invalid API response:', data);
          setVideos([]);
        }
      })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      > 
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory}{' '}
          <span style={{ color: '#D00000' }}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
