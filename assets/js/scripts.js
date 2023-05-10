var switchGrados = document.getElementById('grados');

switchGrados.addEventListener('click', function () {
  var contenedor = document.getElementsByClassName('contenedor');
  if (switchGrados.checked) {
    contenedor[0].style.width = "22rem";
    var p1 = document.getElementById('p1').innerHTML;
    var partes = p1.split('°');
    var num1 = parseInt(partes[0]);
    var num1Fare = (9 / 5 * num1) + 32;
    document.getElementById('p1').innerHTML = num1Fare.toFixed(1) + '°F';
    //2
    var p2 = document.getElementById('p2').innerHTML;
    var partes2 = p2.split('°');
    var num2 = parseInt(partes2[0]);
    var num2Fare = (9 / 5 * num2) + 32;
    document.getElementById('p2').innerHTML = num2Fare.toFixed(1) + '°';
    //3
    var p3 = document.getElementById('p3').innerHTML;
    var partes3 = p3.split('°');
    var num3 = parseInt(partes3[0]);
    var num3Fare = (9 / 5 * num3) + 32;
    document.getElementById('p3').innerHTML = num3Fare.toFixed(1) + '°';
    //4
    var p4 = document.getElementById('p4').innerHTML;
    var partes4 = p4.split('°');
    var num4 = parseInt(partes4[0]);
    var num4Fare = (9 / 5 * num4) + 32;
    document.getElementById('p4').innerHTML = num4Fare.toFixed(1) + '°';
    //5
    var p5 = document.getElementById('p5').innerHTML;
    var partes5 = p5.split('°');
    var num5 = parseInt(partes5[0]);
    var num5Fare = (9 / 5 * num5) + 32;
    document.getElementById('p5').innerHTML = num5Fare.toFixed(1) + '°';
    //6
    var p6 = document.getElementById('p6').innerHTML;
    var partes6 = p6.split('°');
    var num6 = parseInt(partes6[0]);
    var num6Fare = (9 / 5 * num6) + 32;
    document.getElementById('p6').innerHTML = num6Fare.toFixed(1) + '°';
    //7
    var p7 = document.getElementById('p7').innerHTML;
    var partes7 = p7.split('°');
    var num7 = parseInt(partes7[0]);
    var num7Fare = (9 / 5 * num7) + 32;
    document.getElementById('p7').innerHTML = num7Fare.toFixed(1) + '°';
    //8
    var p8 = document.getElementById('p8').innerHTML;
    var partes8 = p8.split('°');
    var num8 = parseInt(partes8[0]);
    var num8Fare = (9 / 5 * num8) + 32;
    document.getElementById('p8').innerHTML = num8Fare.toFixed(1) + '°';
  }
  if (!switchGrados.checked) {
    contenedor[0].style.width = "20rem";
    var p1 = document.getElementById('p1').innerHTML;
    var partes = p1.split('°');
    var num1 = parseInt(partes[0]);
    var num1Cel = (num1 - 32) * (5 / 9);
    num1Cel = Math.round(num1Cel);
    document.getElementById('p1').innerHTML = num1Cel + '°C';
    //2
    var p2 = document.getElementById('p2').innerHTML;
    var partes2 = p2.split('°');
    var num2 = parseInt(partes2[0]);
    var num2Cel = (num2 - 32) * (5 / 9);
    num2Cel = Math.round(num2Cel);
    document.getElementById('p2').innerHTML = num2Cel + '°';
    //3
    var p3 = document.getElementById('p3').innerHTML;
    var partes3 = p3.split('°');
    var num3 = parseInt(partes3[0]);
    var num3Cel = (num3 - 32) * (5 / 9);
    num3Cel = Math.round(num3Cel);
    document.getElementById('p3').innerHTML = num3Cel + '°';
    //4
    var p4 = document.getElementById('p4').innerHTML;
    var partes4 = p4.split('°');
    var num4 = parseInt(partes4[0]);
    var num4Cel = (num4 - 32) * (5 / 9);
    num4Cel = Math.round(num4Cel);
    document.getElementById('p4').innerHTML = num4Cel + '°';
    //5
    var p5 = document.getElementById('p5').innerHTML;
    var partes5 = p5.split('°');
    var num5 = parseInt(partes5[0]);
    var num5Cel = (num5 - 32) * (5 / 9);
    num5Cel = Math.round(num5Cel);
    document.getElementById('p5').innerHTML = num5Cel + '°';
    //6
    var p6 = document.getElementById('p6').innerHTML;
    var partes6 = p6.split('°');
    var num6 = parseInt(partes6[0]);
    var num6Cel = (num6 - 32) * (5 / 9);
    num6Cel = Math.round(num6Cel);
    document.getElementById('p6').innerHTML = num6Cel + '°';
    //7
    var p7 = document.getElementById('p7').innerHTML;
    var partes7 = p7.split('°');
    var num7 = parseInt(partes7[0]);
    var num7Cel = (num7 - 32) * (5 / 9);
    num7Cel = Math.round(num7Cel);
    document.getElementById('p7').innerHTML = num7Cel + '°';
    //8
    var p8 = document.getElementById('p8').innerHTML;
    var partes8 = p8.split('°');
    var num8 = parseInt(partes8[0]);
    var num8Cel = (num8 - 32) * (5 / 9);
    num8Cel = Math.round(num8Cel);
    document.getElementById('p8').innerHTML = num8Cel + '°';
  }
});