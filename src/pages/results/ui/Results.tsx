import { Link, useParams } from 'react-router';
import { ROUTES } from '../../../shared/model/rotes';

export const Results = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Results</h1>
            <ul>
                <li>
                    <Link to={`${ROUTES.RESULTS}/1`}>to 1</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.RESULTS}/2`}>to 2</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.RESULTS}/3`}>to 3</Link>
                </li>
            </ul>
            <h2>Result {id}</h2>
        </div>
    );
};
