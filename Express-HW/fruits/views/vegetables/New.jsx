const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Veggies page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/vegetables" method="POST">
          Name: <input type="text" name="name" />
          <br /> <br />
          Color: <input type="text" name="color" />
          <br />
          <br />
          Is Ready To Cook: <input type="checkbox" name="readyToCook" />
          <br />
          <br />
          <input type="submit" name="" value="Create Vegetable" />
        </form>
      </div>
    );
  }
}

module.exports = New;
