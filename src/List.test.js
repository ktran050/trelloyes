import React from "react";
import ReactDOM from "react-dom";
import List from "./List.js";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const arr = {
    a: { id: "a", title: "First card", content: "lorem ipsum" },
    b: { id: "b", title: "second card", content: "lorem ipsum" },
  };
  ReactDOM.render(
    <List key="someKey" header="smoke" cards={[arr["a"], arr["b"]]} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders in the manner expected", () => {
  const tree = renderer
    .create(
      <List
        header="smoke"
        cards={[
          { id: "a", title: "First card", content: "lorem ipsum" },
          { id: "b", title: "second card", content: "lorem ipsum" },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
