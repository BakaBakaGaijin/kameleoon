import { MappedTest } from '../../entities/test/model/types';

export const getAscSort = (sortBy: 'name' | 'type' | 'site') => {
    return (testA: MappedTest, testB: MappedTest) => {
        return testA[sortBy].toLowerCase().localeCompare(testB[sortBy]);
    };
};
