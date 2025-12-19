const API = "https://to-dos-api.softclub.tj/api/to-dos";

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

export const deleteUser = async(id) => {
    try {
      await fetch(`${API}?id=${id}`, {
        method: "DELETE"
      })    
    } 
    catch (error) {
        console.log(error);
    }
}

export const deleteImage = async(id) => {
    try {
      await fetch(`https://to-dos-api.softclub.tj/api/to-dos/images/${id}`, {
        method: "DELETE"
      })    
    } 
    catch (error) {
        console.log(error);
    }
}

export const editUser = async(user) => {
    try {
      const response = await fetch(API, {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(user)
      });
      const data = await response.json();
      console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
}

export const addUser = async(formdata) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: formdata
      });
      const data = await response.json();
      console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
}

export const addImage = async(obj) => {
    try {
      const response = await fetch(`https://to-dos-api.softclub.tj/api/to-dos/${obj.id}/images`, {
        method: "POST",
        body: obj.formData
      });
      const data = await response.json();
      console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
}

export const checkout = async(id) => {
  try {
    await fetch(`https://to-dos-api.softclub.tj/completed?id=${id}`, {
      method: "PUT"
    })  
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