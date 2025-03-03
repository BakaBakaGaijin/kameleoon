import { useSearchParams } from 'react-router';

import { Button } from '../../../../shared/ui/button';
import './EmptyTableState.css';

export const EmptyTableState = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleReset = () => {
        searchParams.delete('q');

        setSearchParams(searchParams);
    };

    return (
        <div className="empty-table-state">
            <div className="empty-table-state_content">
                <h3 className="empty-table-state_title">Your search did not match any results.</h3>
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
};
