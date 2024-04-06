import "./App.css";
import Api from "./Pokeapi.js";

function App() {
  return (
    <div className="App">
      <header>
        <img src="img/pokeflex logo.png" alt="Pokeflex Logo" class="logo" />
      </header>
      <div id="gameContainer">
        <div class="player" id="player1">
          <img src="img/ethan.png" alt="Player 1 Profile Picture" />
          <p>Player 1</p>
          <div class="heartcontainer">
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
          </div>
          <p>W/L</p>
          <p>W: 9</p>
          <p>L: 3</p>
        </div>
        <div class="pokemon">
        <Api />
          <hr />
          <div class="answer_input_container">
            <div class="input_label">
              <p class="instruction_game">
                ENTER A
                <span>
                  <img
                    class="type_png"
                    src=""
                    alt="First element"
                  />
                </span>
                OR
                <span>
                  <img
                    class="type_png"
                    src=""
                    alt="2nd element"
                  />
                </span>
                TYPE POKEMON
              </p>
            </div>
            <div class="input_inline">
              <input id="answer" type="text" />
              <button class="submit_button">submit</button>
            </div>
          </div>
        </div>
        <div class="player" id="player2">
          <img src="img/player 2.png" alt="Player 2 Profile Picture" />
          <p>Player 2</p>
          <div class="heartcontainer">
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
          </div>
          <p>W/L</p>
          <p>W: 9</p>
          <p>L: 3</p>
        </div>
      </div>
      <div class="buttons">
        <button class="game_button">reboot</button>
        <button class="game_button">start</button>
      </div>
    </div>
  );
}

export default App;
