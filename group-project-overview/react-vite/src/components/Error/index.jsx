import { useRouteError } from 'react-router-dom';

export default function GenericError() {
    const error = useRouteError();

    console.log(error);

    return (
        <>
            <h1>Uh oh, something went wrong</h1>
            <h2>{error.data}</h2>
        </>
    );
}
