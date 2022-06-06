import { useLocation } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

const NoMatch = () => {
  let location = useLocation()

  return (
    <Container sx={{ mt: 10 }}>
      <Typography fontWeight='bold' variant='h5'>
        No match for <code>{location.pathname}</code>
      </Typography>
    </Container>
  )
}

export default NoMatch
