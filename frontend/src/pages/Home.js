import React, { useState, useEffect, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import CardItem from '../components/card';

const GET_GAMES = gql`
  query GET_GAMES {
    games {
      editors_choice
      genre
      platform
      title
      score
    }
  }
`;

const filter = createFilterOptions({
  matchFrom: 'start',
});

const sortComparator = (a, b, order) => {
  // sort by platform
  if (order === 'PLAT_ASC' || order === 'PLAT_DESC'){
    const platformA = a.platform.toUpperCase(); 
    const platformB = b.platform.toUpperCase();
    if (platformA < platformB) {
      if (order === 'PLAT_ASC') {
        return -1;
      } else {
        return 1;
      }
    }
    if (platformA > platformB) {
      if (order === 'PLAT_ASC') {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  }
  //sort by score ascending
  if (order === 'SCORE_ASC'){
    return a.score - b.score;
  }
  //sort by score descending
  if (order === 'SCORE_DESC'){
    return b.score - a.score;
  }

};

const Home = () => {
  const { loading, error, data } = useQuery(GET_GAMES);
  const gamesList = useMemo(() => data?.games || [], [data]);
  const [sortOrder, setSortOrder] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  useEffect(() => {
    setFilteredGames(gamesList);
  }, [gamesList]);

  const onAutocompleteChange = (event, value) => {
    setAutocompleteValue({
      title: value?.title  || "",
    });
    filterGamesList(value?.title || "")
  }

  const onSelectChange = (event) => {
    setSortOrder(event.target.value)
    const gamesArray = [...filteredGames];
    setFilteredGames(gamesArray.sort((a,b) => sortComparator(a, b, event.target.value)));
  }

  const filterGamesList = (value) => {
    const gamesArray = [...gamesList];
    if (value) {
      setFilteredGames(
        gamesArray
          .filter(item => item.title === value)
          .sort((a,b) => sortComparator(a, b, sortOrder))
      )
    } else {
      setFilteredGames(gamesArray.sort((a,b) => sortComparator(a, b, sortOrder)))
    }
  }

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, my: 6 }}
      >
        Games List
      </Typography>
      <Box sx={{ minWidth: 120 , display: 'flex'}}>
        <Autocomplete
          value={autocompleteValue}
          onChange={onAutocompleteChange}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={gamesList}
          getOptionLabel={(option) => (option.title || '')}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300, mb: 6 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Search game" />
          )}
        />
        <FormControl sx={{ mx:3, minWidth: 120}}>
          <InputLabel id="sort-select">Sort</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortOrder}
            label="Sort"
            onChange={onSelectChange}
          >
            <MenuItem value={'PLAT_ASC'}>Platform (A - Z)</MenuItem>
            <MenuItem value={'PLAT_DESC'}>Platform (Z - A)</MenuItem>
            <MenuItem value={'SCORE_ASC'}>Score (low to high)</MenuItem>
            <MenuItem value={'SCORE_DESC'}>Score (high to low)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {loading &&
          <Box sx={{ width: '100%', mt:5}}>
            <LinearProgress />
          </Box>
        }
        {error &&
          <Box sx={{ width: '100%', mt:5}}>
            <Alert severity="error">There was an error fetching the data. Please make sure the GraphQL server is running</Alert>
          </Box>
        }
        {filteredGames.map((game) => (
          <CardItem game={game} />
        ))}
      </Grid>
    </>
  )
};

export default Home;
