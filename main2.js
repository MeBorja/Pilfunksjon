//Oppgave 1
const helloWrld = () =>
{
    console.log("Hello World");
}
helloWrld();

//Oppgave 2
const param1 = (param) =>
{
    console.log("Parameteret mitt er", param);
}
param1("noob gamer");

//Oppgave 3
const param3 = (a, b, c) =>
{
    console.log(a, b, c);
}
param3(1, 4, 2);

//Oppgave 4

const param4 = (...array) =>{
    
        for (let tall = 0; tall < array.length; tall++) {
            console.log(`navn[${tall}] = ${array}`)
        }
}
param4("en", "to", "tre", "fire", "fem");

//Oppgave 5
// Pilfunksjoner blir ikke hoistet. Vanelige funksjoner blir det.