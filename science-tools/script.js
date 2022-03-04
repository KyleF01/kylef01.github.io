let percent1 = 95
let percent2 = 0.76
let percent3 = 3.22
let percent4 = 0.89
let weight1 = 32
let weight2 = 33
let weight3 = 34
let weight4 = 36
let arrayNumber = [1,2,3,4]
let mathErrorFix = 10000000000000
// If there is no 4th or 3th isotope, let all extra fields equal 0
function updateValues() {
  percent1 = document.querySelector("#per1").value.replace('%', '')
  percent2 = document.querySelector("#per2").value.replace('%', '')
  percent3 = document.querySelector("#per3").value.replace('%', '')
  percent4 = document.querySelector("#per4").value.replace('%', '')
  weight1 = document.querySelector("#iso1").value
  weight2 = document.querySelector("#iso2").value
  weight3 = document.querySelector("#iso3").value
  weight4 = document.querySelector("#iso4").value
 document.querySelector("#formula").textContent = `${percent1} ( ${weight1} ) + ${percent2} ( ${weight2} ) + ${percent3} ( ${weight3} ) + ${percent4} ( ${weight4} ) / 100 = `
  document.querySelector("#amuCalculation").textContent = (((percent1*weight1)+(percent2*weight2)+(percent3*weight3)+(percent4*weight4))/100)+" AMU"
}

 document.querySelector("#formula").textContent = `${percent1} ( ${weight1} ) + ${percent2} ( ${weight2} ) + ${percent3} ( ${weight3} ) + ${percent4} ( ${weight4} ) / 100 = `
  document.querySelector("#amuCalculation").textContent = (((percent1*weight1)+(percent2*weight2)+(percent3*weight3)+(percent4*weight4))/100)+" AMU"

function calculateMass() {
  x = document.querySelector("#value").selectedIndex
  y = document.querySelector("#metricValue").value
  z = document.querySelector("#returnValue").selectedIndex
  if (x == 0) {
    y *= 1000
  }
  if (x == 1) {
    y /= 10
  }
  if (x == 2) {
    y /= 100
  }
  if (x == 3) {
    y /= 1000
  }
  if (z == 0) {
    y /= 1000
  }
  if (z == 1) {
    y *= 10
  }
  if (z == 2) {
    y *= 100
  }
  if (z == 3) {
    y *= 1000
  }
  w = document.querySelector("#valueName")
  document.querySelector("#metricReturnValue").value = y
  document.querySelector("#returnValueIdentity").textContent = w.options[w.selectedIndex].textContent
}
document.querySelector("html").addEventListener("click", calculateMass)
document.querySelector("html").addEventListener("keyup", calculateMass)
document.querySelector("html").addEventListener("click", calculateSciNot)
document.querySelector("html").addEventListener("keyup", calculateSciNot)
calculateMass()

function calculateSciNot() {
  sci = document.querySelector("#fromSci1").value
  sci2 = document.querySelector("#fromSci2")
  dec = document.querySelector("#fromDec1").value
  dec2 = document.querySelector("#fromDec2")
  if (sci != "") {
    sci = sci.split(/[x^*X]/g)
    sci2.value = (Math.round((sci[0]*(sci[1]**sci[2]))*mathErrorFix)/mathErrorFix).toFixed()
    if (isNaN(sci2.value)) {
      sci2.value = "Cannot Calculate"
    }
  }
  if (dec != "") {
    dec3 = Math.floor(dec).toString().length
    dec2.value = `${Math.round((dec/(10**(--dec3)))*mathErrorFix)/mathErrorFix} * 10^${dec3}`
  }
}
calculateSciNot()

function calculateIdealGas(pres,volume,mol,temp,calculate) {
  if (calculate == 'temp') {
    let tmp1 = pres*volume
    let tmp2 = mol*0.0851
    return(tmp1/tmp2)
  }
  if (calculate == 'pres') {
    let tmp2 - mol*0.0851*temp
    return(tmp2/volume)
  }
  if (calculate == 'mol') {
    let tmp1 = pres*volume
    let tmp2 = temp*0.0851
    return(tmp1/tmp2)
  }
  if (calculate == 'volume') {
    let tmp2 = temp*0.0851*mol
    return(tmp2/pres)
  }
}
