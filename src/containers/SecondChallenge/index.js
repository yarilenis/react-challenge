import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { Search, SearchIconWrapper, StyledInputBase } from './style.js'
import { USERS, filterUser } from '../../utils'

const SecondChallenge = () => {
  const [ users, setUsers ] = useState(USERS)
  const [ searched, setSearched ] = useState('')
  const [ filter, setFilter ] = useState('')

  const searchUser = (searchValue) => {
    if(!searchValue) {
      setUsers(users)

      return
    }

    const result = users.filter(item => {
      const fullName = `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`

      return fullName.includes(searchValue)
    })

    setUsers(result)
  }

  const deleteUser = (index) => {
    users.splice(index, 1)
    const newUSer = [ ...users ]
    setUsers(newUSer)
  }

  const clearSeach = () => {
    setSearched('')
    setUsers(USERS)
  }

  const handleChangeFilter = (event) => {
    const filter = event.target.value
    setFilter(filter)
    const filterUsers = filterUser(users, filter)
    setUsers(filterUsers)
  }

  const handleSearch = (event) => {
    const textSearch = event.target.value
    setSearched(textSearch)
    searchUser(textSearch, users, setUsers)
  }

  return (
    <Container>
      <Box>
        <Typography
          sx={{ mb: 2, mt: 4 }}
          variant='h4'>
          List of Users
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchIconWrapper style={{ pointerEvents: 'auto', right: '0' }}>
            <IconButton onClick={() => clearSeach()}>
              <ClearIcon fontSize='small' />
            </IconButton>
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(event) => handleSearch(event)}
            placeholder='Search…'
            value={searched} />
        </Search>
        <FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='select-filter'>Filter</InputLabel>
          <Select
            id='select-filter'
            label='Filter'
            labelId='select-filter'
            onChange={(event) => handleChangeFilter(event)}
            value={filter}>
            <MenuItem value={1}>From older to younger</MenuItem>
            <MenuItem value={2}>From younger to older</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <List>
        {!!users.length && users.map((user, index) => (
          <ListItem
            key={user.id}
            secondaryAction={
              <IconButton aria-label='delete' onClick={() => deleteUser(index)}>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.firstName} ${user.lastName}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default SecondChallenge
