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

    return response;
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

    return response;
}