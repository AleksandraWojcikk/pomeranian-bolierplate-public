
const BASE_API_URL = `http://localhost:3333`;

//fetchDATA to nazwa wymyślona, dowolna
export const fetchData = async (url) => {


    //axios, RTK Querry Tolkit
    const response = await fetch(`${BASE_API_URL}${url}`);

    return response.json();


};

//POST request - wysyłanie danych do serwera

export const sendData = async (url, data, methodParam = "POST") => {
    const options = {
        method: methodParam,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(`${BASE_API_URL}${url}`, options);

    return response.json();
}
