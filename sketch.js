let settingsButton;
let snakeGameButton;
let typingGameButton;

function setup() {
  noCanvas();

  let title = createElement("h2", "GUI");
  title.id("myTitle");

  snakeGameButton = createButton("Snake Game!");
  snakeGameButton.id("myButton");
  snakeGameButton.class('snake');
  snakeGameButton.mousePressed(() => {
    snakeGameButton.style("background-color", "green");
    window.location.href = "snakeGame/snakeGame.html";
  });

  typingGameButton = createButton("Typing Game!");
  typingGameButton.id("myButton");
  typingGameButton.class('typing');
  typingGameButton.mousePressed(() => {
    typingGameButton.style("background-color", "green");
    window.location.href = "typingGame/typingGame.html";
  });

  settingsButton = createButton("Settings");
  settingsButton.id("myButton");
  settingsButton.class('settings');
  settingsButton.mousePressed(() => {
    settingsButton.style("background-color", "green");
    window.location.href = "settings/index.html";
  });
}