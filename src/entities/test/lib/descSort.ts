import { STATUSES_DESC } from '../model/consts';
import { MappedTest } from '../model/types';

export const getDescSort = (sortBy: 'name' | 'type' | 'site' | 'status') => {
    return (testA: MappedTest, testB: MappedTest) => {
        if (sortBy === 'status') {
            const statusA = testA.status;
            const statusB = testB.status;

            return (
                STATUSES_DESC.findIndex((status) => status === statusB) -
                STATUSES_DESC.findIndex((status) => status === statusA)
            );
        }

        return testB[sortBy].toLowerCase().localeCompare(testA[sortBy]);
    };
};
