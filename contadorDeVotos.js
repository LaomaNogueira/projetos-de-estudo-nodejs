//contador de votos(urna recebe 10 votos com A, B ou C)
function urna(votos) {
    let votosA = 0;
    let votosB = 0;
    let votosC = 0;

    for(let cont = 0; cont < 10; cont++) {
        switch(votos[cont]) {
            case 'A':
                votosA++;
                break;
            case 'B':
                votosB++;
                break;
            case 'C':
                votosC++;
                break;
        } 
    }

    if(votosA > (votosB && votosC)) {
        return "A";
    } else if(votosB > (votosA && votosC)) {
        return "B";
    } else {
        return "C";
    }
}

console.log(urna(['A', 'B', 'C', 'B', 'B', 'B', 'A', 'C', 'B', 'C']));