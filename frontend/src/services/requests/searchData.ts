import api from "../api"


export async function searchData(query: string) {

    try {
        const response = await api.get(`/users?q=${query}`);

        return {
            data: response.data.message,
            status: response.status
        }
    } catch (error) {
        return {
            message: error,
            status: 500
        }
    }
}
