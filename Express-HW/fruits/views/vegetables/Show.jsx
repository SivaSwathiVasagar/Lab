const React = require("react");
class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <div>
        <h1> Vegetables Show Page </h1>
        The {vegetable.name} is {vegetable.color}
        <br></br>
        <br></br>
        {vegetable.readyToCook
          ? `It is ready to cook`
          : `It is not ready to cook ......  Don't touch this`}
      </div>
    );
  }
}
module.exports = Show;
