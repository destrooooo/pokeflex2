import React, { Component } from "react";
class Pokeapi extends Component {
  state = {
    data: { types: [{}] },
  };

  // Code is called after the component is mounted/inserted into the DOM.
  componentDidMount() {
    // Change the end of the link to get different data
    // Some API may request a token, check their documentation !
    let url = "https://pokeapi.co/api/v2/pokemon/ditto";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;
    // Forced to use ? because not all fields contain sprites
    
    console.log(data.sprites?.front_default);

    // first type class and second type class are commented bcs we cannot find a solution to make the code working 
    return (
     
      <div class="previous_pokemon_container">
      <div class="pokemon-sprite-container">
        <img
           class="pokemon_sprite"
            src={data.sprites?.front_default}
            alt="Infernape"
            />
      </div>
      <div class="pokemon_name">
        {data.name}
      </div>
      {/* <div class="first_[0]type">
          <h3>{data.types.type}</h3>
      </div>
      <div class="second_type">
          <h3>{data.types.[1]type}</h3>
      </div> */}
      <div class="pokemon_number_id">#{data.id}</div>
      </div>
    );
  }
}



export default Pokeapi;
