const React = require("react");
const myStyle = {
  color: "#210ebc",
  backgroundColor: "#e5f5ca",
  padding: "10px",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={pokemon.img + ".jpg"} />
        <br></br>
        <h4>
          <a href="/pokemon">Back</a>
        </h4>
      </div>
    );
  }
}
module.exports = Index;
