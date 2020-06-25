import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";
it("renders cards without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card title="smoke" content="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders cards in the manner expected", () => {
  const tree = renderer
    .create(<Card title="snapshot" content="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
