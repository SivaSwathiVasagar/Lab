const React = require("react");
const myStyle = {
  color: "#210ebc",
  backgroundColor: "#e5f5ca",
  padding: "10px",
};
const DefaultLayout = require("./layout/DefaultLayout.jsx");

class Show extends React.Component {
  render() {
    const pokemon = this.props.selectedPokemon;
    return (
      <div style={myStyle}>
        <DefaultLayout title={"Pokemon Show Page"}>
          <h1>Gotta Catch 'Em All!</h1>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <img src={pokemon.img + ".jpg"} width={"350"} height={"350"} />
          <br></br>
          <h4>
            <a href="/pokemon">Home</a>
          </h4>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Show;
