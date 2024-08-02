import type { StorybookConfig } from "@storybook/html-webpack5";

const config: StorybookConfig = {
  stories: [

    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",

  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-style-system",
    "@storybook/addon-designs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
