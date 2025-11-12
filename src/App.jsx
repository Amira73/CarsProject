import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Mostpopular from './Components/Mostpopular/Mostpopular'
import Testmonials from './Components/Testmonials/Testmonials'
import Welcome from './Components/Welcome/Welcome'
import Whychoose from './Components/Whychoose/Whychoose'

import Notfound from './Components/Notfound/Notfound'

import MasterLayout  from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import Howwork from './Components/Howwork/Howwork'
import Bookcar from './Components/Bookcar/Bookcar'
import ShowAllCars from './Components/ShowAllCars/ShowAllCars'
import MainLayout from './Components/MainLayout/MainLayout'
import CarDetails from './Components/CarDetails/CarDetails'



function App() {
  const [count, setCount] = useState(0)

let routes=createBrowserRouter([
//     {path:'home',element:<Home/>},

//  { path:'mostpopular',element:<Mostpopular/>},
//     { path: "*", element: <Notfound/> },
    {
      path:'/',element:<MainLayout/>,
     
      children:[
         { path: "*", element: <Notfound/> },
      { index: true, element: <MasterLayout /> },  
      {path:'home',element:<MasterLayout/>},
      {path:'cardetails',element:<CarDetails/>},
     {path:'allcars',element:<ShowAllCars/>,
      
        children:[
      //   { index: true, element: <CarDetails/>},
      //  {path:'carsdetails',element:<CarDetails/>}
        ]

     },

      // {path:'master',element:<MasterLayout/>},
// { path:'howwork',element:<Howwork/>},
// { path:'mostpopular',element:<Mostpopular/>
//   ,children:[
//          { index: true, element: <Mostpopular/>},
//          {path:'home',element:<Welcome/>},
//     {path:'allcars',element:<ShowAllCars/>},
//   ]
// },
//   {path:'testmonials',element:<Testmonials/>},
//      {path:'bookcar',element:<Bookcar/>},
//    {path:'welcome',element:<Welcome/>},
//   {path:'whychoose',element:<Whychoose/>},
 
   ]   }
  ])
   
//     // {path:'contact',
      
//     //   element:<Contact/>,
//     //   children:[
//     //     { index: true, element: <News/>},
//     // {path:'meals',element:<Meals/>},
//     // {path:'news',element:<News/>},
//     //   ]

    
//     // },
//       ]


  return (
    <>
  
  <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
export default App
