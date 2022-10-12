import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './components/Blog/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
      {
        path:'/statistics',
       element:<Statistics></Statistics>,
       loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      }
    ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     <ToastContainer />
    </div>
  );
}

export default App;
