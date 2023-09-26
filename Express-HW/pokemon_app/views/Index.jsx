const React = require("react");
const myStyle = {
  color: "#219ebc",
  backgroundColor: "#e3d5ca",
  padding: "10px",
  lineHeight: "0.7",
};
const DefaultLayout = require("./layout/DefaultLayout.jsx");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={myStyle}>
        <DefaultLayout title={"Pokemon Index Page"}>
          <nav>
            <h3>
              <a href="/pokemon/new">Create a New Pokemon</a>
            </h3>
          </nav>
          <ul>
            {pokemon.map((pokemon, i) => (
              <li key={i}>
                <h2>
                  <a href={`/pokemon/${pokemon.id}`}>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </a>{" "}
                </h2>
                <img src={pokemon.img + ".jpg"} width={"150"} height={"150"} />
                <br></br>
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  {" "}
                  <br></br>
                  <input type="submit" value="DELETE" />
                </form>
                <br></br>
                <a href={`/pokemon/${pokemon._id}/edit`}>
                  Edit This Pokemon
                </a>{" "}
                <br></br>
              </li>
            ))}
          </ul>
          <h4>
            <a href="/">Back</a>
          </h4>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;
