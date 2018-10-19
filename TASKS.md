0. Seznamte se se strukturou monorepa.
1. Plop při tvorbě nové komponenty nepoužívá styled-components. Upravte.
2. Spusťe Storybook a prohlídněte si story pro Tabs.
3. Prohlédněte si RegistrationForm v union-app.
4. Po vzoru components/Textfield a components-formik/Textfield:
	- vytvoř komponenty TextArea.
5. Vytvoř High order compoentu `formikAdapter`, který z dané komponenty vytvoří formik komponentu. Refaktoruj TextArea a TextField adaptéry.
Použití:

```js
export const TextField = createAdapter(fromComponents.TextField);
```

6. Vytvoř validaci na délku jména a validitu emailu v RegisterForm.
7. Nastylujte pomocí knihovny rebass