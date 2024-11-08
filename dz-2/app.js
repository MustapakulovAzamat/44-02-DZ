const sum = prompt('Сумма')
const typeFuel = prompt('Введите тип топлива: АИ-92, АИ-95, АИ-98, ДТ, Газ')
const card = prompt('Введите тип вашей карты: Серебренная(1) , Золотая(2) или Платиновая(3)')

const pricesFuel = {
    'АИ-92': 70,
    'АИ-95': 74,
    'АИ-98': 78,
    'ДТ': 65,
    'Газ': 40
};


if(sum <= 0) {
    console.error('Введите корректную сумму');
    
} else if ( pricesFuel[typeFuel] === undefined ) {
    console.error('Неправильно указали тип топливо!');

} else {
    const liters = Math.round(sum / pricesFuel[typeFuel])
    console.log(`${liters} литров`);

    
    switch (card) {
        case '1':
            console.log(`Вы получаете ${liters * 0.5} баллов за серебренную карту`);
            break;

        case '2':
            console.log(`Вы получаете ${liters * 0.75} баллов за золотую карту`);
            break;

        case '3':
            console.log(`Вы получаете ${liters * 1} баллов за платиновую карту`);
            break;

        default:
            console.error('Неправильно указали тип вашей карты!');
    }
}
