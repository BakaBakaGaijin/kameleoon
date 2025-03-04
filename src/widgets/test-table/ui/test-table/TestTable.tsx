import { useSearchParams } from 'react-router';

import { Button } from '../../../../shared/ui/button';
import { MappedTest } from '../../../../entities/test/model/types';
import { TestTableRow } from '../test-table-row/TestTableRow';
import { EmptyTableState } from '../empty-table-state/EmptyTableState';
import './TestTable.css';

type TTestTableProps = {
    tests: MappedTest[];
};

export const TestTable = ({ tests }: TTestTableProps) => {
    const [searchParams, setSearchParams] = useSearchParams();

    if (!tests.length) {
        return <EmptyTableState />;
    }

    const getHandleSort = (propName: string) => () => {
        const q = searchParams.get('q');
        const propValue = searchParams.get(propName);
        const newPropValue = !propValue || propValue === 'desc' ? 'asc' : 'desc';

        const urlSearchParams = new URLSearchParams();

        if (q) {
            urlSearchParams.set('q', q);
        }

        urlSearchParams.set(propName, newPropValue);

        setSearchParams(urlSearchParams);
    };

    const getSortClass = (propName: string) => {
        const propValue = searchParams.get(propName);

        switch (propValue) {
            case 'asc':
                return 'asc';
            case 'desc':
                return 'desc';

            default:
                return undefined;
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table_column-title table_column-title_name">
                        <Button
                            variant="text"
                            onClick={getHandleSort('name')}
                            className={getSortClass('name')}
                        >
                            NAME
                        </Button>
                    </th>
                    <th className="table_column-title table_column-title_type">
                        <Button
                            variant="text"
                            onClick={getHandleSort('type')}
                            className={getSortClass('type')}
                        >
                            TYPE
                        </Button>
                    </th>
                    <th className="table_column-title table_column-title_status">
                        <Button
                            variant="text"
                            onClick={getHandleSort('status')}
                            className={getSortClass('status')}
                        >
                            STATUS
                        </Button>
                    </th>
                    <th className="table_column-title">
                        <Button
                            variant="text"
                            onClick={getHandleSort('site')}
                            className={getSortClass('site')}
                        >
                            SITE
                        </Button>
                    </th>
                    <th className="table_column-title table_column-title_action" />
                </tr>
            </thead>
            <tbody>
                {tests.map((test) => (
                    <TestTableRow key={test.id} test={test} />
                ))}
            </tbody>
        </table>
    );
};
