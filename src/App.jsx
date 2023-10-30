
import './App.css';
import AppLayOut from './components/AppLayOut';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayOut />,
      errorElement: <Error />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
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
