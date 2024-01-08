let result = localStorage.getItem('result') || '';
let resultData = [];
let resultToString = 0;

function updateResult(value){
    result += value;
    x = result.length;
    displayResult();
    localStorage.setItem('result', result);
    const resultValue = value;
    resultData.push(resultValue);
    console.log(resultData);
    resultToString = resultData.join('');
}
function appendResultToArray(){
     resultData = [];
     let result2 = result.toString();
     resultData = result2.split('');
     console.log(resultData);
}
function topButton(){
    alert('This function is not yet added');
    location.reload();
}
function deleteButton(){
    resultData.splice(resultData.length-1, 1);
    result = resultData.join('');
    console.log(resultData);
    displayResult();
}
function displayResult(){
        document.querySelector('.result').innerHTML = result;
}


