import { Test } from '../../entities/test/model/types';

export const getAscSort = (sortBy: 'name' | 'type') => {
    return (testA: Test, testB: Test) => {
        if (testA[sortBy] < testB[sortBy]) {
            return -1;
        }

        if (testA[sortBy] > testB[sortBy]) {
            return 1;
        }

        return 0;
    };
};
