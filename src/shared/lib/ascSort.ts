import { Test } from '../../entities/test/model/types';

export const ascSort = (testA: Test, testB: Test) => {
    if (testA.name < testB.name) {
        return -1;
    }

    if (testA.name > testB.name) {
        return 1;
    }

    return 0;
};
