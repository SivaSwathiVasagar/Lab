const React = require("react");
const myStyle = {
  color: "#219ebc",
  backgroundColor: "#e3d5ca",
  padding: "10px",
};

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {this.props.pokemon.map((pokemon, i) => (
            <h3>
              <li key={i}>
                <a href={`/pokemon/${i}`}>{pokemon.name}</a> <br></br>
                <img src={pokemon.img} />
                <br></br>
              </li>
            </h3>
          ))}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
