import { AppBar, Typography, Button, Toolbar, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position='static' sx={{ paddingX: 2, paddingY: 1 }}>
      <Toolbar>
        <Typography
          component='div'
          fontWeight='bold'
          sx={{ flexGrow: 1 }}
          variant='h4'>
          REACT CHALLENGE
        </Typography>
        <Box>
          <Button color='inherit'>
            <Link to='/first'>First</Link>
          </Button>
          <Button color='inherit'>
            <Link to='/second'>Second</Link>
          </Button>
          <Button color='inherit'>
            <Link to='/third'>Third</Link>
          </Button>
          <Button color='inherit'>
            <Link to='/fourth'>Fourth</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
