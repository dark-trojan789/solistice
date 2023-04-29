import React from 'react'
import { render } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Chat from '../components/chatbot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  }
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )
render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>, document.getElementById("root"));
