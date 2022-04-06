let clientUserName = prompt("Assalomu Aleykum, Iltimos Ismingizni Kiriting");
while (!isNaN(clientUserName) || clientUserName == "") {
    clientUserName = prompt("Assalomu Aleykum, Iltimos Faqat Ismingizni Kiriting");
}
let clientCount = +prompt(clientUserName + " Son Kiriting");
while (isNaN(clientCount) || clientCount == "") {
    clientCount = +prompt(clientUserName + " Faqat Son kiriting");
}
let result = "";
for (let i = 0; i <= clientCount; i++) {
    for (let k = 0; k <= clientCount; k++) {
        if (i == 0 || k == 0 || i == clientCount || k == clientCount || i == k) {
            result += "[*]";
        } else {
            result += "   ";
        }
    }
    console.log(result);
    result = "";
}