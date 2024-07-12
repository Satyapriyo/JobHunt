import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env"

const rapidKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': rapidKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        }

    };
    const fetchData = async () => {

        isLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false)

        }
        catch (err) {
            setError(err)
            alert("There is a error !!!")
        }
        finally {
            setIsLoading(false)
        }

    }
    useEffect(() => {
        fetchData();

    }, [])
}
export default useFetch


// query: 'Node.js developer in New-York,USA',
// page: '1',
// num_pages: '1',
// date_posted: 'all'