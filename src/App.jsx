
import './App.css';
import AppLayOut from './components/AppLayOut';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
      errorElement: <Error />
    }

  ]
)



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}




export default App;
