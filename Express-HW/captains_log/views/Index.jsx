import React from "react";
const DefaultLayout = require("./layout/DefaultLayout");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <DefaultLayout title={"Index Page"}>
          <nav>
            <a href="/logs/new">Create a New Log</a>
          </nav>
          <ul>
            {this.props.logs.map((log, i) => {
              return (
                <li key={i}>
                  Title : <a href={`/logs/${log.id}`}>{log.title}</a> <br></br>{" "}
                  Entry : {log.entry}
                  <br></br>
                  {log.shipIsBroken ? (
                    <span>Ship is Broken, Not Ready to Sail</span>
                  ) : (
                    <span> Ship is Not Broken, Ready to Sail </span>
                  )}
                  <br></br>
                  <form
                    action={`/logs/${log._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <a href={`/logs/${log._id}/edit`}>Edit This Log</a> <br></br>
                  <br></br>
                </li>
              );
            })}
          </ul>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;
