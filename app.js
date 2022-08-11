const encryptKeys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const decryptKeys = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

//Boton para guardar en el portapapeles
let copy = () => {
  let resultData;

  if (screen.width < 769) {
    resultData = document.getElementById("processResult").value;
  } else {
    resultData = document.getElementById("textResult").textContent;
  }

  navigator.clipboard
    .writeText(resultData)
    .then(() => {
      console.log("Texto copiado");
      if (screen.width < 769) {
        Alert.ok();
      }
    })
    .catch((err) => {
      console.log("Hubo un error ", err);
    });
};

//Manejo de pop up (tablets a telefonos)

var Alert = new CustomAlert();

function CustomAlert() {
  this.render = function () {
    let popUpBox = document.getElementById("popUpBox");
    let back = document.getElementById("popUpOverlay");
    back.style.display = "block";
    popUpBox.style.display = "block";
    document.getElementById(
      "closeModal"
    ).innerHTML = `<button type="button" class="btn btn-outline-success" onclick="copy();"><i class="far fa-copy"></i></button>`;
  };

  this.ok = function () {
    document.getElementById("popUpBox").style.display = `none`;
    document.getElementById("popUpOverlay").style.display = `none`;
  };
}

//cambia el cuadro en el cual puede escribir el usuario
if (window.screen.width <= 768) {
  document.querySelector(".user-entry-container").contentEditable = true;
}

//Guardado real del texto ingresado
let realSave = (userText) => {
  document.querySelector('[name="user_entry"]').value = userText.innerText;
};

//Obtiene el texto que ingreso el usuario
let obtainData = () => {
  let obtainedData = document.querySelector('[name="user_entry"]').value;
  if (obtainedData == "") {
    return false;
  }
  return obtainedData;
};

//Encripta la informacion
let encrypt = (matched) => {
  return encryptKeys[matched];
};

let encryptUserEntry = (data) => {
  return data.replace(/a|e|i|o|u/g, encrypt);
};

//Desencripta la informacion
let decrypt = (matched) => {
  return decryptKeys[matched];
};

let decryptUserEntry = (data) => {
  return data.replace(/ai|enter|imes|ober|ufat/g, decrypt);
};

//Esconde la imagen de resultados no encontrados
let hideImage = () => {
  document.getElementById("anyResult").style.display = `none`;
};

//Muestra la información encriptada
let showEncrypted = () => {
  let dataOfUser = obtainData();
  if (!dataOfUser) {
    document.getElementById("noText").style.display = `block`;
    if (screen.width > 768) {
      document.getElementById("anyResult").style.display = `block`;
      document.getElementById("textResult").style.display = `none`;
      document.getElementById("floatingTextarea").style.height = `500px`;
    }
  } else {
    let dataEncrypted = encryptUserEntry(dataOfUser);
    document.getElementById("noText").style.display = `none`;
    document.getElementById("textResult").style.display = `block`;
    document.getElementById("floatingTextarea").style.height = `600px`;
    if (screen.width > 1280) {
      document.getElementById("floatingTextarea").style.height = `700px`;
    }
    if (screen.width < 769) {
      Alert.render("You look very pretty today.");
      document.getElementById("processResult").value = `${dataEncrypted}`;
    } else {
      document.getElementById("anyResult").style.display = `none`;
      document.getElementById("copy").style.display = `block`;
      document.getElementById("textResult").textContent = `${dataEncrypted}`;
    }
  }
};

//Muestra la información desencriptada
let showDecrypted = () => {
  let dataOfUser = obtainData();
  if (!dataOfUser) {
    document.getElementById("noText").style.display = `block`;
    if (screen.width > 768) {
      document.getElementById("anyResult").style.display = `block`;
      document.getElementById("textResult").style.display = `none`;
      document.getElementById("floatingTextarea").style.height = `500px`;
    }
  } else {
    let dataDecrypted = decryptUserEntry(dataOfUser);
    document.getElementById("noText").style.display = `none`;
    document.getElementById("textResult").style.display = `block`;
    document.getElementById("floatingTextarea").style.height = `600px`;
    if (screen.width > 1280) {
      document.getElementById("floatingTextarea").style.height = `700px`;
    }
    if (screen.width < 769) {
      Alert.render("You look very pretty today.");
      document.getElementById("processResult").value = `${dataDecrypted}`;
    } else {
      document.getElementById("anyResult").style.display = `none`;
      document.getElementById("copy").style.display = `block`;
      document.getElementById("textResult").textContent = `${dataDecrypted}`;
    }
  }
};
