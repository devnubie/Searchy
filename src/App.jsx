import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Search from './pages/Search';

export default function App (){
  let routes;

  routes = (
    <Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
    </Route>
  )

  const router = createBrowserRouter(
    createRoutesFromElements(routes)
  )
  
  return (
    <RouterProvider router={router}/>
  )
}
