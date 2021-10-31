import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const Ribbon = styled('div')`
  width: 85px;
  height: 85px;
  overflow: hidden;
  position: absolute;
  top: 14px;
  right: -10px;
  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
    border-top-color: transparent;
    border-right-color: transparent;
    top: 0;
    left: 0;
  }
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
    border-top-color: transparent;
    border-right-color: transparent;
    bottom: 0;
    right: 0;
  }
  & span {
    position: absolute;
    width: 120px;
    padding: 5px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    left: -9px;
    top: 21px;
    transform: rotate(45deg);
  }
`;

const CardItem = (item) => {
  const { game } = item;
  const { genre } = game;
  const genreArray = genre.split(',');

  return (
    <Grid item xs={12} md={3} lg={3} sx={{ position:'relative' }}>
      {game.editors_choice === 'Y'
        ?
          <Ribbon data-testid="card-ribbon"><span>{`Editors choice`}</span></Ribbon>
        : ''
      }
      <Card>
        <CardContent>
          <Typography variant="h6" component="div" data-testid="card-title" noWrap>
            {game.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" data-testid="card-platform" gutterBottom>
            {game.platform}
          </Typography>
          { genreArray.map((item) => (
              <Chip label={item || 'No genre'} variant="outlined" sx={{ mr:1 }}/>
            ))
          }
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Rating name="games-rating" value={game.score / 2} precision={0.25} readOnly />            
            <Typography variant="body2" sx={{ ml:1 }}>
              {game.score}/10
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
};

export default CardItem;
