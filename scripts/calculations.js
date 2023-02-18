
let serial = 0;

//Result Show 
function showResult(value1, value2) {
    const resultShow = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="td-styles">${serial}<span>.</span></td>
        <td class="td-styles">${value1}</td>
        <td class="td-styles" >${value2} cm<sup>2</sup></td>
        <td class="td-styles"><button class="convert-btn">Convert to m<sup>2</sup></button></td>
      
    `;


    resultShow.appendChild(tr);

}


//Card-Title
function cardTitle(value) {
    const title = document.getElementById(value);
    const titleValue = title.innerText;
    return titleValue;
}


// Get Input value
function inputValue(value) {
    const inputValue = document.getElementById(value);
    const stringInputValue = inputValue.value;
    const numInputValue = parseFloat(stringInputValue);
    
    //Input Validation 
    if (numInputValue >= 0) {
        return numInputValue;
        
    }
    else {
        alert('Wrong Input. Please Input Only Positive Numbers.(N.B. Area can not be Negative)');
        return inputValue();
    }
    

}

//Area Calculation with 0.5
function areaForTriRhomPentagon(value1, value2) {
    const area = 0.5 * value1 * value2;
    if (Number.isInteger(area)) {
        return area;
      } 
      else {
        return area.toFixed(2);
      }
}
//Area Calculation
function areaForRectParallelo(value1, value2) {
    const area = value1 * value2;
    if (Number.isInteger(area)) {
      return area;
    } 
    else {
      return area.toFixed(2);
    }
}

//Area Calculation with 3.14
function areaForEllipse(value1, value2) {
    const area = 3.14 * value1 * value2;
    if (Number.isInteger(area)) {
        return area;
      } 
      else {
        return area.toFixed(2);
      }
}

//Triangle Area Calculation
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const bValue = inputValue('tri-b-value');
    const hValue = inputValue('tri-h-value');
    const calculatedArea = areaForTriRhomPentagon(bValue, hValue);
    const title = cardTitle('tri-card-title');
    showResult(title, calculatedArea);
    
})

//Rhombus Area Calculation
document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const d1Value = inputValue('rhom-d1-value');
    const d2Value = inputValue('rhom-d2-value');
    const calculatedArea = areaForTriRhomPentagon(d1Value, d2Value);
    const title = cardTitle('rhom-card-title');
    showResult(title, calculatedArea);


})

//Pentagon Area Calculation
document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const pValue = inputValue('penta-p-value');
    const bValue = inputValue('penta-b-value');
    const calculatedArea = areaForTriRhomPentagon(pValue, bValue);
    const title = cardTitle('penta-card-title');
    showResult(title, calculatedArea);


})
//Parallelogram Area Calculation
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const bValue = inputValue('parallelo-b-value');
    const hValue = inputValue('parallelo-h-value');
    const calculatedArea = areaForRectParallelo(bValue, hValue);
    const title = cardTitle('parallelo-card-title');
    showResult(title, calculatedArea);


})
//Rectangle Area Calculation
document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const wValue = inputValue('rectangle-w-value');
    const lValue = inputValue('rectangle-l-value');
    const calculatedArea = areaForRectParallelo(wValue, lValue);
    const title = cardTitle('rectangle-card-title');
    showResult(title, calculatedArea);


})
//Ellipse Area Calculation
document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    serial += 1;
    const aValue = inputValue('ellips-a-value');
    const bValue = inputValue('ellips-b-value');
    const calculatedArea = areaForEllipse(aValue, bValue);
    const title = cardTitle('ellips-card-title');
    showResult(title, calculatedArea);


})


//Random Background Color Generate
const geometryComponents = document.querySelectorAll('.geometry-component');

geometryComponents.forEach(geometryComponent => {
  geometryComponent.addEventListener('mouseenter', function() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    geometryComponent.style.backgroundColor = "#" + randomColor;
  });
});

  