function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// Función para desencriptar el texto
function decrypt(text, shift) {
    return encrypt(text, (26 - shift) % 26);
}

// Función para manejar el botón de encriptar
function handleEncrypt() {
    const text = document.getElementById('valorUsuario').value;
    const shift = 7;
    const encryptedText = encrypt(text, shift);
    document.getElementById('resultadousuario').value = encryptedText;
}

// Función para manejar el botón de desencriptar
function handleDecrypt() {
    const text = document.getElementById('valorUsuario').value;
    const shift = 7;
    const decryptedText = decrypt(text, shift);
    document.getElementById('resultadousuario').value = decryptedText;
}
function deleted1(){
    document.getElementById('valorUsuario').value = "";
    document.getElementById('resultadousuario').value = ""; 
}
