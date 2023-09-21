const React = require("react");
const myStyle = {
  color: "#219ebc",
  backgroundColor: "#e3d5ca",
  padding: "10px",
  lineHeight: "0.7",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pokemon, i) => (
            <li key={i}>
              <h2>
                <a href={`/pokemon/${i}`}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>{" "}
              </h2>
              <img src={pokemon.img + ".jpg"} />
              <br></br>
            </li>
          ))}
        </ul>
        <nav>
          <h3>
            <a href="/pokemon/new">Create a New Pokemon</a>
          </h3>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
