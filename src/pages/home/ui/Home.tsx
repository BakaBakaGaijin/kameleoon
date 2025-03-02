import { useEffect, useState, ChangeEvent } from 'react';

import { testApi } from '../../../entities/test';
import { Site, Test } from '../../../entities/test/model/types';
import { TestTable } from '../../../widgets/test-table';
import { Search } from '../../../widgets/search';
import { debounce } from '../../../shared/lib/debounce';
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [sites, setSites] = useState<Site[]>([]);
    const [tests, setTests] = useState<Test[]>([]);
    const [filteredTests, setFilteredTests] = useState<Test[]>([]);

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

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return error;
    }

    const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
        const searchStr = e.target.value.toLowerCase();

        const filteredTest = tests.filter((test) => test.name.toLowerCase().includes(searchStr));

        setFilteredTests(filteredTest);
    }, 1000);

    return (
        <div className="home-page">
            <Search amount={filteredTests.length} onSearch={handleSearch} />
            <TestTable tests={filteredTests} sites={sites} />
        </div>
    );
};
