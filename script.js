// Do not edit the below code
const stringResult = document.getElementById('string-result');
const numberResult = document.getElementById('number-result');
const booleanResult = document.getElementById('boolean-result');
const nullResult = document.getElementById('null-result');
const undefinedResult = document.getElementById('undefined-result');
const check = document.getElementById('check');

var stringData;
stringData ="Jahnavesh"

var numbersData;
numbersData =18

var booleanData;
booleanData =true

var nullData;
nullData =null 

var undefinedData;

check.onclick = () => {
  if (typeof stringData === 'string') {
    stringResult.innerHTML = 'Completed';
  }
  if (typeof numbersData === 'number') {
    numberResult.innerHTML = 'Completed';
  }
  if (typeof booleanData === 'boolean') {
    booleanResult.innerHTML = 'Completed';
  }
  if (typeof nullData === 'object') {
    nullResult.innerHTML = 'Completed';
  }
  if (typeof undefinedData === 'undefined') {
    undefinedResult.innerHTML = 'Completed';
  }
};

