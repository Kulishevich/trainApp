import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Programs from "../pages/Programs/Programs";
import Layout from "../components/Layout/Layout";
import Result from "../pages/Result/Result";
import Notes from "../pages/Notes/Notes";
import ProgramPage from "../pages/ProgramPage/ProgramPage";

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
                element: <Programs/>    
            },
            {
                path: 'result',
                element: <Result/>
            },
            {
                path: 'notes',
                element: <Notes/>
            },
            {
                path: 'program/:id',
                element: <ProgramPage/>
            }
        ]
    }
])