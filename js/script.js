// EXO 1 :  Your Favorite Food

let myFavoriteFood = 'Grilled chicken'
let mealFavorite = 'lunch'

console.log("I eat "+myFavoriteFood+"at every "+mealFavorite)


// EXO 2 : Series

    // Part 1

const myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence= myWatchedSeries.toLocaleString()
console.log("I watched "+myWatchedSeriesLength+" series : " + myWatchedSeriesSentence)

    // Part 2

const indexLast = myWatchedSeries.indexOf('the big bang theory')
myWatchedSeries[indexLast] = 'friends'
myWatchedSeries.push('BlackList')
myWatchedSeries.shift()
let firstElement = myWatchedSeries[0]
console.log(firstElement.slice(2,3))
console.log(myWatchedSeries)


// EXO 3 :  The Temperature Converter

let currentTemperature = 38
let celcusTemperature =( (38/5) * 9) + 32
console.log('la temperature en celcus est '+celcusTemperature+' °C')


// EXO 4 : Guess The Answers #1 
let c;
let a = 34;
let b = 21;
//1.Quel sera le résultat de a + b
console.log(a+b) //first expression
// Prediction: le resultat de a+b est 55 car a est un une variable numerique qui à pour valeur 34 et b aussi qui est une variable numerique de valeur 21
// Actual: 55

//2.Quel sera le résultat de a + bdans la seconde expres
a = 2;

console.log(a+b) //second expression
// Prediction: le resultat de a + b est 23 car a àpour valeur 2 et b pour valeur 21
// Actual: 23

//3.Quelle est la valeur de c?
console.log(c)

// prediction: c n'a pas de valeur car c'est une variable qui n'est pas defini

//4.Analysez le code ci-dessous, quel sera le résultat ?

console.log(3 + 4 + '5');

//prediction: ici notre script va additionner 3 et 4 car les deux sont types numeric par contre '5' est une chaine de caractere alors on aura 75 il additionne les deux premiers qui sont 3+4 = 7 et il concatene le numerique à la chaine de caractere '5'
//actual: 75


// Exo 5 : Guess The Answers #2 

//1.Quelle est la sortie de chacune des expressions ci-dessous ?

typeof(15)
// Prediction: Entier
// Actual: Number

typeof(5.5)
// Prediction: float
// Actual: number

typeof(NaN)
// Prediction: not null
// Actual:Number

typeof("hello")
// Prediction:chaine de caractere
// Actual: string

typeof(true)
// Prediction: retourne vrai
// Actual: boolean

typeof(1 != 2)
// Prediction:comparare les deux nombres
// Actual:boolean

"hamburger" + "s"
// Prediction: il va concatener "hamburger" à "s" vu que les deux ont le meme type
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: ici il returne un not null car ne pouvons pas soustrairedes chaine de caractere
// Actual:NaN

"1" + "3"
// Prediction: "13" ici notre resultat sera concatener vu que nos entrer sont de chaine de caractere
// Actual: string

"1" - "3"
// Prediction: ici il aura une conversion de nos entres en en numerique
// Actual: number

"johnny" + 5
// Prediction:"johnny5" ici cette opration concatenera notre resultat
// Actual: string

"johnny" - 5
// Prediction: ici on aura une valeur not null
// Actual: number

99 * "hello"
// Prediction: il returne une valeur Not null
// Actual: number

1 != 1
// Prediction: il retourne une valeur false
// Actual: boolean

1 == "1"
// Prediction: il retourne une valeur true
// Actual: boolean

1 === "1"
// Prediction: il retourne une valeur false car ils n'ont pas les meme types
// Actual:boolean



// Exo 6 : Guess The Answers #3



5 + "34"
// Prediction: il concatenera nos deux valeurs car le premier est un number et le deuxieme string
// Actual: string

5 - "4"
// Prediction: il fait une soustraction
// Actual: number

10 % 5
// Prediction: il retournera 2 comme modulo
// Actual: number

5 % 10
// Prediction: il retournera le modulo de l'operation
// Actual: number

"Java" + "Script"
// Prediction: ici il concatenera nos deux valeurs qui donnera JavaScript
// Actual: string

" " + " "
// Prediction: il retourne un resultat vide
// Actual: string

" " + 0
// Prediction: il nous donne une chaine de caractere
// Actual: string

true + true
// Prediction: il retournera 2 car il additionnera les deux entres
// Actual: number

true + false
// Prediction: il retournera 1
// Actual: number

false + true
// Prediction: il retournera 1
// Actual: number

false - true
// Prediction: il retourne -1
// Actual:number

!true
// Prediction: il retourne false
// Actual: Boolean

3 - 4
// Prediction: ici il retourne la valeur -1 car il fait une soustraction
// Actual: number

"Bob" - "bill"
// Prediction: ici il retourne une valeur not null
// Actual:Number