import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Programm from "../pages/Programm/Programm";
import Layout from "../components/Layout/Layout";
import Result from "../pages/Result/Result";
import Notes from "../pages/Notes/Notes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'program',
                element: <Programm/>    
            },
            {
                path: 'result',
                element: <Result/>
            },
            {
                path: 'notes',
                element: <Notes/>
            }
        ]
    }
])