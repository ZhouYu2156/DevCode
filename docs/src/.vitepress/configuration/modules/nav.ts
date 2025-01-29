import { DefaultTheme } from "vitepress";
import CreateNavigationsService from "../../utils";

export const nav: DefaultTheme.NavItem[] = [
  ...(await CreateNavigationsService("notes")),
];
