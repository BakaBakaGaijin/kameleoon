import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { testApi } from '../../../entities/test';
import { MappedTest } from '../../../entities/test/model/types';
import { TestTable } from '../../../widgets/test-table';
import { Search } from '../../../widgets/search';
import { getDescSort } from '../../../entities/test/lib/descSort';
import { getAscSort } from '../../../entities/test/lib/ascSort';
import { getFormattedUrl } from '../../../entities/test/lib/getFormattedUrl';
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [tests, setTests] = useState<MappedTest[]>([]);
    const [handledTests, setHandledTests] = useState<MappedTest[]>([]);
    const [searchParams] = useSearchParams();

    const q = searchParams.get('q');
    const name = searchParams.get('name');
    const type = searchParams.get('type');
    const site = searchParams.get('site');
    const status = searchParams.get('status');

    useEffect(() => {
        Promise.all([testApi.getTests(), testApi.getSites()])
            .then(([fetchedTests, fetchedSites]) => {
                const mappedTests = fetchedTests.map((test) => ({
                    ...test,
                    site: getFormattedUrl(fetchedSites.find(({ id }) => id === test.siteId)!.url),
                }));

                setTests(mappedTests);
                setHandledTests(mappedTests);
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
            newFormattedTests.sort(name === 'desc' ? getDescSort('name') : getAscSort('name'));
        }

        if (type) {
            newFormattedTests.sort(type === 'desc' ? getDescSort('type') : getAscSort('type'));
        }

        if (site) {
            newFormattedTests.sort(site === 'desc' ? getDescSort('site') : getAscSort('site'));
        }

        if (status) {
            newFormattedTests.sort(
                status === 'desc' ? getDescSort('status') : getAscSort('status')
            );
        }

        setHandledTests(newFormattedTests);
    }, [name, q, site, status, tests, type]);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return error;
    }

    return (
        <div className="home-page">
            <Search amount={handledTests.length} />
            <TestTable tests={handledTests} />
        </div>
    );
};
