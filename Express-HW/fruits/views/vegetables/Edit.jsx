const React = require("react");
// As you can see we are using the app layout
const DefaultLayout = require("../layout/DefaultLayout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Veggies Edit Page">
        {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        {/* form is not complete we will do that below*/}
        <form
          action={`/vegetables/${this.props.vegetable._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.vegetable.name}
          />
          <br />
          Color:{" "}
          <input
            type="text"
            name="color"
            defaultValue={this.props.vegetable.color}
          />
          <br />
          Is Ready To Cook:
          {this.props.vegetable.readyToCook ? (
            <input type="checkbox" name="readyToCook" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToCook" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
