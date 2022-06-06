import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FourthChallenge from './containers/FourthChallenge'
import FirstChallenge from './containers/FirstChallenge'
import SecondChallenge from './containers/SecondChallenge'
import ThirdChallenge from './containers/ThirdChallenge'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <>
      <Header>REACT CHALLENGE</Header>
      <Routes>
        <Route element={<FirstChallenge />} path='/first' />
        <Route element={<SecondChallenge />} path='/second' />
        <Route element={<ThirdChallenge />} path='/third' />
        <Route element={<FourthChallenge />} path='/fourth' />
        <Route element={<NoMatch />} path='*' />
      </Routes>
    </>
  )
}

export default App
