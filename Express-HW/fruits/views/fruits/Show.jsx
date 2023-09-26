const React = require("react");
const DefaultLayout = require("../layout/DefaultLayout");
class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return (
      <div>
        <DefaultLayout title={"Fruits Show Page"}>
          The {fruit.name} is {fruit.color}
          <br></br>
          <br></br>
          {fruit.readyToEat
            ? "Its is ready to eat"
            : "It is not ready to eat... Cant touch this"}
          <br></br>
          <br></br>
          <a href="/fruits">Home</a>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Show;
