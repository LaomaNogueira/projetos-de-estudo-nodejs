//BIBLIOGRAFIA: https://aurelio.net/regex/


//EXPRESSÕES REGULARES = LINGUAGEM DE BUSCA DE PADRÔES


/*FORMAS DE DECLARAR EXPRESSÕES REGULARES:
    1 - Chamando o construtor(menos usada):
        var construtor = new RegExp('padrão, 'flag'); //O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão.
                OU
    2 - Na forma literal(mais utilizado):
        var literal = /padrao/flag;
    Onde:
        Primeiro argumento: é o padrão, pode ser qq coisa, mas por bom uso deve ser uma string ou outra regex
        Segundo argumento: é a flag ou modificador, adiciona um comportamento no motor da Regex
*/


/*FLAGS - MODIFICADORES do JS:
    g - pesquisa global, a busca deve retornar todos os padrões encontrados. 
        Caso não seja usado, será retornado apenas o primeiro padrão encontrado.
    i - case insensitive, não diferencia maiúsculas e minúsculas
    m - pesquisa multi-linhas, procura o padrão em múltiplas linhas
        retorna verdadeiro caso uma linha corresponda ao padrão
    y - força a regex a trazer somente os matches consecutivos, ou seja, 
        se você tem um alvo que tem 2 resultados consecutivos e em seguida um caractere 
        (ou conjunto) que não bate com seu padrão, ele só traz os primeiros resultados.
    s - Permite que o caractere . corresponda também à quebra da linha.
    u - Habilita a capacidade da Regex engine entender caracteres unicode 
        e captura-los corretamente (exemplo: 𝌆), busca emojis por exemplo.
*/


/*MÉTODOS:
    variavelPattern.metodo(variavelAlvo);

    Métodos RegExp:
        test - valida se o alvo contém o padrão que você definiu, retorna: true ou false.
        exec - utilizar quando precisa recuperar o padrão que está filtrando, 
               a cada vez que você executa o método, ele pula para o próximo resultado
               Retorna null ou um array: ['[index] - resultado encontrado', 
                                          'index - posição do resultado', 
                                          'input - entrada naquele momento']
    Métodos String:
        match - executa uma pesquisa por uma correspondência na string. 
                Retorna um array de informações ou null caso não haja correspondência
        search - testa uma correspondência na string. 
                 Retorna o indice da correspondência ou -1 se o teste falhar
        replace - executa uma pesquisa por uma correspondência na string, 
                  e substitui a substring correspondente, por uma substring de substituição.
        split - usa uma expressão regular ou uma string fixa para quebrar uma string 
                dentro de um array de substrings.

*/  


/*CARACTERES ESPECIAIS ou META CARACTERES:
    / - INICIO E FIM DA REGEX. Começa e termina uma expressão regular.
    \ - CARACTER DE ESCAPE. Uma \ que preceda um caractere não especial, significa que o 
        caractere seguinte é especial e não deve ser interpretado de forma literal
        Quando a \ preceder um caractere especial isso significará 
        que o próximo caractere deve ser interpretado de forma literal. 
        Não é necessário "escapar" caracteres especiais em conjuntos, dentro de colchetes[].
    . - CORINGA. Corresponde à qualquer caractere, exceto quebra de linha. Para corresponder 
        especificamente a um ponto, é necessário escapar este caractere, assim: \.
    ^ - INICIO. Valida se uma string começa com um determinado padrão. Também serve para negar um grupo.
    $ - FIM. Valida se uma string termina com um determinado padrão.
    [] - CONJUNTO DE CARACTERES. Pesquisa correspondência para qualquer um dos caracteres entre colchetes.
         Use hífen para especificar um intervalo de caracteres. Ex: [a-d] = [abcd].
         Exs: /[1238]/ , /[0-9]/ , /[afghj]/ , /[a-z]/ , /[A-Z]/ , /[0-9a-zA-Z]/
    [^conjunto] - NEGAR CONJUNTO. Quando  o circunflexo é utilizado dentro de conjuntos, tem a função de negar aquele conjunto.
    {} - DEFINE UMA PROPRIEDADE. Operador de precisão
    () - DEFINE UM GRUPO. Cria grupos de padrões
    (?:xyz) - IGNORA UM GRUPO.É possível usando a sintaxe ?: dentro do inicio do grupo (?: ... )
    \d - NUMÉRICO. Corresponde à um caractere numérico. 
         É o mesmo que [0-9]
    \D - NÃO-NUMÉRICO. Corresponde à um caractere não numérico. 
         É o mesmo que [^0-9].
    \w - ALFANUMÉRICO. Corresponde à qualquer caractere alfanumérico mais _ underline. 
         É o mesmo que [0-9a-zA-Z_].
    \W - NÃO-ALFANUMÉRICO. Corresponde à qualquer caractere não alfanumérico mais _ underline. 
         É o mesmo que [^0-9a-zA-Z_].
    \s - ESPAÇO. Corresponde à um caractere de espaço, tab e quebra de linha.
    \S - NÃO-ESPAÇO. Corresponde à qualquer caractere que não seja espaço, tab ou quebra de linha.
    \n - ENTER. Corresponde à quebra de linha.
    \t - TAB. Corresponde à tab.
    \0 - NULL. Corresponde à null.
    \p{x} - UNICODE. Corresponde à um caractere unicode cuja propriedade passada em "x" seja verdadeira. 
            Requer que a flag "u" seja utilizada.
    \P{x} - NÃO-UNICODE. Corresponde ao oposto de \p{x}.
    [^] - Corresponde à qualquer caractere, incluindo quebra de linha (diferente do .).
*/


/*QUANTIFICADORES:
    ? - O dígito anterior Pode aparecer 0 vez ou 1 vez, retorna true ou false.
    ?= - Retorna true apenas se após a string contem o padrão. Ex: /A(?=B)/ encontra A apenas se for seguido por B
    ?! - Nega, Retorna true apenas se após a string não contem o padrão. Ex: /A(?!B)/ encontra A apenas se ele não for seguido B
    ?<= - Se antes da string contem o padrão, retorna true. Ex: /(?<=A)B/ antes da letra B contem a letra A
    ?<= - Nega, Se antes da string não contem o padrão, retorna true. Ex: /(?<!A)B/ antes da letra B contem a letra A
    * - Pode aparecer 0 vez ou mais que 1 vez, ou seja, DEVE aparecer VÁRIAS vezes. 
    + - Pode aparecer no mínimo 1 vez.
    - - Delimitador
    | - OPERADOR OR. Pesquisa correspondência em um ou outro padrão. Ex: /agua|suco/
    {n} - Para um padrão apareça especificamente “n” vezes, passamos o número de 
          vezes (n) entre chaves, após alguma declaração. Ex.: \d{5}\ 
    {n,} - Para que o padrão apareça no mínimo “n” vezes. Ex: \[A-Za-z]{4,}\
    {n,m} - Para que o padrão apareça no mínimo “n” e no máximo “m” vezes. Ex.: \[a-z0-9_-]{3,16}\

obs.: Quantifiers são gananciosos!: “Vou selecionar tudo o corresponder à essa expressão,
      até encontrar algo que não responda, aí eu paro!”
*/
