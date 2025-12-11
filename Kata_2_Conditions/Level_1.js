function validatePassword(password) {

    function pswLength (password, length) {
        return password.length >= length;
    }

    function pswUppercase(password){
        return password.match(/[A-Z]/);
    }

    function pswNoSpace(password){
        return !password.includes(" ");
    }

    function pswNumber(password){
        return password.match(/[0-9]/);
    }

    if (!pswLength(password, 8)) {
        throw new Error("Mot de passe trop court");
    } else {
        console.log(`Le mot de passe est assez long`);
    }

    if (!pswUppercase(password)) {
        throw new Error("Le mot de passe doit contenir au moins une lettre majuscule")
    } else {
        console.log("Le mot de passe contient une lettre majuscule")
    }

    if (!pswNoSpace(password)){
        throw new Error("Le mot de passe ne doit pas contenir d'espaces")
    } else {
        console.log("Le mot de passe ne contient pas d'espaces")
    }

    if (!pswNumber(password)){
        throw new Error("Le mot de passe doit contenir au moins un chiffre")
    } else {
        console.log("Le mot de passe contient un chiffre")
    }

    return password;
}

validatePassword("aBcdefghfd7");