import axios from 'axios';

class DummyApiService
{
    axiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://dummyapi.io/data/v1/',
            timeout: 5000,
            headers: {
                'app-id': import.meta.env.VITE_DUMMY_API_TOKEN,
            }
        })
    }

    /**
     * Handle the response of the methods
     *
     * @async
     * @param {object} config
     *
     * @returns {array} [error, data]
     */
    async axiosCall(config) {
        try {
            const data = await this.axiosInstance.request(config)
            return [null, data]
        } catch(error) {
            return [error, null]
        }
    }

    /**
     * Get users from API
     *
     * @async
     * @param {number} [page=0] Current page
     * @param {number} [limit=10] Record to get
     * 
     * @returns {promise}
     */
    async getUsers(page = 1, limit = 9) {
        return this.axiosCall({
            method: 'get',
            url: '/user',
            params: {
                page: page,
                limit: limit
            }
        })
    }

    /**
     * Get the profile if a specific user
     *
     * @async
     * @param {string} userID
     * 
     * @returns {promise}
     */
    async getUserProfile(userID) {
        return this.axiosCall({
            method: 'get',
            url: '/user/' + userID
        })
    }
}

export default DummyApiService = new DummyApiService();
