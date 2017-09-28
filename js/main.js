var verses = [
  {
    text: "Watch over your heart with all diligence,For from it flow the springs of life.",
    findIn: "Proverbs 4:23"
  },
  {
    text: "Iron sharpens iron,So one man sharpens another.",
    findIn: "Proverbs 27:17"
  },
  {
    text: "A joyful heart is good medicine,But a broken spirit dries up the bones.",
    findIn: "Proverbs 17:22"
  },
  {
    text: "A gentle answer turns away wrath,But a harsh word stirs up anger.",
    findIn: "Proverbs 15:1"
  },
  {
    text: "Death and life are in the power of the tongue,And those who love it will eat its fruit.",
    findIn: "Proverbs 18:21"
  },
];

var verse = 0;

// var i = 0;
// while (var i <= 5){
//
// }
$("#button").on("click", function(){
  if (verse === 5){
    reset();
    newVerse();
  } else{
    newVerse();
    verse++;
  }
});

function newVerse(){
  $("#text").text(verses[verse].text);
  $("#findIn").text(verses[verse].findIn);
}

function reset(){
  verse = 0;
}
