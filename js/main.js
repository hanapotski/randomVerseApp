var verse = 0;

var verses = [
  {
    text: "Watch over your heart with all diligence, For from it flow the springs of life.",
    findIn: "Proverbs 4:23"
  },
  {
    text: "Iron sharpens iron, So one man sharpens another.",
    findIn: "Proverbs 27:17"
  },
  {
    text: "A joyful heart is good medicine, But a broken spirit dries up the bones.",
    findIn: "Proverbs 17:22"
  },
  {
    text: "A gentle answer turns away wrath, But a harsh word stirs up anger.",
    findIn: "Proverbs 15:1"
  },
  {
    text: "Death and life are in the power of the tongue, And those who love it will eat its fruit.",
    findIn: "Proverbs 18:21"
  },
  {
    text: "He who despises his neighbor lacks sense, But a man of understanding keeps silent.",
    findIn: "Proverbs 11:12"
  },
  {
    text: "A good name is to be more desired than great wealth, Favor is better than silver and gold.",
    findIn: "Proverbs 22:1"
  },
  {
    text: "He who walks with wise men will be wise, But the companion of fools will suffer harm.",
    findIn: "Proverbs 13:20"
  },
  {
    text: "The mouth of the righteous is a fountain of life, But the mouth of the wicked conceals violence.",
    findIn: "Proverbs 10:11"
  },
  {
    text: "He who digs a pit will fall into it, And he who rolls a stone, it will come back on him.",
    findIn: "Proverbs 26:27"
  },
];

$(document).ready(function(){
// start with a new verse
newVerse();

// generate a new verse with every button click
$("#button").on("click", function(){
  if (verse === 9){
    reset();
    newVerse();
  } else {
    newVerse();
  }
});

// generate new verse
function newVerse(){
  $("#text").html(verses[verse].text);
  $("#findIn").html(verses[verse].findIn);
  $("#text").addClass("animated fadeIn");
  $("#findIn").addClass("animated fadeIn");
    setTimeout(function(){
      $("#text").removeClass("animated fadeIn");
      $("#findIn").removeClass("animated fadeIn");
    }, 500);

  verse++;
}

// reset counter
function reset(){
    verse = 0;
  }
});

// Tweet button event handler
  $("#tweetButton").click(function() {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + verses[verse-1].text + " " + verses[verse-1].findIn);
  });
