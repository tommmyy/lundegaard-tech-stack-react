1. Podle https://www.styled-components.com/docs/advanced#theming přiden `ThemeProvider` a veškeré barvy ulož do témy.

2. V komponentě `Tab` použij psedoselector `:hover`: https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting

3. Použij [createGlobalStyle](https://www.styled-components.com/docs/api#createglobalstyle) k nahrazení `Root.css`.

4. Vytvoř komponentu `Relative`, která nastavuje `position: relative`. Použij ji v `Tabs`.

5. Popřemýšlej jak v komponentě `Tab` by šel použít tag `css` pro refactor