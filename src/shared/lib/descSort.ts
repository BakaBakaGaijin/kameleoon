import { MappedTest } from '../../entities/test/model/types';

export const getDescSort = (sortBy: 'name' | 'type' | 'site') => {
    return (testA: MappedTest, testB: MappedTest) => {
        return testB[sortBy].toLowerCase().localeCompare(testA[sortBy]);
    };
};
