import { InputBase } from '@mui/material'
import styled from '@emotion/styled'

export const Search = styled.div({
  backgroundColor: 'white',
  border         : '1px solid #ccc',
  borderRadius   : '4px',
  margin         : '8px',
  position       : 'relative',
  width          : '50%'
})

export const SearchIconWrapper = styled.div({
  alignItems    : 'center',
  display       : 'flex',
  justifyContent: 'center',
  maxHeight     : '100%',
  padding       : '0.5rem 1rem',
  pointerEvents : 'none',
  position      : 'absolute'
})

export const StyledInputBase = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    height     : '30px',
    padding    : '0.5rem, 0.5rem, 0.5rem, 0',
    paddingLeft: '3rem',
    width      : '100%'
  },
  color: 'inherit'
}))
