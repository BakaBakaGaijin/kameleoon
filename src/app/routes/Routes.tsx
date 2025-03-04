import { Routes as LibRoutes, Route } from 'react-router';

import { Home } from '../../pages/home';
import { Results } from '../../pages/results';
import { Finalize } from '../../pages/finalize';
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
