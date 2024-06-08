import { DefaultTheme } from "vitepress";
import { allCatalogs, subCatalog } from "../../utils";

export const sidebar: DefaultTheme.Sidebar = {
  ...(await allCatalogs()),
  ...(await subCatalog()),
};
