import "styled-components";
import { THEME } from "./theme";

type CustomTheme = typeof THEME;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
