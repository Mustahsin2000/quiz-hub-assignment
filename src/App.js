import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
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
      {
        path:'topic/:id',
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<Quiz></Quiz>
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
