const path = require("path");
const webpack = require("@storybook/core/node_modules/webpack");

module.exports = (storybookBaseConfig, configType) => {
	storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.map(
		rule => {
			if (/babel/.test(rule.loader)) {
				rule.include.push(/union/);
			}

			return rule;
		}
	);
	return storybookBaseConfig;
};
