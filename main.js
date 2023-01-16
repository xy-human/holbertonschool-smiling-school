document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-links');
  let menuOpen = false;
  if (menuBtn == null) {
    console.log(document)
  }

});

$.setToMedium = function () {
  nextSlide = $('<div>').attr('class', 'carousel-item');
  firstSlide = document.getElementById('caro1First');

  nextCardHolder = $('<div>').attr('class', 'cards-wrapper');
  card3 = document.getElementById('card3');
  card4 = document.getElementById('card4');
  nextCardHolder.append(card3, card4);
  nextSlide.append(nextCardHolder);
  $(nextSlide).attr('id', 'caro1Second');

  carousel = $(firstSlide).parent();
  carousel.append(nextSlide);
}

$.setToSmall = function () {
  firstSlide = document.getElementById('caro1First');
  firstCardHolder = $(document.getElementById('card1')).parent();
  secondSlide = document.getElementById('caro1Second');
  secondCardHolder = $(document.getElementById('card3')).parent();

  card1 = document.getElementById('card1');
  card2 = document.getElementById('card2');
  card3 = document.getElementById('card3');
  card4 = document.getElementById('card4');

  thirdSlide = $('<div>').attr('class', 'carousel-item');
  thirdCardHolder = $('<div>').attr('class', 'cards-wrapper');
  fourthSlide = $('<div>').attr('class', 'carousel-item');
  fourthCardHolder = $('<div>').attr('class', 'cards-wrapper');

  thirdCardHolder.append(card2);
  thirdSlide.append(thirdCardHolder);

  fourthCardHolder.append(card4);
  fourthSlide.append(fourthCardHolder);

  carousel = $(firstSlide).parent();
  carousel.append(thirdSlide, fourthSlide);
}

$.setToLarge = function () {
  $(document.getElementById('caro1Inner')).html($largeCaro);
}

$.setToMedium2 = function () {
  nextSlide = $('<div>').attr('class', 'carousel-item');
  firstSlide = document.getElementById('caro2First');
  console.log(firstSlide)

  nextCardHolder = $('<div>').attr('class', 'cards-wrapper');
  card3 = document.getElementById('card30');
  card4 = document.getElementById('card40');
  nextCardHolder.append(card3, card4);
  nextSlide.append(nextCardHolder);
  $(nextSlide).attr('id', 'caro2Second');

  carousel = $(firstSlide).parent();
  carousel.append(nextSlide);
}

$.setToSmall2 = function () {
  firstSlide = document.getElementById('caro2First');
  firstCardHolder = $(document.getElementById('card10')).parent();
  secondSlide = document.getElementById('caro2Second');
  secondCardHolder = $(document.getElementById('card30')).parent();

  card1 = document.getElementById('card10');
  card2 = document.getElementById('card20');
  card3 = document.getElementById('card30');
  card4 = document.getElementById('card40');

  thirdSlide = $('<div>').attr('class', 'carousel-item');
  thirdCardHolder = $('<div>').attr('class', 'cards-wrapper');
  fourthSlide = $('<div>').attr('class', 'carousel-item');
  fourthCardHolder = $('<div>').attr('class', 'cards-wrapper');

  thirdCardHolder.append(card2);
  thirdSlide.append(thirdCardHolder);

  fourthCardHolder.append(card4);
  fourthSlide.append(fourthCardHolder);

  carousel = $(firstSlide).parent();
  carousel.append(thirdSlide, fourthSlide);
}

$.setToLarge2 = function () {
  $(document.getElementById('caro2Inner')).html($largeCaro2);
  console.log('settoLarge')
}


$largeCaro = $(document.getElementById('caro1First')).parent().html();
$largeCaro2 = $(document.getElementById('caro2First')).parent().html();;
$smallCaro = '';
$oldScreen = '';



setInterval(() => {
  const screen = getComputedStyle(document.body).getPropertyValue('--screen').replace(/\W/g, '');
  console.log(screen);
  if ($oldScreen == screen) {

  } else {
    if (screen == 'large') {
      $.setToLarge();
      $.setToLarge2();
    } else if (screen == 'medium') {
      $.setToLarge()
      $.setToLarge2();
      $.setToMedium();
      $.setToMedium2();
      $mediumCaro = $(document.getElementById('caro1Inner')).html();
    } else {
      $.setToLarge()
      $.setToLarge2();
      $.setToMedium();
      $.setToMedium2();
      $.setToSmall();
      $.setToSmall2();
    }
  }
  $oldScreen = screen;
}, 1000);

