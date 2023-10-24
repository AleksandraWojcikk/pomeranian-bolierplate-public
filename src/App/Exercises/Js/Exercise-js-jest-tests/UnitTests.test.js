import { sum } from "../TestUtils";
import { fetchData } from "../TestUtils";
import { fetchError } from "../TestUtils";

describe ('Basic unit tests for JS functions', () => {


//assertion (asercja)
    test ('should return proper number', () => {
expect (sum(1,2)).toBe(3);
    })

    test ('should return null if the params are undefined', () =>{
        expect (sum()).toBe(null);
    })


})

describe('Basic unit test for JS Promises', ()=>{
// w przypadku funkcji synchronicznych amy taką strukturę plus uzywamy .toStrictEqual
test ('should return proper Promise result', () =>{
return fetchData().then(data => {
    expect(data).toStrictEqual([{data: "data from the server"}, {data: "Data from the swerver version 2"}]);
})
})

// łapiemy błąd, dlatego zamiast .then uzywamy .catch
test ('should return error message during fetching', ()=>{
    return fetchError().catch(data => {
        expect(data).toStrictEqual({data: "There is an error"});
    })
})


})