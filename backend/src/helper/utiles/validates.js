
//check required fields are not empty 
function isNotEmpty(value) {
    return value;
}
//check the mobile is in correct form or not
// function isMobileNumber(value) {
//     if(!value) return false;
//     for (let i = 0; i < value.length; i++) {
//         if (!(value[i] >= 0 && value[i]-'0' <= 9)) return false;
//     }
//     return value.length === 10;
// }
//check the password is in correct from or not
function passWordCheck(value) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return re.test(String(value));
}
//check email
function isEmail(value) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
}

const validate = (rules = []) => {

    const check = {
        isNotEmpty,
        passWordCheck,
        isEmail
    }

    rules.forEach((element) => {
        if (!check[element.check](element.value)) {
            throw new Error(element.message);
        }
    });

}

module.exports = validate;