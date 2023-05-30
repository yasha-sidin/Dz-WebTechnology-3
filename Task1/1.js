
function rounding(number, decimalPlaces){
    if (decimalPlaces > 0){
        let numberOf10ToDecimalPlaces = 1;
        for (let i = 0; i < decimalPlaces; i++) {
            numberOf10ToDecimalPlaces *= 10;
        } 
        return Math.trunc(number * numberOf10ToDecimalPlaces) / numberOf10ToDecimalPlaces
    } else {
        alert('Знаков после запятой не может быть отрицательное количество')
    }
       
}

let celcia = +prompt('Введите значение в градусах Цельсия: ');
let farengate = rounding((9 / 5) * celcia + 32, 2)
alert(`Цельсий: ${celcia}, Фаренгейт: ${farengate}`)