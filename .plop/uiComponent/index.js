const path = require("path");
const { rootDir } = require("../utils");

module.exports = {
	description: "React UI Component for packages/union-components",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "Name of the component"
		}
	],
	actions: (/* input */) => [
		{
			type: "add",
			path: path.join(
				rootDir,
				"packages/union-components/src/{{pascalCase name}}/{{pascalCase name}}.js"
			),
			templateFile: path.join(__dirname, "./statelessComponent.js.hbs")
		},
		{
			type: "add",
			path: path.join(
				rootDir,
				"packages/union-components/src/{{pascalCase name}}/{{pascalCase name}}.test.js"
			),
			templateFile: path.join(__dirname, "./test.js.hbs")
		},
		{
			type: "add",
			path: path.join(
				rootDir,
				"packages/union-components/src/{{pascalCase name}}/{{pascalCase name}}.stories.js"
			),
			templateFile: path.join(__dirname, "./stories.js.hbs")
		},
		{
			type: "add",
			path: path.join(
				rootDir,
				"packages/union-components/src/{{pascalCase name}}/index.js"
			),
			templateFile: path.join(__dirname, "./index.js.hbs")
		},
		{
			type: "append",
			path: path.join(rootDir, "packages/union-components/src/index.js"),
			templateFile: path.join(__dirname, "./root.js.hbs"),
			separator: "",
			pattern: /\n$/gi
		}
	]
};
