//regex que aceite a seguinte expressão "Marca: Nome"
const marca1 = /^(Marca:+)( (?=([A-Z]{1,1})([a-z]+)$))/;

console.log(`1 ${marca1.test('Marca: Marca: Adidas')}`);
console.log(`2 ${marca1.test('Marca: Nike')}`);
console.log(`3 ${marca1.test('Marca:Nike')}`);
console.log(`4 ${marca1.test('MARCA: Puma')}`);
console.log(`5 ${marca1.test('Marca: A12didas')}`);
console.log(`6 ${marca1.test('Marca: Marca')}`);



//regex que só aceite strings terminadas com ID
const stringId = /\w(ID$)/;

console.log(`1 ${stringId.test('12dff5kfID')}`);
console.log(`2 ${stringId.test('12dff5kfIDbfbf')}`);
console.log(`3 ${stringId.test('12dff5kfID dfsf')}`);
console.log(`4 ${stringId.test('12dff5kfID dfsfID')}`);


//regex que valide email
//const email = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
const email = /^[\w.]+@[\w]+(\.[a-z]{2,})+$/;

console.log(`7 ${email.test('laomanogueira @gmail.com')}`);
console.log(`8 ${email.test('laomanogueira@gmail.com')}`);
console.log(`9 ${email.test('LaomaNogueira@gmail.com.br')}`);
console.log(`10 ${email.test('laoma.nogueira@.com')}`);
console.log(`11 ${email.test('laomanogueira_15@ufms.ms.gov.br')}`);
console.log(`12 ${email.test('laomanogueira@com')}`);
console.log(`13 ${email.test('laomanogueira@gmail.Com')}`);


//regex que valide se um valor está no formato de data yyyy-mm-dd
const data = /^([0-9]{4})+-([0-9]{2})+-([0-9]{2})+$/

console.log(`14 ${data.test('2021-12-04')}`);
console.log(`15 ${data.test('2021/12/04')}`);
console.log(`16 ${data.test('12-04-2021')}`);
console.log(`16 ${data.test('1999-04-202')}`);


//regex que aceite a seguinte expressão "Marca: Asics ou Puma ou Adidas ou Nike"
const marca = /^(Marca:+)( (Puma|Adidas|Asics|Nike))$/;

console.log(`17 ${marca.test('Marca: Marca: Adidas')}`);
console.log(`18 ${marca.test('Marca: Nike')}`);
console.log(`19 ${marca.test('Marca:Nike')}`);
console.log(`20 ${marca.test('MARCA: Puma')}`);
console.log(`21 ${marca.test('Marca: A12didas')}`);
console.log(`22 ${marca.test('Marca: Adidas')}`);
console.log(`23 ${marca.test('Marca: Asics')}`);
console.log(`24 ${marca.test('Marca: AsicsPuma')}`);
console.log(`25 ${marca.test('Marca: Puma')}`);
