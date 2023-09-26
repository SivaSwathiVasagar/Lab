const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Pokemon Edit Page">
        <form
          action={`/pokemon/${this.props.pokemon._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.pokemon.name}
          />
          <br></br>
          <br></br>
          Image:{" "}
          <input
            type="text"
            name="image"
            defaultValue={this.props.pokemon.img}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <h4>
          <a href="/pokemon">Back</a>
        </h4>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
