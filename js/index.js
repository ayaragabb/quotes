var x = -2;

function qoute() {
  var quoteText = [
    "A room without books is like a body without a soul. ",
    "So many books, so little time. ",
    "If you tell the truth, you don't have to remember anything. ",
    "Be yourself; everyone else is already taken.",
    "A friend is someone who knows all about you and still loves you.",
  ];

  var quoteName = [
    "--Marcus Tullius Cicero",
    "--Frank Zappa",
    "--Mark Twain",
    "--Oscar Wilde",
    "Elbert Hubbard",
  ];

  var y;

  do {
    y = Math.floor(Math.random() * quoteName.length);
  } while (y === x);

  x = y;

  document.getElementById("text").innerHTML = quoteText[y];
  document.getElementById("name").innerHTML = quoteName[y];
}
