import { Container, Box, Typography, List, ListItem, Avatar, ListItemText } from '@mui/material'
import { getGifts } from '../utils'

const FirstChallenge = () => {
  const gifts = getGifts()
  const showGifts = Object.keys(gifts).length

  return (
    <Container>
      <Box>
        <Typography
          sx={{ mb: 2, mt: 4 }}
          variant='h4'>
          List of Gifts
        </Typography>
        <List>
          {showGifts && Object.keys(gifts).map((item) => (
            <ListItem
              key={item}
              secondaryAction={
                <Avatar>
                  <Typography>{gifts[item]}</Typography>
                </Avatar>
              }>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default FirstChallenge
