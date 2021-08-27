
//multiplica os valore do array por 3 e retorna um array com os resultados:
function arrayVezesTres(chances) {
    let result = [];
    for(let i = 0; i < chances.length; i++) {
        result.push(chances[i] * 3);
    }
    return result;
}

console.log(arrayVezesTres([2, 3, 5, 8, 10]));
