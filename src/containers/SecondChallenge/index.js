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
  IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { Search, SearchIconWrapper, StyledInputBase } from './style.js'
import { USERS } from '../../utils'

const deleteUser = (index, users, setUsers) => {
  users.splice(index, 1)
  const newUSer = [ ...users ]
  setUsers(newUSer)
}

const searchUser = (searchValue, users, setUsers) => {
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

const clearSeach = (users, setUsers, setSearched) => {
  setSearched('')
  setUsers(USERS)
}

const SecondChallenge = () => {
  const [ users, setUsers ] = useState(USERS)
  const [ searched, setSearched ] = useState('')

  return (
    <Container>
      <Box>
        <Typography
          sx={{ mb: 2, mt: 4 }}
          variant='h4'>
          List of Users
        </Typography>
      </Box>
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchIconWrapper style={{ pointerEvents: 'auto', right: '0' }}>
            <IconButton onClick={() => clearSeach(users, setUsers, setSearched)}>
              <ClearIcon fontSize='small' />
            </IconButton>
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(event) => {
              setSearched(event.target.value)
              searchUser(event.target.value, users, setUsers)
            }}
            placeholder='Search…'
            value={searched} />
        </Search>
      </Box>
      <List>
        {!!users.length && users.map((user, index) => (
          <ListItem
            key={user.id}
            secondaryAction={
              <IconButton aria-label='delete' onClick={() => deleteUser(index, users, setUsers)}>
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
