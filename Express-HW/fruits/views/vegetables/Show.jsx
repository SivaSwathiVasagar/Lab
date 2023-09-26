const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");

class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <div>
        <DefaultLayout title={"Vegetables Show Page"}>
          The {vegetable.name} is {vegetable.color}
          <br></br>
          <br></br>
          {vegetable.readyToCook
            ? `It is ready to cook`
            : `It is not ready to cook ......  Don't touch this`}
          <br></br> <br></br>
          <a href="/vegetables">Home</a>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Show;
