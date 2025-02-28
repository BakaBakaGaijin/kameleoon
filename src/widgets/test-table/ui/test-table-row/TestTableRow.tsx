import cn from 'classnames';

import { Site, Status, Test } from '../../../../entities/test/model/types';
import './TestTableRow.css';
import { TYPE } from '../../../../entities/test/model/consts';
import { Button } from '../../../../shared/ui/button';

type TTestTableRowProps = {
    test: Test;
    site: Site;
};

const getFormattedUrl = (url: string) => url.replace(/(?:https?:\/\/|www\.)/g, '');

export const TestTableRow = ({ test, site }: TTestTableRowProps) => {
    const isDraft = test.status === Status.DRAFT;

    return (
        <tr className="row">
            <td className="cell cell_name">{test.name}</td>
            <td className="cell cell_type">{TYPE[test.type]}</td>
            <td className={cn('cell', 'cell_status', `cell_status__${test.status.toLowerCase()}`)}>
                {test.status}
            </td>
            <td className="cell cell_site">{getFormattedUrl(site.url)}</td>
            <td className="cell">
                <Button dark={isDraft}>{isDraft ? 'Finalize' : 'Results'}</Button>
            </td>
        </tr>
    );
};
