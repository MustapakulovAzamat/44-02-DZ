//1
function table(number) {
    const result = []

    for(let i = 1; i <= 10; i++){
        const multiplication = number * i
        result.push(multiplication)
    }

    return result
}


//2
function cheakPalindrome(text) {
    if (text.split("").reverse().join("") === text ) {
        return true
    }else {
        return false
    }
}
