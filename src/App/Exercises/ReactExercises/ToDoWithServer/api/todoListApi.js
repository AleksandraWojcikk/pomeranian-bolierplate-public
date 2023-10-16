
const BASE_API_URL = `http://localhost:3333`;

//fetchDATA to nazwa wymyślona, dowolna
export const fetchData = async (url) => {

    return new Promise(async (resolve, reject) => {
        const response = await fetch(`${BASE_API_URL}${url}`)
        if(response.status === 200){
             resolve(response.json())
        }else {
            reject(response.json().message)
        }
    });
};

//POST request - wysyłanie danych do serwera

export const sendData = async (url, data, methodParam = "POST") => {
    
    // return response.json();

return new Promise( async(resolve, reject) => {
    const options = {
        method: methodParam,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_API_URL}${url}`, options);


    // response.status
    if(response.status === 200) {
        resolve(response.json());
    } else {
        reject(response.json().message); //zwracamy stringa

        //zwracamy obiekt błędu
        //reject(response.json());
    }
    
})

}
