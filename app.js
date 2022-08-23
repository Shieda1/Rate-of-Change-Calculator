// https://calculator.swiftutors.com/rate-of-change-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const rateofChangeRadio = document.getElementById('rateofChangeRadio');
const x1Radio = document.getElementById('x1Radio');
const x2Radio = document.getElementById('x2Radio');
const y1Radio = document.getElementById('y1Radio');
const y2Radio = document.getElementById('y2Radio');

let rateofChange;
let x1 = v1;
let x2 = v2;
let y1 = v3;
let y2 = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

rateofChangeRadio.addEventListener('click', function() {
  variable1.textContent = 'x1';
  variable2.textContent = 'x2';
  variable3.textContent = 'y1';
  variable4.textContent = 'y2';
  x1 = v1;
  x2 = v2;
  y1 = v3;
  y2 = v4;
  result.textContent = '';
});

x1Radio.addEventListener('click', function() {
  variable1.textContent = 'Rate of Change';
  variable2.textContent = 'x2';
  variable3.textContent = 'y1';
  variable4.textContent = 'y2';
  rateofChange = v1;
  x2 = v2;
  y1 = v3;
  y2 = v4;
  result.textContent = '';
});

x2Radio.addEventListener('click', function() {
  variable1.textContent = 'Rate of Change';
  variable2.textContent = 'x1';
  variable3.textContent = 'y1';
  variable4.textContent = 'y2';
  rateofChange = v1;
  x1 = v2;
  y1 = v3;
  y2 = v4;
  result.textContent = '';
});

y1Radio.addEventListener('click', function() {
  variable1.textContent = 'Rate of Change';
  variable2.textContent = 'x1';
  variable3.textContent = 'x2';
  variable4.textContent = 'y2';
  rateofChange = v1;
  x1 = v2;
  x2 = v3;
  y2 = v4;
  result.textContent = '';
});

y2Radio.addEventListener('click', function() {
  variable1.textContent = 'Rate of Change';
  variable2.textContent = 'x1';
  variable3.textContent = 'x2';
  variable4.textContent = 'y1';
  rateofChange = v1;
  x1 = v2;
  x2 = v3;
  y1 = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(rateofChangeRadio.checked)
    result.textContent = `Rate of Change = ${computeRateofChange().toFixed(2)}`;

  else if(x1Radio.checked)
    result.textContent = `x1 = ${computex1().toFixed(2)}`;

  else if(x2Radio.checked)
    result.textContent = `x2 = ${computex2().toFixed(2)}`;

  else if(y1Radio.checked)
    result.textContent = `y1 = ${computey1().toFixed(2)}`;

  else if(y2Radio.checked)
    result.textContent = `y2 = ${computey2().toFixed(2)}`;
})

// calculation

function computeRateofChange() {
  return (Number(y2.value) - Number(y1.value)) / (Number(x2.value) - Number(x1.value));
}

function computex1() {
  return Number(x2.value) - ((Number(y2.value) - Number(y1.value)) / Number(rateofChange.value));
}

function computex2() {
  return ((Number(y2.value) - Number(y1.value)) / Number(rateofChange.value)) + Number(x1.value);
}

function computey1() {
  return Number(y2.value) - (Number(rateofChange.value) * (Number(x2.value) - Number(x2.value)));
}

function computey2() {
  return (Number(rateofChange.value) * (Number(x2.value) - Number(x2.value))) + Number(y1.value);
}