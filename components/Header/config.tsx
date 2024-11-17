import { AiOutlineHome } from "react-icons/ai";
import { RiChat1Line, RiCodeLine, RiUserHeartLine, RiArticleLine } from "react-icons/ri";
import { MenuItem, Page } from "./types";

const menuItems: MenuItem[] = [
  {
    label: "home",
    icon: <AiOutlineHome />,
    extra: "home",
    url: Page.Home,
    mobileOnly: true,
  },
  {
    label: "about",
    icon: <RiUserHeartLine />,
    extra: "more of me",
    url: Page.About,
  },
  {
    label: "projects",
    icon: <RiCodeLine />,
    extra: "my work",
    url: Page.Projects,
  },
  {
    label: "articles",    // The text shown in the menu
    icon: <RiArticleLine />,  // The icon for the menu item
    extra: "my writings",     // Hover text or additional info
    url: Page.Article,       // The route to navigate to
  },
  {
    label: "contact",
    icon: <RiChat1Line />,
    extra: "say hi :)",
    url: Page.Contact,
  },
  // Add your new menu item here

];

export { menuItems };