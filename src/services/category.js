const API = "https://to-dos-api.softclub.tj/api/categories";


export const getUser = async() => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
        
    } 
    catch (error) {
        console.log(error);
    }
}

export const getById = async(id) => {
    try {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        return data;
        
    } 
    catch (error) {
        console.log(error);
    }
}

export const deleteUser = async(id) => {
    try {
      await fetch(`${API}?id=${id}`, {
        method: "DELETE"
      });    
    } 
    catch (error) {
        console.log(error);
    }
}


export const addUser = async (user) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(user)
      });
    } 
    catch (error) {
        console.log(error);
    }
}

export const editUser = async (user) => {
    try {
      await fetch(API, {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(user)
      });    
    } 
    catch (error) {
        console.log(error);
    }
}