import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NormalRoute from './NormalRoute'
import PrivateRoute from './PrivateRoute'
import LandingModule from 'src/pages/landing/LandingModule'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NormalRoute />}>
          <Route path='/' element={<LandingModule />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/user' element={<LandingModule />} />
        </Route>

        <Route path='*' element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

/*
@media (min-width: 0) and (max-width: 599px) {
}
@media (min-width: 600px) and (max-width: 1199px) {
}
@media (min-width: 1200px) and (max-width: 1919px) {
}
@media (min-width: 1920px) {
}

*/
