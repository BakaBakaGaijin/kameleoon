import cn from 'classnames';

import { MappedTest, Status } from '../../../../entities/test/model/types';
import { TYPE } from '../../../../entities/test/model/consts';
import { Button } from '../../../../shared/ui/button';
import { ROUTES } from '../../../../shared/model/rotes';
import './TestTableRow.css';

type TTestTableRowProps = {
    test: MappedTest;
};

export const TestTableRow = ({ test }: TTestTableRowProps) => {
    const { status, name, type, site, id } = test;
    const isDraft = status === Status.DRAFT;

    return (
        <tr className="row">
            <td className="cell cell_name">{name}</td>
            <td className="cell cell_type">{TYPE[type]}</td>
            <td className={cn('cell', 'cell_status', `cell_status__${status.toLowerCase()}`)}>
                {status}
            </td>
            <td className="cell cell_site">{site}</td>
            <td className="cell">
                <Button href={`${ROUTES[isDraft ? 'FINALIZE' : 'RESULTS']}/${id}`} dark={isDraft}>
                    {isDraft ? 'Finalize' : 'Results'}
                </Button>
            </td>
        </tr>
    );
};
