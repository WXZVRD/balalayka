function inDepression(num) {
    const expression = num % 10
    if (expression === 1) return `${num} компьютер`
    else if (expression > 1 && expression < 5) return `${num} компьютера`
    else return `${num} компьютеров`
}

console.log(inDepression(25))
console.log(inDepression(41))
console.log(inDepression(1048))
console.log(inDepression(1050))
