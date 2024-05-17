#!/usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"



class player1 {
    name: string;
    fule : number = 100;
    constructor (name : string) {
        this.name = name; 
    }
    fuelDecrease(){
        this.fule = this.fule - 25
        this.fule = this.fule
    }
    fuelIncrease(){
        this.fule = 100
    }
}

class player2  {
    name: string;
    fule : number = 100;
    constructor (name : string) {
        this.name = name; 
    }
    fuelDecrease(){
        this.fule = this.fule - 25
        this.fule = this.fule
    }
    
}

let askName;
while(true){
 askName = await inquirer.prompt ([{
     name : "name",
    type : "input",
    message : chalk.yellowBright("Enter your name : ")
}])
if (askName.name.length === 0) {
    console.log("Plz enter your name first.")
   
}else{break;}

}

let nameInUpperCase = askName.name.toUpperCase();
console.log(chalk.bold.hex('#967bb6')(`\t\t Welcome ${nameInUpperCase}`))
console.log(chalk.hex('#008080')(`${nameInUpperCase} plz select your opponent to play game `))

//give option gor opponent
let selectopponent = await inquirer.prompt([{
    name : "opponent",
    type:"list",
    message : chalk.yellowBright("Select your opponent: "),
    choices : ["skull ", "zombie ", "ninja "]
}])

let p1 = new player1(askName.name)
console.log(p1);
let o1 = new player2(selectopponent.opponent)
console.log(o1);


do{
    //skull
if(selectopponent.opponent == "skull "){
    console.log(`\t\t\t\t\t\t${chalk.bold.red(nameInUpperCase)} VS ${chalk.bold.red(selectopponent.opponent )}`)


let selectAction = await inquirer.prompt([{
    name : "action",
    type:"list",
    message : chalk.yellowBright("choose your action : "),
    choices : ["Attack", "Increase fule", "Run for  life.."]

}])
if(selectAction.action == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if (num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(p1.fule <= 0){
            console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
            break
        }
    }  if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(o1.fule <= 0){
            console.log(chalk.hex('#FF1493').bold.italic("You Win "))
            break
        }
   
    }
}


 if(selectAction.action == "Increase fule"){
    p1.fuelIncrease()
    console.log(chalk.bold.hex('#FF7F50')(`Now your fule is increase : ${p1.fule}`))
   
}
 if(selectAction.action == "Run for  life.."){
    console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
   break;
}
}
//zombie
if(selectopponent.opponent == "zombie "){
    console.log(`\t\t\t\t\t\t${chalk.bold.red(nameInUpperCase)} VS ${chalk.bold.red(selectopponent.opponent)}`)


let selectAction = await inquirer.prompt([{
    name : "action",
    type:"list",
    message : chalk.yellowBright("choose your action : "),
    choices : ["Attack", "Increase fule", "Run for  life.."]

}])
if(selectAction.action == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if (num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(p1.fule <= 0){
            console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
            break
        }
    }  if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(o1.fule <= 0){
            console.log(chalk.hex('#FF1493').bold.italic("You Win "))
            break
        }
   
    }
}


 if(selectAction.action == "Increase fule"){
    p1.fuelIncrease()
    console.log(chalk.bold.hex('#FF7F50')(`Now your fule is increase : ${p1.fule}`))
   
}
 if(selectAction.action == "Run for  life.."){
    console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
   break;
}
}
//ninja
if(selectopponent.opponent == "ninja " ){
    console.log(`\t\t\t\t\t\t${chalk.bold.red(nameInUpperCase)} VS ${chalk.bold.red(selectopponent.opponent)}`)


let selectAction = await inquirer.prompt([{
    name : "action",
    type:"list",
    message : chalk.yellowBright("choose your action : "),
    choices : ["Attack", "Increase fule", "Run for  life.."]

}])
if(selectAction.action == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if (num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(p1.fule <= 0){
            console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
            break
        }
    }  if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.rgb(255, 69, 0)(`${p1.name} fuel is ${p1.fule}`))
        console.log(chalk.bold.hex('#00CED1')(`${o1.name} fuel is ${o1.fule}`))
        if(o1.fule <= 0){
            console.log(chalk.hex('#FF1493').bold.italic("You Win "))
            break
        }
   
    }
}


 if(selectAction.action == "Increase fule"){
    p1.fuelIncrease()
    console.log(chalk.bold.hex('#FF7F50')(`Now your fule is increase : ${p1.fule}`))
   
}
 if(selectAction.action == "Run for  life.."){
    console.log(chalk.red.bold.italic("You loose better Luck Next Time "))
   break;
}
}

}
while(true)