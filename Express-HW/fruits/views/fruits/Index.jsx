const React = require("react");

const DefaultLayout = require("../layout/DefaultLayout.jsx");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <div>
        <DefaultLayout title={"Fruits Index Page"}>
          <nav>
            <a href="/fruits/new">Create a New Fruit</a>
          </nav>
          {/* <h1>Fruits Index Page</h1> */}
          <ol>
            {/* {fruits.map((fruit) => {
              return (
                <li>
                  The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is{" "}
                  {fruit.color} <br></br>
                  {fruit.readyToEat
                    ? `It is ready to eat`
                    : `It is not ready to eat`}
                  <br />
                </li>
              );
            })} */}
            {this.props.fruits.map((fruit, i) => {
              return (
                <li key={i}>
                  <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is{" "}
                  {fruit.color}
                  <br></br>
                  {fruit.readyToEat ? (
                    <span>It is ready to eat</span>
                  ) : (
                    <span> It is not ready to eat </span>
                  )}
                  <br></br>
                  {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                  <form
                    action={`/fruits/${fruit._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>{" "}
                  <br></br>
                  <br></br>
                </li>
              );
            })}
          </ol>
          {/* <nav>
            <a href="/fruits/new">Create a New Fruit</a>
          </nav> */}
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;
