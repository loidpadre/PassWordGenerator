const inputShowPassword = document.getElementById("password")

// qunatidade de caracteres do password
let lenght = 12
// tipos de caracteres que vao constar no password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
const lawerCase = "abcdefghijklmnopqrstuvwyxz"
const number = "0123456789"
const specialCaracter = "|#$%&/()=?@£§€{[]}-"
const allCaracter = upperCase + lawerCase + number + specialCaracter
function generate(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lawerCase[Math.floor(Math.random() * lawerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += specialCaracter[Math.floor(Math.random() * specialCaracter.length)]
    while(lenght > password.length){
        password += allCaracter[Math.floor(Math.random() * allCaracter.length)]
    }
    inputShowPassword.value = password
}
function copypassword(){
    inputShowPassword.select()
    navigator.clipboard.writeText(inputShowPassword.value)
}