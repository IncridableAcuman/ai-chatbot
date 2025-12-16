import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/auth' element={<Auth/>} />
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App