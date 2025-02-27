import { Routes as LibRoutes, Route } from 'react-router';
import { Home } from '../../pages/home/ui/Home';
import { Results } from '../../pages/results/ui/Results';
import { Finalize } from '../../pages/finalize/ui/Finalize';
import { ROUTES } from '../../shared/model/rotes';

export const Routes = () => {
    return (
        <LibRoutes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={`${ROUTES.RESULTS}/:id`} element={<Results />} />
            <Route path={`${ROUTES.FINALIZE}/:id`} element={<Finalize />} />
        </LibRoutes>
    );
};
