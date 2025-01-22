import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
    tseslint.configs.strict,
    {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
    jsxA11y.flatConfigs.recommended,
    ...astro.configs.recommended,
    {
        plugins: {
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/indent": ["warn", 4],
        },
    },
);
