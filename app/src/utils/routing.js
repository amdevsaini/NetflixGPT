import { registerUserUrl, loginUserUrl } from "../constants"

export const registerUser = async (email, password, name) => {
    console.log("+++++++++++++", email, password, name);
    const response = await fetch(registerUserUrl, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email, password, name
        })
    })

    return await response.json();
}

export const loginUser = async (email, password) => {
    console.log("+++++++++++++", email, password);
    const response = await fetch(loginUserUrl, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email, password
        })
    })
    console.log("tttttttttt", response);
    return await response.json();
}