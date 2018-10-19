0. Seznamte se se strukturou monorepa.
1. Plop při tvorbě nové komponenty nepoužívá styled-components. Upravte.
2. Spusťe Storybook a prohlídněte si story pro Tabs.
3. Prohlédněte si RegistrationForm v union-app.
4. Po vzoru components/Textfield a components-formik/Textfield:
	- vytvoř komponenty TextAreaField (nezapomeň na plop).
5. Vytvoř High order compoentu `formikAdapter`, který z dané komponenty vytvoří formik komponentu. Refaktoruj TextAreaField a TextField adaptéry.
Použití:

```js
export const TextField = createAdapter(fromComponents.TextField);
```

6. Vytvoř validaci na délku jména a validitu emailu v RegisterForm.
7. Projekt je nenastylovaný. Nastylujte pomocí knihoven rebass a styled-components.
8. Pokračuj v podobném duchu s komponentou SelectField a Checkbox