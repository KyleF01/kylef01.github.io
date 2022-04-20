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
let idealDisabled = 'none'
let combDisabled = ''
// If there is no 4th or 3th isotope, let all extra fields equal 0

function undisableIdeal() {
  document.querySelector('#ideal_P').disabled = false
  document.querySelector('#ideal_V').disabled = false
  document.querySelector('#ideal_n').disabled = false
  document.querySelector('#ideal_T').disabled = false
}

function disableIdeal(i) {
  idealDisabled = i
  undisableIdeal();
  document.querySelector(`#${i}`).disabled = true
}

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

//  document.querySelector("#formula").textContent = `${percent1} ( ${weight1} ) + ${percent2} ( ${weight2} ) + ${percent3} ( ${weight3} ) + ${percent4} ( ${weight4} ) / 100 = `
//   document.querySelector("#amuCalculation").textContent = (((percent1*weight1)+(percent2*weight2)+(percent3*weight3)+(percent4*weight4))/100)+" AMU"

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
document.querySelector("#atomic").addEventListener("click", calculateMass)
document.querySelector("#atomic").addEventListener("keyup", calculateMass)
document.querySelector("#sciNot").addEventListener("click", calculateSciNot)
document.querySelector("#sciNot").addEventListener("keyup", calculateSciNot)

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

function calculateIdealGas() {
  let pres = document.querySelector("#ideal_P").value
  let temp = document.querySelector("#ideal_T").value
  let volume = document.querySelector("#ideal_V").value
  let mol = document.querySelector("#ideal_n").value
  if (idealDisabled == 'ideal_T') {
    let tmp1 = pres*volume
    let tmp2 = mol*0.0851
    document.querySelector("#idealReturn").textContent = `Temperature = ${tmp1/tmp2} K`
  }
  if (idealDisabled == 'ideal_P') {
    let tmp2 = mol*0.0851*temp
    document.querySelector("#idealReturn").textContent = `Pressure = ${tmp2/volume} ATM`
  }
  if (idealDisabled == 'ideal_n') {
    let tmp1 = pres*volume
    let tmp2 = temp*0.0851
    document.querySelector("#idealReturn").textContent = `Moles = ${tmp1/tmp2} mol`
  }
  if (idealDisabled == 'ideal_V') {
    let tmp2 = temp*0.0851*mol
    document.querySelector("#idealReturn").textContent = `Volume = ${tmp2/pres} L`
  }
  if (idealDisabled == 'none') {
    document.querySelector("#idealReturn").textContent = 'Oops! You need to select a value to find!'
  }
}

function calculateCombinedGas() {
  let pres1 = document.querySelector("#combP1").value
  let pres2 = document.querySelector("#combP2").value
  let vol1 = document.querySelector("#combV1").value
  let vol2 = document.querySelector("#combV2").value
  let temp1 = document.querySelector("#combT1").value
  let temp2 = document.querySelector("#combT2").value
  let returnValue;
  let returnUnits;
  if (calCombined[0] == 1) { // findOne
    let cal2 = (pres2*vol2)/temp2
  } else {
    if (calCombined[0] == 2) { // findTwo
      let cal1 = (pres1*vol1)/temp1
      if (calCombined[1] == 'temp') {
        let cal2 = pres2*vol2
      } else {
        if (calCombined[1] == 'pres') {
          let cal2; // todo
        } else {
          if (calCombined[1] == 'vol') {
            let cal2; //todo
          }
        } // Once done with these 3, add them to findOne as well
      }
    }
  }
  if (returnValue == undefined || isNaN(returnValue)) {
    document.querySelector("#combValReturn").textContent = 'Unable to calculate, make sure that you are not including any letters, and that you selected a value to find.'
  } else {
    document.querySelector("#combValReturn").textContent = `${returnValue} ${returnUnits}`
  }
}

function disableCombined(x) {
	document.querySelectorAll('.combined').forEach(i => {
  	i.disabled = false;
  })
  combDisabled = x.id.split('B')[0]
	document.getElementById(combDisabled).disabled = true;
}
