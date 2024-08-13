import Home from './components/Home';
import Stonks from './components/Stonks';
import Movies from './components/Movies';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'stonks',
        element: <Stonks />,
    },
    {
        path: 'movies',
        element: <Movies />,
    },
    {
        path: '*',
        element: <h1>Bruh you lost</h1>,
    },
]);

function App() {
    return (
        <div className="app">
            <h1>App Component</h1>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
