$(document).ready(function () {
  var currentFloor = 2;// переменная текущего этажа
  var counterUp =$(".counter-up")/* кнопка увеличения этажа*/
  var counterDown =$(".counter-down")/* кнопка уменьшения этажа*/
  var floorPath=$(".home-image path")
  //функция при наведении мышкой на этаж
  floorPath.on("mouseover",function(){
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor =$(this).attr("data-floor");// получаем значение текущего этажа
    $(".counter").text(currentFloor);// записываем значение этажа в счетчик справа
  })
  
  counterUp.on("click", function() {// отслеживаем клик по кнопке ввверх
    if (currentFloor<18){ //проверяем значение этажа, оно не должно быть больше18
      currentFloor++;// прибавляем один этаж
    usCurrentFloor =currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false})//форматирум переменную с этажом, чтобы было 01 а не 1
    $(".counter").text(usCurrentFloor)//записываем значение этажа в счетчик справа
    floorPath.removeClass("current-floor");// удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем этаж
    } 
  })
  counterDown.on("click",function(){// отслеживаем клик по кнопке вниз
    if (currentFloor>2){//проверяем значение этажа, оно не должго быть меньше 2
      currentFloor--;// отнимаем один этаж
      usCurrentFloor =currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2,useGrouping: false})//форматирум переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor)
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
     
    }
  })
});/* проверка готовности работы*/