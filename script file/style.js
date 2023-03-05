document.getElementById('button-tag-1').addEventListener('click', function () {
    const triangle1 = document.getElementById('input-1');
    const triangleString1 = triangle1.value;
    const triangleAnswer1 = parseInt(triangleString1);
    triangle1.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer1)) {
        alert('please Enter Number.')
        return;
    };
    const triangleH = document.getElementById('triangleH');
    triangleH.innerText = triangleAnswer1;

    const input1 = document.getElementById('input-2');
    const inputString1 = input1.value;
    const inputAnswer1 = parseInt(inputString1);
    input1.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer1)) {
        alert('please Enter the Number.')
        return;
    };
    const triangleB= document.getElementById('triangleB');
    triangleB.innerText = inputAnswer1;

    const triangleAnswerTotal1 = document.getElementById('triangle-answer1');
    const triangleTotalString = triangleAnswerTotal1.innerText;
    // console.log(triangleTotalString);

    const totalAnswer1 = triangleAnswer1 * inputAnswer1 * 0.5;
    triangleAnswerTotal1.innerText = totalAnswer1;


});
document.getElementById('card1').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.getElementById('card1').style.backgroundColor = randomCode;
});

document.getElementById('button-tag-2').addEventListener('click', function () {
    const triangle2 = document.getElementById('input-3');
    const triangleString2 = triangle2.value;
    const triangleAnswer2 = parseInt(triangleString2);
    triangle2.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer2)) {
        alert('please Enter Number.');
        return;
    };
    const ractangleW = document.getElementById('ractangleW');
    ractangleW.innerText = triangleAnswer2;

    const input2 = document.getElementById('input-4');
    const inputString2 = input2.value;
    const inputAnswer2 = parseInt(inputString2);
    input2.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer2)) {
        alert('please Enter the Number.');
        return;
    };
    const ractangleI = document.getElementById('ractangleI');
    ractangleI.innerText = inputAnswer2;

    const triangleAnswerTotal2 = document.getElementById('triangle-answer2');
    const triangleTotalString2 = triangleAnswerTotal2.innerText;
    // console.log(triangleTotalString);

    const totalAnswer2 = triangleAnswer2 * inputAnswer2;
    // console.log(totalAnswer1);
    triangleAnswerTotal2.innerText = totalAnswer2;

});
document.getElementById('card2').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.getElementById('card2').style.backgroundColor = randomCode;
});

document.getElementById('button-tag-3').addEventListener('click', function () {
    const triangle3 = document.getElementById('input-5');
    const triangleString3 = triangle3.value;
    const triangleAnswer3 = parseInt(triangleString3);
    triangle3.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer3)) {
        alert('please Enter Number.')
        return;
    };
    const parallelogramB = document.getElementById('parallelogramB');
    parallelogramB.innerText = triangleAnswer3;

    const input3 = document.getElementById('input-6');
    const inputString3 = input3.value;
    const inputAnswer3 = parseInt(inputString3);
    input3.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer3)) {
        alert('please Enter the Number.')
        return;
    };
    const parallelogramH = document.getElementById('parallelogramH');
    parallelogramH.innerText = inputAnswer3;

    const triangleAnswerTotal3 = document.getElementById('triangle-answer3');
    const triangleTotalString3 = triangleAnswerTotal3.innerText;
    // console.log(triangleTotalString);

    const totalAnswer3 = triangleAnswer3 * inputAnswer3;
    // console.log(totalAnswer1);
    triangleAnswerTotal3.innerText = totalAnswer3;

});
document.getElementById('card3').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.getElementById('card3').style.backgroundColor = randomCode;
});

document.getElementById('button-tag-4').addEventListener('click', function () {
    const triangle4 = document.getElementById('input-7');
    const triangleString4 = triangle4.value;
    const triangleAnswer4 = parseInt(triangleString4);
    triangle4.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer4)) {
        alert('please Enter Number.')
        return;
    };
    const rhombusD1 = document.getElementById('rhombusD1');
    rhombusD1.innerText = triangleAnswer4;

    const input4 = document.getElementById('input-8');
    const inputString4 = input4.value;
    const inputAnswer4 = parseInt(inputString4);
    input4.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer4)) {
        alert('please Enter the Number.')
        return;
    };
    const rhombusD2 = document.getElementById('rhombusD2');
    rhombusD2.innerText = inputAnswer4;

    const triangleAnswerTotal4 = document.getElementById('triangle-answer4');
    const triangleTotalString4 = triangleAnswerTotal4.innerText;
    // console.log(triangleTotalString);

    const totalAnswer4 = triangleAnswer4 * inputAnswer4 * 0.5;
    // console.log(totalAnswer1);
    triangleAnswerTotal4.innerText = totalAnswer4;

});
document.getElementById('card4').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.getElementById('card4').style.backgroundColor = randomCode;
});

document.getElementById('button-tag-5').addEventListener('click', function () {
    const triangle5 = document.getElementById('input-9');
    const triangleString5 = triangle5.value;
    const triangleAnswer5 = parseInt(triangleString5);
    triangle5.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer5)) {
        alert('please Enter Number.')
        return;
    };
    const pentagonP = document.getElementById('pentagonP');
    pentagonP.innerText = triangleAnswer5;

    const input5 = document.getElementById('input-10');
    const inputString5 = input5.value;
    const inputAnswer5 = parseInt(inputString5);
    input5.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer5)) {
        alert('please Enter the Number.')
        return;
    };
    const pantagonB = document.getElementById('pantagonB');
    pantagonB.innerText = inputAnswer5;

    const triangleAnswerTotal5 = document.getElementById('triangle-answer5');
    const triangleTotalString = triangleAnswerTotal5.innerText;
    // console.log(triangleTotalString);

    const totalAnswer5 = triangleAnswer5 * inputAnswer5 * 0.5;
    // console.log(totalAnswer1);
    triangleAnswerTotal5.innerText = totalAnswer5;

});
document.getElementById('card5').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomCode);
    document.getElementById('card5').style.backgroundColor = randomCode;
});

document.getElementById('button-tag-6').addEventListener('click', function () {
    const triangle6 = document.getElementById('input-11');
    const triangleString6 = triangle6.value;
    const triangleAnswer6 = parseInt(triangleString6);
    triangle6.value = '';
    // console.log(triangleAnswer);
    if (isNaN(triangleAnswer6)) {
        alert('please Enter Number.')
        return;
    };
    const ellipsisA = document.getElementById('ellipsisA');
    ellipsisA.innerText = triangleAnswer6;

    const input6 = document.getElementById('input-12');
    const inputString6 = input6.value;
    const inputAnswer6 = parseInt(inputString6);
    input6.value = '';
    // console.log(inputAnswer);
    if (isNaN(inputAnswer6)) {
        alert('please Enter the Number.')
        return;
    };
    const ellipsisB = document.getElementById('ellipsisB');
    ellipsisB.innerText = inputAnswer6;

    const triangleAnswerTotal6 = document.getElementById('triangle-answer6');
    const triangleTotalString6 = triangleAnswerTotal6.innerText;
    // console.log(triangleTotalString);

    const totalAnswer6 = triangleAnswer6 * inputAnswer6 * 3.1416;
    // console.log(totalAnswer1);
    triangleAnswerTotal6.innerText = totalAnswer6;

});
document.getElementById('card6').addEventListener('mouseover', function getColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.getElementById('card6').style.backgroundColor = randomCode;
});