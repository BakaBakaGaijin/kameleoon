import { Link, useParams } from 'react-router';
import { ROUTES } from '../../../shared/model/rotes';

export const Finalize = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Finalize</h1>
            <ul>
                <li>
                    <Link to={`${ROUTES.FINALIZE}/1`}>to 1</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.FINALIZE}/2`}>to 2</Link>
                </li>
                <li>
                    <Link to={`${ROUTES.FINALIZE}/3`}>to 3</Link>
                </li>
            </ul>
            <h2>Finalize {id}</h2>
        </div>
    );
};
