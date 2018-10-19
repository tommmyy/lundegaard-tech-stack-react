import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import * as themes from "../src/themes";

const req = require.context("../src", true, /\.stories\.js$/);

const GlobalStyles = createGlobalStyle`body {
	font-family: Roboto;
}

p {
	margin-bottom: 8px;
}`;

setOptions({
	name: "Components",
	url: "#",
	addonPanelInRight: true
});

addDecorator(story => (
	<div style={{ padding: "48px" }}>
		<GlobalStyles />
		<ThemeProvider theme={themes.main}>{story()}</ThemeProvider>
	</div>
));
const loadStories = () => {
	req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
