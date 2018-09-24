// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  $('body').append(`<section id='middle-earth'></section>`)
  for (let i = 0; i < lands.length; i++) {
    $('#middle-earth').append(`<article id='${lands[i]}'> <h1>${lands[i]}</h1></article>`) 
  }
};
// ============
// Chapter 2
// ============
const makeHobbits = () => {
  $('#The-Shire').append(`<ul id='hobbits'></ul>`)
  for (let i = 0 ; i < hobbits.length; i++) {
    $('#hobbits').append(`<li class='hobbit'>${hobbits[i]}</li>`)
  }
};
// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  $($('.hobbit').toArray()[0]).append('<div id="the-ring"></div>')
};
// ============
// Chapter 4
// ============
const makeBaddies = () => {
  $('#Mordor').append(`<ul id='baddies'></ul>`);
  for (let i = 0; i < baddies.length; i++) {
    $('#baddies').append(`<li class='baddy'>${baddies[i]}</li>`)
  }
};
// ============
// Chapter 5
// ============
const makeBuddies = () => {
  $('body').append(`<aside><ul id='buddies'></ul></aside>`);
  for (let i = 0; i < buddies.length; i++) {
    $('#buddies').append(`<li class='buddy'>${buddies[i]}</li>`)
  }
};
// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  $('#Rivendell').append($(`#hobbits`))
};
// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $($('.buddy').toArray()[3]).text('Aragorn');
};
// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  $('#middle-earth').append(`<div id='the-fellowship'><h1>The Fellowship</h1></div>`);
  $('#the-fellowship').append($('#hobbits'), $('#buddies'));
};
// ============
// Chapter 9
// ============
const theBalrog = () => {
  $($('.buddy').toArray()[0]).replaceWith(`<li class='the-white'>Gandalf the White</li>`);
};
// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  alert('THE HORN OF GONDOR HAS BEEN BLOWN');
  $($('.buddy').toArray()[3]).css("text-decoration", "line-through");
  $('.baddy').remove(':contains("Uruk")')
};
// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  $('#Mordor').append($($('.hobbit').toArray()[0]));
  $('#Mordor').append($($('.hobbit').toArray()[1]));
  $('#Mordor').append('<div id="mount-doom"><h3>Mount Doom</h3></div>');
};
// ============
// Chapter 12
// ============
const weWantsIt = () => {
  $('#Mordor').append('<div id="gollum">Gollum</div>')
  $('#gollum').append($("#the-ring"));
  $('#mount-doom').append($('#gollum'));
};
// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  $('#gollum').remove();
  $('.baddy').remove();
  console.log($('.hobbit'))
  $('#hobbits').append($('.hobbit').toArray()[1]);
  $('#hobbits').append($('.hobbit').toArray()[0]);
  $('#The-Shire').append($(`#hobbits`))

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
