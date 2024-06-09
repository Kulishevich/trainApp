import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.tsx";
import { Home } from "../pages/Home/Home.tsx";
import { Result } from "../pages/Result/Result.tsx";
import { Programs } from "../pages/Programs/Programs.tsx";
import { Notes } from "../pages/Notes/Notes.tsx";
import { ProgramPage } from "../pages/ProgramPage/ProgramPage.tsx";

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