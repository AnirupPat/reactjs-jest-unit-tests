import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me");
});

it("renders another button correctly", () => {
  const { getByTestId } = render(<Button label="Click me plz"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me plz");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="Save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="Save please"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
