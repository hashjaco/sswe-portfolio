import axios from "axios";

/**
 * @function fetchNASAData
 * @description Fetches the NASA Image of the Day data from the NASA API.
 * @returns {Promise<any>} The response data from the API.
 * @throws Will throw an error if the request fails or if the response is not valid.
 */

export const fetchNASAData = async (): Promise<any> => {
    const requestOptions = {
        method: 'GET',
        url: process.env.NEXT_PUBLIC_NASA_IMAGE_OTD_URL,
        params: {
            'api_key': process.env.NEXT_PUBLIC_NASA_API_KEY
        },
        headers: {

        }
    };

    try {
        const response = await axios.request(requestOptions);
        if (response.status !== 200) {
            console.error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        if (!response.data) {
            console.error("No data returned from NASA API");
            return null;
        }
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        throw error;
    }
}