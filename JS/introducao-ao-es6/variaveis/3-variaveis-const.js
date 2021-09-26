const name = 'Emerson';

// Não podemos alterar o valor
//name = 'Emerson Silva';

const user = {
    name: 'Emerson Silva'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
/* 

user = {
    name: 'Emerson'
}; 

*/

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift(); // [Pedro, Jenifer, João]

// Podemos alterar diretamente
persons[1] = 'James'; // [Pedro, James, João]

console.log('\nArray após as alterações: ', persons);