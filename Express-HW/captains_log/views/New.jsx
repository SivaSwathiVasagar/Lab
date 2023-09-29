import React from "react";

export default function New() {
  return (
    <div>
      <h1>New page</h1>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        <br /> <br />
        Entry: <input type="text" name="entry" />
        <br />
        <br />
        Ship Is Broken: <input type="checkbox" name="shipIsBroken" />
        <br />
        <br />
        <input type="submit" name="" value="submit" />
      </form>
    </div>
  );
}
