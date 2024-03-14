import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';


import InputBase from '@mui/material/InputBase';

function Home() {
  const SIZES = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  // const [size, setSize] = React.useState('Medium');

  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <section className='section'>
      <div className='container'>
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300, background: '#44ACE9' }}
          renderInput={(params) => <TextField {...params} label="Показать фильтры"/>}
        /> */}
        {/* <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{}} // Удаление всех стилей
  renderInput={(params) => <TextField {...params} label="Показать фильтры"/>}
/> */}

      {/* <Dropdown>
        <MenuButton endDecorator={<ArrowDropDown />}>Size</MenuButton>
        <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={item === size ? 'true' : 'false'}
                onClick={() => {
                  setSize(item);
                }}
              >
                <ListItemDecorator>
                  {item === size && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </Dropdown> */}
    {/* <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>{SIZES[selectedIndex]}</MenuButton>
      <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item, index) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={index === selectedIndex ? 'true' : 'false'}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <ListItemDecorator>
                  {index === selectedIndex && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </Dropdown> */}
    {/* <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>selectedIndex ? "dd" : {SIZES[selectedIndex]}</MenuButton>
      <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item, index) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={index === selectedIndex ? 'true' : 'false'}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <ListItemDecorator>
                  {index === selectedIndex && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </Dropdown> */}
    <Dropdown>
      <MenuButton endDecorator={<ArrowDropDown />}>
        {selectedIndex !== -1 ? SIZES[selectedIndex] : "dd"}
      </MenuButton>
      <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
        <ListDivider />
        <ListItem nested>
          <List aria-label="Font sizes">
            {SIZES.map((item, index) => (
              <MenuItem
                key={item}
                role="menuitemradio"
                aria-checked={index === selectedIndex ? 'true' : 'false'}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <ListItemDecorator>
                  {index === selectedIndex && <ArrowRight />}
                </ListItemDecorator>{' '}
                {item}
              </MenuItem>
            ))}
          </List>
        </ListItem>
      </Menu>
    </Dropdown>
        <div className='search-main'>
          {/* <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Box> */}
          <InputBase
        sx={{ ml: 1, flex: 1, border: '1px solid black', outline: 'none', borderRadius: '3px', width: 400 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
          <Stack spacing={1} direction="row">
            <Button variant="contained">Contained</Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

export default Home
