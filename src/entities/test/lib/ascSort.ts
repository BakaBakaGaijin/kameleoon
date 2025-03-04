import { STATUSES_ASC } from '../model/consts';
import { MappedTest } from '../model/types';

export const getAscSort = (sortBy: 'name' | 'type' | 'site' | 'status') => {
    return (testA: MappedTest, testB: MappedTest) => {
        if (sortBy === 'status') {
            const statusA = testA.status;
            const statusB = testB.status;

            return (
                STATUSES_ASC.findIndex((status) => status === statusB) -
                STATUSES_ASC.findIndex((status) => status === statusA)
            );
        }

        return testA[sortBy].toLowerCase().localeCompare(testB[sortBy]);
    };
};
