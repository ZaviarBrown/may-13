import {
    createBrowserRouter,
    RouterProvider,
    Link,
    NavLink,
    Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Stonks from './components/Stonks';
import Movies from './components/Movies';

const Layout = () => {
    return (
        <div className="app">
            <h1>App Component</h1>
            <nav className="comp nav">
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'purple active' : ''
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => {
                                return { fontWeight: isActive ? 'bold' : '' };
                            }}
                            to="/stonks"
                        >
                            Stonks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                        {/* <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://amazon.com"
                        >
                            Amazon
                        </a>
//! <a> tags link us OUTSIDE of our app, only good use case :0
                        */}
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
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
                path: '/not-logged-in',
                element: <h1>You Must Be Logged In To Enter.</h1>,
            },
            {
                path: '*',
                element: <h1>Page Not Found</h1>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
