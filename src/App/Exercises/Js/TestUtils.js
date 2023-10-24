export function sum(a, b) {
    if(a === undefined || b === undefined) {
        return null;
    }
    return a + b;
  }

  export function fetchData() {
    return Promise.resolve([{data: "data from the server"}, {data: "Data from the swerver version 2"}])
  }

  export function fetchError(){
    return Promise.reject({data: "There is an error"})
  }