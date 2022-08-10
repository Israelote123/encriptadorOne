const encryptKeys = {
   a:"ai",
   e:"enter",
   i:"imes",
   o:"ober",
   u:"ufat",
};

const decryptKeys = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u",
}

//cambia el cuadro en el cual puede escribir el usuario
if(window.screen.width <= 768){
    document.querySelector('.user-entry-container').contentEditable = true;
}

//Guardado real del texto ingresado
let realSave = (userText) => {
    document.querySelector('[name="user_entry"]').value = userText.innerText;
}

//Obtiene el texto que ingreso el usuario
let obtainData = () => {
    return document.querySelector('[name="user_entry"]').value
}

//Encripta la informacion
function encrypt(matched){
    return encryptKeys[matched];
}

function encryptUserEntry(data){
    return data.replace(/a|e|i|o|u/g, encrypt);
}

//Desencripta la informacion
function decrypt(matched){
    return decryptKeys[matched];
}

function decryptUserEntry(data){
    return data.replace(/ai|enter|imes|ober|ufat/g, decrypt);
}

//Esconde la imagen de resultados no encontrados
let hideImage = () => {
    document.getElementById('anyResult').style.display = `none`
}

//Muestra la información encriptada
let showEncrypted = () => {
    let dataEncrypted = encryptUserEntry(obtainData());
    document.getElementById('result').innerHTML = `${dataEncrypted}`;
}

//Muestra la información desencriptada
let showDecrypted = () => {
    let dataDecrypted = decryptUserEntry(obtainData());
    document.getElementById('result').innerHTML = `${dataDecrypted}`;
}