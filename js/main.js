$(document).ready(function () {
  var currentFloor = 2;// переменная текущего этажа
  var currentFlat=1;
  var counterUp =$(".counter-up");/* кнопка увеличения этажа*/
  var counterDown =$(".counter-down");/* кнопка уменьшения этажа*/
  var floorPath=$(".home-image path");
  var modal= $(".modal");
  var modalCloseButton=$(".modal-close-button");
  var veiwFlatsButton= $(".view-flats");
  var flatsPath=$(".flats path")
  
  //функция при наведении мышкой на этаж
  floorPath.on("mouseover",function(){
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor =$(this).attr("data-floor");// получаем значение текущего этажа
    $(".counter").text(currentFloor);// записываем значение этажа в счетчик справа
  })
  flatsPath.on("mouseover",function(){
    flatsPath.removeClass("flat1");
    currentFlat=$(this).attr("data-flats");
    $(`[data-flats=${currentFlat}]`).toggleClass("flat1");
    $(`[num-flats=${currentFlat}]`).toggleClass("flat1");
  })
  floorPath.on("click",toggleModal);/* при клике на этаж, вызвать окно*/

  modalCloseButton.on("click",toggleModal)  /*при клике на кнопку закрыть убирает окно*/

  veiwFlatsButton.on("click",toggleModal)
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
  });
  function toggleModal(){ // функция открыть-закрыть
    modal.toggleClass("is-open");
  }
});/* проверка готовности работы*/