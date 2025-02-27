import { useEffect, useState } from 'react';
import { testApi } from '../../../entities/test';
import { Site, Test } from '../../../entities/test/model/types';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [sites, setSites] = useState<Site[]>([]);
    const [tests, setTests] = useState<Test[]>([]);

    useEffect(() => {
        Promise.all([testApi.getTests(), testApi.getSites()])
            .then(([fetchedTests, fetchedSites]) => {
                setTests(fetchedTests);
                setSites(fetchedSites);
            })
            .catch(() => {
                setError('Something went wrong');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return error;
    }

    return (
        <>
            <h1>Dashboard</h1>
            <ul>
                {tests.map((test) => (
                    <div key={test.id}>
                        {test.name} {sites.find(({ id }) => id === test.siteId)?.url}
                    </div>
                ))}
            </ul>
        </>
    );
};
