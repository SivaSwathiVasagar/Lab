const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegetables Index Page</h1>
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li>
                The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToCook
                  ? `It is ready to cook`
                  : `It is not ready to cook`}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
