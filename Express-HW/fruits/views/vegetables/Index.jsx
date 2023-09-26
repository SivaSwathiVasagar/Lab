const React = require("react");

const DefaultLayout = require("../layout/DefaultLayout.jsx");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <DefaultLayout title={"Vegetables Index Page"}>
          <nav>
            <a href="/vegetables/new">Create a New Vegetables</a>
          </nav>
          <ol>
            {/* {vegetables.map((vegetable, i) => {
              return (
                <li>
                  The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is{" "}
                  {vegetable.color} <br></br>
                  {vegetable.readyToCook
                    ? `It is ready to cook`
                    : `It is not ready to cook`}
                  <br />
                </li> */}
            {this.props.vegetables.map((vegetable, i) => {
              return (
                <li key={i}>
                  <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a>{" "}
                  is {vegetable.color}
                  <br></br>
                  {vegetable.readyToCook ? (
                    <span>It is ready to cook</span>
                  ) : (
                    <span> It is not ready to cook </span>
                  )}
                  <br></br>
                  {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                  <form
                    action={`/vegetables/${vegetable._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <a href={`/vegetables/${vegetable._id}/edit`}>
                    Edit This Vegetable
                  </a>{" "}
                  <br></br>
                  <br></br>
                </li>
              );
            })}
          </ol>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;
