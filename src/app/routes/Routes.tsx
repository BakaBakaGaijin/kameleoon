import { Routes as LibRoutes, Route } from 'react-router';
import { Home } from '../../pages/home/ui/Home';
import { Results } from '../../pages/results/ui/Results';
import { Finalize } from '../../pages/finalize/ui/Finalize';
import { ROUTES } from '../../shared/model/rotes';
import { TestLayout } from '../../entities/test/ui';

export const Routes = () => {
    return (
        <LibRoutes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route element={<TestLayout />}>
                <Route path={`${ROUTES.RESULTS}/:id`} element={<Results />} />
                <Route path={`${ROUTES.FINALIZE}/:id`} element={<Finalize />} />
            </Route>
        </LibRoutes>
    );
};
