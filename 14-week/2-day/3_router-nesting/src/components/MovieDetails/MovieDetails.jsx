import { useParams } from 'react-router-dom';

function MovieDetails({ movies }) {
    const { movieId } = useParams();

    const { title, description } = movies.find(
        ({ id }) => id === Number(movieId)
    );

    return (
        <div className="comp purple">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default MovieDetails;
