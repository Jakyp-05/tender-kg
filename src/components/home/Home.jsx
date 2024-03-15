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
  const SIZES = ['Тендеры', 'Конкурсы', 'Аукционы', 'Запросы коммерческих предложений', 'Запросы котировок', 'Запрос на выражение заинтересованности', 'Реализации', 'Запросы грантовых предложений', 'Прочие'];

  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return (
    <section className='section'>
      <div className='container'>
        <Dropdown>
            <MenuButton  endDecorator={<ArrowDropDown />} sx={{background: '#44ACE9', color: '#fff', "&:hover": { backgroundColor: "#44ACE9" }}}>
              {selectedIndex !== -1 ? SIZES[selectedIndex] : "Показать фильтры"}
            </MenuButton>
            <Menu sx={{minWidth: 160, '--ListItemDecorator-size': '24px' }}>
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
          <InputBase
            sx={{mr: -2,flex: 1, border: '1px solid #44ACE9', outline: 'none', borderRadius: '3px', padding: '1px 20px' }}
            placeholder="Поиск....."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Stack  spacing={1} direction="row">
            <Button sx={{background: '#44ACE9', color: '#fff', "&:hover": { backgroundColor: "#44ACE9" },boxShadow: "none", borderRadius: '0 3px 3px 0' }} variant="contained">Искать</Button>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default Home
