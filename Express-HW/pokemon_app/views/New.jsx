const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br /> <br />
          Image URL: <input type="text" name="img" />
          <br />
          <br />
          Add Pokemon to list: <input type="checkbox" name="Add Pokemon" />
          <br />
          <br />
          {this.props.img && <img src={this.props.img} alt="Pokemon" />}
          <input type="submit" value="Create New Pokemon" />
        </form>
        <h4>
          <a href="/pokemon">Back</a>
        </h4>
      </div>
    );
  }
}

module.exports = New;
