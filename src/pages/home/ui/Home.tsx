import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { testApi } from '../../../entities/test';
import { Site, Test } from '../../../entities/test/model/types';
import { TestTable } from '../../../widgets/test-table';
import { Search } from '../../../widgets/search';
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [sites, setSites] = useState<Site[]>([]);
    const [tests, setTests] = useState<Test[]>([]);
    const [filteredTests, setFilteredTests] = useState<Test[]>([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        Promise.all([testApi.getTests(), testApi.getSites()])
            .then(([fetchedTests, fetchedSites]) => {
                setTests(fetchedTests);
                setFilteredTests(fetchedTests);
                setSites(fetchedSites);
            })
            .catch(() => {
                setError('Something went wrong');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const q = searchParams.get('q');

        if (q) {
            const filteredTest = tests.filter((test) => test.name.toLowerCase().includes(q));

            setFilteredTests(filteredTest);
        } else {
            setFilteredTests(tests);
        }
    }, [searchParams, tests]);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return error;
    }

    return (
        <div className="home-page">
            <Search amount={filteredTests.length} />
            <TestTable tests={filteredTests} sites={sites} />
        </div>
    );
};
