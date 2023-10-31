
const inputEl = document.getElementById("input-el" )

const meterFeet = document.getElementById("mf")
const litersGallon = document.getElementById("lg")
const kiloPounds = document.getElementById("kp")
const btnEl = document.getElementById("btn-el")



btnEl.addEventListener("click", function (){
  let feet = inputEl.value * 3.281
let meter = inputEl.value / 3.281
let liters = inputEl.value / 0.264
    let gallon = inputEl.value * 0.264
    let pounds = inputEl.value * 2.204
    let Kilo = inputEl.value / 2.204
    meterFeet.innerHTML = `
    <h3>Length (Meter/Feet)</h3>
    <p>${inputEl.value} meters = ${feet.toFixed(2)} feet | ${inputEl.value} feet = ${meter.toFixed(2)} meters </P> `

    litersGallon.innerHTML = `
    <h3>Volume (Liter/Gallons)</h3>
    <p>${inputEl.value} liters = ${gallon.toFixed(2)} gallons | ${inputEl.value} gallons = ${liters.toFixed(2)} liters </P`

    kiloPounds.innerHTML = `
    <h3>Mass (Kilograms/Pounds)</h3>
    <p>${inputEl.value} kilos = ${pounds.toFixed(2)} pounds | ${inputEl.value} pounds = ${Kilo.toFixed(2)} Kilos</P>`

    let valueMeterFeet = meterFeet.innerHTML
    let valueLiterGallon = litersGallon.innerHTML
    let valueKiloPound = kiloPounds.innerHTML

    return
     valueMeterFeet
     valueLiterGallon
     valueKiloPound

}


)