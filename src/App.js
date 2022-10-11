import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:
    [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home> ,
      },
      {
        path:'/topics',
        loader:()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element:<Topics></Topics>
      },
    ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
