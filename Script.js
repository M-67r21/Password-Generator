const passwordBox = document.getElementById("password");
const length =12; //sets the length of the password

const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z ";
const number = "0123456789";
const symbol =  "!@#$%^&*()_+~|{}[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {  //generates and returns password
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; //genarates a ramdom number from upperCase lengh
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];  //genarates a ramdom number from lowerCase lengh
    password += number[Math.floor(Math.random() * number.length)]; //genarates a ramdom number from number lengh
    password += symbol[Math.floor(Math.random() * symbol.length)]; //genarates a ramdom number from symbol lengh

    while(length > password.length){ //when 12 is greater than the length of generated password
        password += allChars[Math.floor(Math.random() * allChars.length)]; //adds random number until the password lenght is 12
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}