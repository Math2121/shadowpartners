import api from "../api"


export async function sendFile(formData: FormData) {

    try {
        const response = await api.post("/files", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return {
            message: response.data.message,
            status: response.status
        }
    } catch (error) {
        return {
            message: error,
            status: 500
        }
    }
}
