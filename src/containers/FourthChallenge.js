import { useState, memo } from 'react'
import { Container } from '@mui/material'
import { useFlasher } from '../utils/hooks'

const FourthChallenge = () => {
  const [ age, setAge ] = useState(3)
  const [ name, setName ] = useState('John Doe')

  const handleName = (event) => {
    const name = event.target.value
    setName(name)
  }

  const handleAge = (event) => {
    const age = Number(event.target.value)
    setAge(age)
  }

  return (
    <Container sx={{ mt: 10 }}>
      <input onChange={e => handleName(e)} placeholder='Name' value={name} />
      <NameDisplay name={name} />
      <hr />
      <input onChange={e => handleAge(e)} placeholder='Age' value={age} />
      <AgeDisplay length={age} />
    </Container>
  )
}

const AgeDisplay = memo(({ length }) => {
  const myRef = useFlasher()

  return (
    <div ref={myRef}>
      <p>Age: {length}</p>
    </div>
  )
})

const NameDisplay = memo(({ name }) =>  {
  const myRef = useFlasher()

  return (
    <div ref={myRef}>
      <p>Your name is: {name}</p>
    </div>
  )
})

export default FourthChallenge
