import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

import { Site, Test } from '../../model/types';
import { testApi } from '../..';
import { Button } from '../../../../shared/ui/button';
import './TestLayout.css';

export const TestLayout = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [test, setTest] = useState<Test>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [site, setSite] = useState<Site>();

    useEffect(() => {
        if (id) {
            const testPromise = new Promise<Test>(function (resolve, reject) {
                testApi
                    .getTestById(id)
                    .then((fetchedTest) => resolve(fetchedTest))
                    .catch((error) => reject(error));
            });

            testPromise.then((fetchedTest) => {
                testApi
                    .getSiteById(fetchedTest.siteId)
                    .then((fetchedSite) => {
                        setTest(fetchedTest);
                        setSite(fetchedSite);
                    })
                    .catch(() => {
                        setError('Something went wrong');
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="test-layout">
            <div className="test-layout__content">
                {loading && 'Loading...'}
                {error}
                {!loading && !error && <Outlet />}
            </div>
            <Button className="back-button" href="/" variant="back">
                Back
            </Button>
        </div>
    );
};
