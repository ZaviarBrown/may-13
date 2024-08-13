import { Navigate, useNavigate } from 'react-router-dom';

function Stonks() {
    const navigate = useNavigate();

    const loggedIn = true;
    const handleClick = () => {
        window.alert('Sending info to the DB!');
        navigate('/');
    };

    if (!loggedIn) return <Navigate to="/not-logged-in" />;

    return (
        <div className="comp orange">
            <h1>Stonks Component</h1>
            <button onClick={handleClick}>Sell those stonks 📈</button>
        </div>
    );
}

export default Stonks;
