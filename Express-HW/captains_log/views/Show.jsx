const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

class Show extends React.Component {
  render() {
    const logs = this.props.selectedLogs;
    return (
      <div>
        <DefaultLayout title={"Show Page"}>
          Title : {logs.title} <br></br> Entry : {logs.entry}
          <br></br>
          <br></br>
          {logs.shipIsBroken
            ? "Ship is Broken, Not Ready to Sail"
            : "Ship is Not Broken, Ready to Sail"}
          <br></br>
          <br></br>
          <a href="/logs">Home</a>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Show;
