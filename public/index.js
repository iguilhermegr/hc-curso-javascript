// --- §Introdução1 aula de introdução do curso ---

// &)Variáveis

const olaMundo1 = "Hello World One!";

let olaMundo2 = "Hello World Two!";

var olaMundo3 = "Hello World Three!";

console.log(`${olaMundo1} / ${olaMundo2} / ${olaMundo3}`);

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// ^)Operadores

// ^)Page1

// Operador de atribuição(=)

let a  = 10;
const b = "10";

// Operadores de Comparação

// Verificando o valor da variável
console.log(a == b);

// Verificando valor e tipo da variável
console.log(a === b);

/**
 * Sendo Assim Três Operadores com o Igual
 * 
 * Um igual sendo o Operador de Atribuição(=)
 * Dois iguais sendo o Operador de Comparação de valor(==)
 * Três iguais sendo o Operador de Comparação de valor e tipo de dado(===)
*/

// ^)Page2

// Operadores de Diferença

// Verificando se a diferença no valor de uma expressão para a outra
console.log(a != b);

// Verificando se a diferença no valor e o tipo de uma expressão para a outra
console.log(a !== b);

/**
 * O Operador parecido com o igual mas com a característica de ver a diferença entre duas expressões
*/

// ^)Page3

// Operadores Lógicos

// Verificando se as duas condições são verdadeiras ao mesmo tempo, e como são, dão "true"
console.log(a == b && typeof b == 'string');

// Verificando se as duas condições são verdadeiras ao mesmo tempo, e como só uma é, toda a operação se torna "false"
console.log(a == b && typeof a == 'string');

// Os operadores lógicos funcionam para verficar se duas condições que são verdadeiras ao mesmo tempo, e se não são, ele torna toda a expressão como falsa no caso quando há 2 "e" comerciais(&&)

// Verificando agora se a primeira expressão for verdadeira ou não mas se a segunda for ainda assim irá retornar o valor de de true. Tendo alguma expressão que seja verdadeira ele aceita como true, fazendo o uso de pipe(|). "Se uma expressão for verdadeira basta..."

console.log(a == b && typeof a == 'string');

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// !)ControleDoCode(if,else)

// !)Page1

// if, else e else if

// Estrutura básica do if e else

let cor1 = "verde";

if (cor1 === "verde") {
    
    console.log("Siga!")

} else {

    console.log("Pare!")

}

// Criando blocos de código para verificar a variável e "se" uma várivel for verdadeira ela anula o outro bloco de código que é o else.
// O else é para "caso" aquela condição na qual é colocada entre parênteses não for verdadeira irá ser executado o que estiver no bloco de código do else

// Mais de um if com else if

let cor2 = "azul";

if (cor2 === "verde") {
    
    console.log("Siga!")

} else if (cor2 === "amarelo") {

    console.log("Atenção!")

} else {

    console.log("Pare!")

}

// Com mais de um if sendo a partir do primeiro if o próximo if opicional a ser acrescentado agora será o "else if" que irá criar mais uma condição e mesmo com mais de uma condição, "caso" nenhuma for verdadeira, o "else" irá responder

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// -)ControleDeFluxo(Switch)

// -)Page1

// Com o Switch podemos diminuir nosso bloco de código do if e else para um código com um controle melhor de fluxo
// Com o Switch iremos passar uma expressão pra ele analisar e com a aquela expressão analisada terá possivéis casos ou "cases" que iram haver e as ações naqueles determinados casos avaliados sobre aquela expressão

let cor3 = "azul";

switch (cor3) {

    case "verde":
        console.log("Siga!");
    break;

    case "amarelo":
        console.log("Atenção!");
    break;

}

// Aqui temos a variável cor3 e dentro do Switch nos parâmetros ele avalia a expressão e cria casos, e se casos(case) for igual a tal expressão ou for verdadeira e ele vai executar tal ação
// Agora vale lembrar que se caso você quer que seu case avalie uma expressão e pare ali, use o "break;" pois sem ele mesmo avaliando aquele caso o código continuará sendo executado normamlmente

let cor4 = "azul";

switch (cor4) {

    case "verde":
        console.log("Siga!");
    break;

    case "amarelo":
        console.log("Atenção!");
    break;

    default:
        console.log("Não consegui identificar...")
    
}

// Aqui nessa nova linha de casos teremos o melhor controle de fluxo pois caso nenhuma dos casos passados ali for verdade, o Switch irá executar algo padraõ, o "default".
// Assim sendo que o "default" faz o mesmo trabalho do else assim sendo que se nada for executado, o default será executado

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// =) Laços de Repetição

// =) Page 1

// For
// O "for" servirá para toda vez que você quiser repetir um trecho de código tanto se você souber quantas vezes você irá repetir esse trecho de código tanto de você não souber quantas vezes irá repetir, iremos usar o "for"
// Se caso você já saiba quantas vezes irá se repetir esse trecho de código, você irá criar um for com 3 instruções: 1 - É de onde ele se inicia. 2 - Até quando ele vai executar esse código. E 3 - Qual será o incremento dessa varável

// Array
// Array é para percorrer um trecho de código e a cada index que se achar em um "array" ele irá executar algo e para cada index que iremos achar usaremos então o "forEach"

// ForIn
// Para percorrermos nomes de objetos iremos usar o "forIn". Ou seja, para cada chave ou cada atributo de um objeto que ele achar ele irá executar alguma coisa

// Break
// Para se caso queira interromper o "Laço de Repetição" que é o caso do "for, o array, o forEach e forIn" iremos usar o "break" muito parecido com o Switch mas agora em nossos laços iremos colocar condições if dentro de nosso for para que haja o break

// Continue
// Em nossos laços de Repetição estamos percorrendo trechos de código mas se caso queira pular determinado dado a partir de uma ação em seu código iremos usar o "continue"

let n = 5;

for(let i = 0; i <= 10; i++) {

    console.log(`${i} x ${n} = ${i*n}`);
    // Aqui temos como prática o laço de repetição mais comum do JavaScript, ou seja, o "Template String". No Template String podemos pular linhas ao fazer ou trazer códigos junto de strings

    console.log(i + "x" + n + "=" + (i * n));
    // Já no código abaixo temos o jeito mais antigo de se executar um código junto de uma string que seria por concatenações. Já aqui não podemos pular linhas ao trazer códigos junto de strings

}

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// §Introdução2 Segunda aula de introdução ao curso

// %) Funções

// No JavaScript podemos criar blocos de códigos que podem ser usados, ou invocados diversas vezes durante o seu código; assim aproveitando muitos blocos ou trechos de códigos.
// Pra isso é usada as "Funções" ou como é feita no JS "functions"

// Junto das funções iremos ter os parâmetros que estarão entre parêteses. Mas nem sempre uma função irá precisar ter parâmetros, mas se caso haja parâmetros, teremos de respeitar esses parâmetros

// Temos 3 tipos de funções:

// A função comum que têm o nome reservado function

// A função anônima na qual criamos para executar determinada ação com aquele bloco de código mas não podemos chamá-la por nome

// E a "ArrowFunction", na qual teremos um meio mais fácil e com maiores recursos e alguns expecíficos para essa função

function somar(x1, x2){
// Acima declaramos que esse é um bloco de código para uma função e tendo os parâmetros

    return x1 + x2;
    // Com o "return" nós dizemos o que o JavaScript irá retornar a aplicação, sendo no exemplo acima, o valor de x1 + x2

}

let resultado1 = somar(1, 2);
// Aqui armazenamos, ou dizemos o valor que queremos que a seja somado como foi criada a nossa função para ser feita este calculo

console.log(resultado1);

// Então por aqui temos um exemplo de soma usando a mais comum função


// Função

function calc1(x1, x2, operator){
    // Primeiramente já mudamos o nome da nossa function para "calc", uma vez que não iremos apenas somar, mas sim calcular um valor
    // Agora nos parâmetros temos o "operator" que será o operador para realizar a nossa conta

    return eval(`${x1} ${operator} ${x2}`);
    // Neste novo return mudamos o valor ou o que seria retornado para a aplicação, ou o que eu quero que ele valide, usando o eval para validar o conteúdo da nossa "TemplateString"
    
}

let resultado2 = calc1(1, 2, "-");

console.log(resultado2);

// Para tornarmos essa função um tanto mais completa, teremos agora uma verdadeira calculadora tendo agora um operador


// Função Anônima

(function(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);

})(1, 2, "*");

// Uma função diferente não?
// Essa é a "função anônima"
// Nela fazemos uma função, ou um bloco de código para ser executado no momento em que ela é criada. Assim, não damos nome a ela, pois ela está no anonimato, e colocamos um parênteses para indicar que ela é um valor. Logo após fechá-la com parênteses, abrimos o outro parênteses para executar aquela determinada função


// ArrowFunction

let calc2 = (x1, x2, operator) => {
    
    return eval(`${x1} ${operator} ${x2}`);

}

let resultado3 = calc2(1, 2, "/");

console.log(resultado3);

// Acima temos uma forma mais nova e recente de criar funções. A ArrowFunction

// Continua...