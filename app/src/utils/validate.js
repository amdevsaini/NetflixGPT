export const validateInput = (email, password, name = false, isSignIn) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

    let validName = null;
    if (!isSignIn) {
    validName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    }
    if(!validEmail) return "Email Address is not valid";
    if(!validPassword) return "Password is not valid";
    if(!isSignIn && !validName) return "Name is not valid";

    return null;


}