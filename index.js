//console é um objeto que atraaves dos seus metodos
// faz com que o programador interaja com a saida do ambiente que 
// o javaScript está sendo executado.

// console.log('olá Mundo !!!!!')
// console.warn('ateção')
// console.error('ERRO')
// console.info('Informação')

// let fruits = ['apple','banana','orange']

// console.table(fruits);

//console.clear();

// variaveis

// var a = 1
// console.log(a)

// let b = 'isael'
// console.log(b)

// const c = true
// console.log(c)

// let d 
// console.log(d)

// let e = null
// console.log(e)

// const fruits = ['apple','banana','orange']
// console.log(fruits)

// const number = [10 , 20, 30]
// console.log(number)

// const user = {name : 'isael silva', age: 29}
// console.log(user)

// const arrayUsers = [
//     {
//         name: 'alfredo', age: 55
//     },
//     {
//         name: 'cassio', age: 15
//     }
// ]
// console.log(arrayUsers)

// let userOne = arrayUsers[0].age
// console.log(userOne, 'estou aqui')

// let cep = {

// }
// let e var = variavel que sofre alteração 
// const = permanece com o mesmo valor

let a = 1
var b = 2
const c = 'permanece o valor'

// reatribuindo valores
a= 'oi'
b = 'nada'

// tipos de dados 

let string = 'dado'
console.log(typeof(string))

let number = 10
console.log(typeof(number))

let added = null
console.log(typeof(added))

let x
console.log(typeof(x))

const address = { cep: 04935090, logadouro: 'rua benedito', uf: 'SP'}
console.log(typeof(address))

const motos = ['XR','XT 660','CB 500']
console.log(typeof(motos))

const numbers = [1,2,3]
console.log(typeof(numbers))

const objs = [{cep: 04935090, logadouro: 'rua benedito', uf: 'SP'},{cep: 04935090, logadouro: 'rua benedito', uf: 'SP'},{cep: 04935090, logadouro: 'rua benedito', uf: 'SP'}]
console.log(objs)

// metodos de string

const fullName = 'Diogo Mauricio da Silva Gesteira'

console.log(fullName.indexOf('D'), 'estou aqui')
console.log(fullName.slice(0,5))
console.log(fullName.length)

const arrayName = fullName.split(' ')
console.log(arrayName)

const firstName = arrayName [2]
console.log(firstName)

console.log(firstName.toLocaleLowerCase())
console.log(firstName.toLocaleUpperCase())


// método de array 

const list = ['a','b','c','d','e']
console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

list.push('g') // adicional um elemento no final da lista
console.log(list.length)
console.log(list[list.length - 2])

list.pop()   // tira o ultimo item 
console.log(list)

list.shift()  // tira o primeiro item 
console.log(list)

list.unshift('a') // adicional um elemento no começo da lista
console.log(list)