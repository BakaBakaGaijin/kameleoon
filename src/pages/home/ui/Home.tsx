import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { testApi } from '../../../entities/test';
import { Site, Test } from '../../../entities/test/model/types';
import { TestTable } from '../../../widgets/test-table';
import { Search } from '../../../widgets/search';
import { descSort } from '../../../shared/lib/descSort';
import { ascSort } from '../../../shared/lib/ascSort';
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [sites, setSites] = useState<Site[]>([]);
    const [tests, setTests] = useState<Test[]>([]);
    const [filteredTests, setFilteredTests] = useState<Test[]>([]);
    const [searchParams] = useSearchParams();

    const q = searchParams.get('q');
    const name = searchParams.get('name');

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
        let newFormattedTests = [...tests];

        if (q) {
            newFormattedTests = newFormattedTests.filter((test) =>
                test.name.toLowerCase().includes(q)
            );
        }

        if (name) {
            newFormattedTests.sort(name === 'desc' ? descSort : ascSort);
        }

        setFilteredTests(newFormattedTests);
    }, [name, q, tests]);

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
