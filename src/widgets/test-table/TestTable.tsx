import { Site, Test } from '../../entities/test/model/types';
import { TestTableRow } from './ui/test-table-row/TestTableRow';
import { EmptyTableState } from './ui/empty-table-state/EmptyTableState';
import './TestTable.css';
import { useSearchParams } from 'react-router';

type TTestTableProps = {
    tests: Test[];
    sites: Site[];
};

export const TestTable = ({ tests, sites }: TTestTableProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    if (!tests.length) {
        return <EmptyTableState />;
    }

    const handleSortByName = () => {
        const name = searchParams.get('name');
        const nameValue = !name || name === 'desc' ? 'asc' : 'desc';

        searchParams.set('name', nameValue);

        setSearchParams(searchParams);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th
                        className="table_column-title table_column-title_name"
                        onClick={handleSortByName}
                    >
                        NAME
                    </th>
                    <th className="table_column-title table_column-title_type">
                        Type
                        <svg
                            className="table_icon"
                            width="7"
                            height="4"
                            viewBox="0 0 7 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-1.7637e-07 3.50001L3.13529 0.364715L3.5 7.09765e-06L3.86471 0.364715L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L-1.7637e-07 3.50001Z"
                                fill="currentColor"
                            />
                        </svg>
                    </th>
                    <th className="table_column-title table_column-title_status">Status</th>
                    <th className="table_column-title">Site</th>
                    <th className="table_column-title table_column-title_action" />
                </tr>
            </thead>
            <tbody>
                {tests.map((test) => (
                    <TestTableRow
                        key={test.id}
                        test={test}
                        site={sites.find(({ id }) => id === test.siteId)!}
                    />
                ))}
            </tbody>
        </table>
    );
};
