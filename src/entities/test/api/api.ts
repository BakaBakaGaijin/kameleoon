import { api } from '../../../shared/api/api';
import { Site, Test } from '../model/types';

const TEST_API_ROUTES = {
    SITES: 'sites',
    TESTS: 'tests',
};

export const testApi = {
    async getSites() {
        try {
            const { data } = await api.get<Site[]>(TEST_API_ROUTES.SITES);

            return data;
        } catch {
            throw new Error('Error in getSites');
        }
    },
    async getSiteById(id: number) {
        try {
            const { data } = await api.get<Site>(`${TEST_API_ROUTES.SITES}/${id}`);

            return data;
        } catch {
            throw new Error('Error in getSiteById');
        }
    },
    async getTests() {
        try {
            const { data } = await api.get<Test[]>(TEST_API_ROUTES.TESTS);

            return data;
        } catch {
            throw new Error('Error in getTests');
        }
    },
    async getTestById(id: number) {
        try {
            const { data } = await api.get<Test>(`${TEST_API_ROUTES.TESTS}/${id}`);

            return data;
        } catch {
            throw new Error('Error in getTestById');
        }
    },
};
