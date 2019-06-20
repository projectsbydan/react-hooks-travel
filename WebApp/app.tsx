import React from "react";
import { render } from "react-dom";
import { Layout } from "./Components/layout/layout";

const App = () => <Layout />;

render(<App />, document.querySelector("#root"));
