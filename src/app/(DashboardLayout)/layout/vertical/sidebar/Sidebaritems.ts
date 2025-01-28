export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?:boolean,
  subtitle?:string,
  badge?:boolean,
  badgeType?:string,
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?:boolean,
  subtitle?:string,
  badgeType?:string,
  badge?:boolean,
}


import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Modern",
        icon: 'tabler:aperture',
        id: uniqueId(),
        url: "/",
      },
      {
        name: "eCommerce",
        icon: 'tabler:shopping-cart',
        id: uniqueId(),
        url: "/dashboards/eCommerce",
      },
      {
        name: "Front Pages",
        id: uniqueId(),
        icon: "tabler:app-window",
        children: [
          {
            id: uniqueId(),
            name: "Homepage",
            url: "/frontend-pages/homepage",
          },
          {
            id: uniqueId(),
            name: "About Us",
            url: "/frontend-pages/about",
          },
          {
            id: uniqueId(),
            name: "Blog",
            url: "/frontend-pages/blog/post",
          },
          {
            id: uniqueId(),
            name: "Blog Details",
            url: "frontend-pages/blog/detail/as-yen-tumbles-gadget-loving-japan-goes-for-secondhand-iphones-",
          },
          {
            id: uniqueId(),
            name: "Portfolio",
            url: "/frontend-pages/portfolio",
          },
          {
            id: uniqueId(),
            name: "Pricing",
            url: "/frontend-pages/pricing",
          },
          {
            id: uniqueId(),
            name: "Contact Us",
            url: "/frontend-pages/contact",
          },
        ],
      },
      // {
      //   name: "NFT",
      //   icon: 'tabler:currency-dollar',
      //   id: uniqueId(),
      //   url: "/dashboards/nft",
      // },
      // {
      //   name: "Crypto",
      //   icon: 'tabler:cpu',
      //   id: uniqueId(),
      //   url: "/dashboards/crypto",
      // },
      // {
      //   name: "General",
      //   icon: 'tabler:activity-heartbeat',
      //   id: uniqueId(),
      //   url: "/dashboards/general",
      // },
      // {
      //   name: "Music",
      //   icon: 'tabler:playlist',
      //   id: uniqueId(),
      //   url: "/dashboards/music",
      // },
    ],
  },
  {
    heading: "Apps",
    children: [
      {
        id: uniqueId(),
        name: "Calendar",
        icon: "tabler:calendar",
        url: "/apps/calendar",
      },
      {
        id: uniqueId(),
        name: "Kanban",
        icon: "tabler:layout-kanban",
        url: "/apps/kanban",
      },
      {
        id: uniqueId(),
        name: "Chats",
        icon: "tabler:message-dots",
        url: "/apps/chats",
      },

      {
        id: uniqueId(),
        name: "Email",
        icon: "tabler:mail",
        url: "/apps/email",
      },
      
      {
        id: uniqueId(),
        name: "Notes",
        icon: "tabler:notes",
        url: "/apps/notes",
      },
      {
        id: uniqueId(),
        name: "Contacts",
        icon: "tabler:phone",
        url: "/apps/contacts",
      },
      {
        name: "Invoice",
        id: uniqueId(),
        icon: "tabler:file-text",
        children: [
          {
            id: uniqueId(),
            name: "List",
            url: "/apps/invoice/list",
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "/apps/invoice/detail/PineappleInc",
          },
          {
            id: uniqueId(),
            name: "Create",
            url: "/apps/invoice/create",
          },
          {
            id: uniqueId(),
            name: "Edit",
            url: "/apps/invoice/edit/PineappleInc",
          },
        ],
      },
      {
        name: "User Profile",
        id: uniqueId(),
        icon: "tabler:user-circle",
        children: [
          {
            id: uniqueId(),
            name: "Profile",
            url: "/apps/user-profile/profile",
          },
          {
            id: uniqueId(),
            name: "Followers",
            url: "/apps/user-profile/followers",
          },
          {
            id: uniqueId(),
            name: "Friends",
            url: "/apps/user-profile/friends",
          },
          {
            id: uniqueId(),
            name: "Gallery",
            url: "/apps/user-profile/gallery",
          },
        ],
      },
      {
        name: "Blogs",
        id: uniqueId(),
        icon: "tabler:chart-donut-3",
        children: [
          {
            id: uniqueId(),
            name: "Blog Post",
            url: "/apps/blog/post",
          },
          {
            id: uniqueId(),
            name: "Blog Detail",
            url: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
        ],
      },
      {
        name: "Ecommerce",
        id: uniqueId(),
        icon: "tabler:basket",
        children: [
          {
            id: uniqueId(),
            name: "Shop",
            url: "/apps/ecommerce/shop",
          },
          {
            id: uniqueId(),
            name: "Details",
            url: "/apps/ecommerce/detail/1",
          },
          {
            id: uniqueId(),
            name: "List",
            url: "/apps/ecommerce/list",
          },
          {
            id: uniqueId(),
            name: "Checkout",
            url: "/apps/ecommerce/checkout",
          },
          {
            id: uniqueId(),
            name: "Add Product",
            url: "/apps/ecommerce/addproduct",
          },
          {
            id: uniqueId(),
            name: "Edit Product",
            url: "/apps/ecommerce/editproduct",
          },
        ],
      },
      {
        id: uniqueId(),
        name: "Tickets",
        icon: "tabler:list-details",
        url: "/apps/tickets",
      },

    ],
  },
  {
    heading: "UI",
    children: [

      {
        name: "Ui Elements",
        id: uniqueId(),
        icon: "tabler:layout-grid",
        children: [
          {
            id: uniqueId(),
            name: "Accordian",
            url: "/ui-components/accrodian",
          },
          {
            id: uniqueId(),
            name: "Badge",
            url: "/ui-components/badge",
          },
          {
            id: uniqueId(),
            name: "Button",
            url: "/ui-components/buttons",
          },
          {
            id: uniqueId(),
            name: "Dropdowns",
            url: "/ui-components/dropdown",
          },
          {
            id: uniqueId(),
            name: "Modals",
            url: "/ui-components/modals",
          },
          {
            id: uniqueId(),
            name: "Tab",
            url: "/ui-components/tab",
          },
          {
            id: uniqueId(),
            name: "Tooltip",
            url: "/ui-components/tooltip",
          },
          {
            id: uniqueId(),
            name: "Alert",
            url: "/ui-components/alert",
          },
          {
            id: uniqueId(),
            name: "Progressbar",
            url: "/ui-components/progressbar",
          },
          {
            id: uniqueId(),
            name: "Pagination",
            url: "/ui-components/pagination",
          },
          {
            id: uniqueId(),
            name: "Breadcrumbs",
            url: "/ui-components/breadcrumb",
          },
          {
            id: uniqueId(),
            name: "Drawer",
            url: "/ui-components/drawer",
          },
          {
            id: uniqueId(),
            name: "Lists",
            url: "/ui-components/listgroup",
          },
          {
            id: uniqueId(),
            name: "Carousel",
            url: "/ui-components/carousel",
          },
          {
            id: uniqueId(),
            name: "Spinner",
            url: "/ui-components/spinner",
          },
          {
            id: uniqueId(),
            name: "Avatar",
            url: "/ui-components/avatar",
          },
          {
            id: uniqueId(),
            name: "Banner",
            url: "/ui-components/banner",
          },
          {
            id: uniqueId(),
            name: "Button Group",
            url: "/ui-components/button-group",
          },
          {
            id: uniqueId(),
            name: "Card",
            url: "/ui-components/card",
          },
          {
            id: uniqueId(),
            name: "Datepicker",
            url: "/ui-components/datepicker",
          },
          {
            id: uniqueId(),
            name: "Footer",
            url: "/ui-components/footer",
          },
          {
            id: uniqueId(),
            name: "KBD",
            url: "/ui-components/kbd",
          },
          {
            id: uniqueId(),
            name: "Mega Menu",
            url: "/ui-components/megamenu",
          },
          {
            id: uniqueId(),
            name: "Navbar",
            url: "/ui-components/navbar",
          },
          {
            id: uniqueId(),
            name: "Popover",
            url: "/ui-components/popover",
          },
          {
            id: uniqueId(),
            name: "Rating",
            url: "/ui-components/rating",
          },
          {
            id: uniqueId(),
            name: "Sidebar",
            url: "/ui-components/sidebar",
          },
          {
            id: uniqueId(),
            name: "Tables",
            url: "/ui-components/tables",
          },
          {
            id: uniqueId(),
            name: "Timeline",
            url: "/ui-components/timeline",
          },
          {
            id: uniqueId(),
            name: "Toast",
            url: "/ui-components/toast",
          },
          {
            id: uniqueId(),
            name: "Typography",
            url: "/ui-components/typography",
          },
        ],
      },
    ],
  },
  {
    heading: "FORMS",
    children: [

      {
        name: "Form Elements",
        id: uniqueId(),
        icon: "tabler:files",
        children: [
          {
            id: uniqueId(),
            name: "Forms Elements",
            url: "/forms/form-elements",
          },
          {
            id: uniqueId(),
            name: "Forms Layouts",
            url: "/forms/form-layouts",
          },
          {
            id: uniqueId(),
            name: "Forms Horizontal",
            url: "/forms/form-horizontal",
          },
          {
            id: uniqueId(),
            name: "Forms Vertical",
            url: "/forms/form-vertical",
          },
          {
            id: uniqueId(),
            name: "Forms Custom",
            url: "/forms/form-custom",
          },
          {
            id: uniqueId(),
            name: "Form Validation",
            url: "/forms/form-validation",
          },
        ],
      },
    ],
  },
  {
    heading: "Pages",
    children: [
      {
        name: "Account Setting",
        icon: "tabler:user-circle",
        id: uniqueId(),
        url: "/theme-pages/account-settings",
      },
      {
        name: "FAQ",
        icon: "tabler:help",
        id: uniqueId(),
        url: "/theme-pages/faq",
      },
      {
        name: "Pricing",
        icon: "tabler:currency-dollar",
        id: uniqueId(),
        url: "/theme-pages/pricing",
      },
      {
        name: "Landingpage",
        icon: "tabler:app-window",
        id: uniqueId(),
        url: "/landingpage",
      },
      {
        name: "Roll Base Access",
        icon: "tabler:topology-star-3",
        id: uniqueId(),
        url: "/theme-pages/casl",
      },
    ],
  },
  {
    heading: "Widgets",
    children: [
      {
        id: uniqueId(),
        name: "Cards",
        icon: "tabler:cards",
        url: "/widgets/cards",
      },
      {
        id: uniqueId(),
        name: "Banners",
        icon: "tabler:components",
        url: "/widgets/banners",
      },
      {
        id: uniqueId(),
        name: "Charts",
        icon: "tabler:chart-pie",
        url: "/widgets/charts",
      },
    ],
  },
  {
    heading: "Headless Ui",
    children: [
      {
        name: "Ui Elements",
        id: uniqueId(),
        icon: "tabler:brand-headlessui",
        children: [
          {
            name: "Dropdown",
            id: uniqueId(),
            url: "/headless-ui/dropdown",
          },
          {
            name: "Disclosure",
            id: uniqueId(),
            url: "/headless-ui/disclosure",
          },
          {
            name: "Dialog",
            id: uniqueId(),
            url: "/headless-ui/dialog",
          },
          {
            name: "Popover",
            id: uniqueId(),
            url: "/headless-ui/popover",
          },
          {
            name: "Tabs",
            id: uniqueId(),
            url: "/headless-ui/tabs",
          },
          {
            name: "Transition",
            id: uniqueId(),
            url: "/headless-ui/transition",
          },
        ],
      },
      {
        name: "Form Elements",
        id: uniqueId(),
        icon: "tabler:brand-terraform",
        children: [
          {
            id: uniqueId(),
            name: "Buttons",
            url: "/headless-form/buttons",
          },
          {
            id: uniqueId(),
            name: "Checkbox",
            url: "/headless-form/checkbox",
          },
          {
            id: uniqueId(),
            name: "Combobox",
            url: "/headless-form/combobox",
          },
          {
            id: uniqueId(),
            name: "Fieldset",
            url: "/headless-form/fieldset",
          },
          {
            id: uniqueId(),
            name: "Input",
            url: "/headless-form/input",
          },
          {
            id: uniqueId(),
            name: "Listbox",
            url: "/headless-form/listbox",
          },
          {
            id: uniqueId(),
            name: "Radio Group",
            url: "/headless-form/radiogroup",
          },
          {
            id: uniqueId(),
            name: "Select",
            url: "/headless-form/select",
          },
          {
            id: uniqueId(),
            name: "Switch",
            url: "/headless-form/switch",
          },
          {
            id: uniqueId(),
            name: "Textarea",
            url: "/headless-form/textarea",
          },
        ],
      },
    ],
  },
  {
    heading: "TABLES",
    children: [

      {
        name: "MUI Tables",
        id: uniqueId(),
        icon: "tabler:border-all",
        children: [
          {
            name: "Basic Tables",
            id: uniqueId(),
            url: "/tables/basic",
          },
          {
            name: "Striped Rows Table",
            id: uniqueId(),
            url: "/tables/striped-row",
          },
          {
            name: "Hover Table",
            id: uniqueId(),
            url: "/tables/hover-table",
          },
          {
            name: "Checkbox Table",
            id: uniqueId(),
            url: "/tables/checkbox-table",
          },
        ],
      },
      {
        name: "React Tables",
        id: uniqueId(),
        icon: "tabler:brand-airtable",
          children: [
            {
              id: uniqueId(),
              name: "Basic",
              url: "/react-tables/basic",
            },
            {
              id: uniqueId(),
              name: "Dense",
              url: "/react-tables/dense",
            },
            {
              id: uniqueId(),
              name: "Sorting",
              url: "/react-tables/sorting",
            },
            {
              id: uniqueId(),
              name: "Filtering",
              url: "/react-tables/filtering",
            },
            {
              id: uniqueId(),
              name: "Pagination",
              url: "/react-tables/pagination",
            },
            {
              id: uniqueId(),
              name: "Row Selection",
              url: "/react-tables/row-selection",
            },
            {
              id: uniqueId(),
              name: "Column Visibility",
              url: "/react-tables/columnvisibility",
            },
            {
              id: uniqueId(),
              name: "Editable",
              url: "/react-tables/editable",
            },
            {
              id: uniqueId(),
              name: "Sticky",
              url: "/react-tables/sticky",
            },
            {
              id: uniqueId(),
              name: "Drag & Drop",
              url: "/react-tables/drag-drop",
            },
            {
              id: uniqueId(),
              name: "Empty",
              url: "/react-tables/empty",
            },
            {
              id: uniqueId(),
              name: "Expanding",
              url: "/react-tables/expanding",
            },
            
          ],
      },
    ],
  },
  {
    heading: "Charts",
    children: [
      {
        name: "Line Chart",
        icon: "tabler:chart-sankey",
        id: uniqueId(),
        url: "/charts/line",
      },
      {
        name: "Area Chart",
        icon: "tabler:chart-histogram",
        id: uniqueId(),
        url: "/charts/area",
      },
      {
        name: "Gradient Chart",
        icon: "tabler:chart-area-line",
        id: uniqueId(),
        url: "/charts/gradient",
      },
      {
        name: "Candlestick",
        icon: "tabler:chart-candle",
        id: uniqueId(),
        url: "/charts/candlestick",
      },
      {
        name: "Column",
        icon: "tabler:chart-bar",
        id: uniqueId(),
        url: "/charts/column",
      },
      {
        name: "Doughnut & Pie",
        icon: "tabler:chart-donut-2",
        id: uniqueId(),
        url: "/charts/doughnut",
      },
      {
        name: "Radialbar & Radar",
        icon: "tabler:chart-arcs",
        id: uniqueId(),
        url: "/charts/radialbar",
      },
    ],
  },
  {
    heading: "Icons",
    children: [
      {
        id: uniqueId(),
        name: "Tabler Icons",
        icon: "tabler:archive",
        url: "/icons/tabler",
      },
      {
        id: uniqueId(),
        name: "Iconify Icons",
        icon: "tabler:mood-smile",
        url: "/icons/iconify",
      },
    ],
  },
  {
    heading: "Auth",
    children: [
      {
        id: uniqueId(),
        name: "Error",
        icon: "tabler:alert-circle",
        url: "/auth/error",
      },
      {
        name: "Login",
        id: uniqueId(),
        icon: "tabler:login",
        children: [
          {
            id: uniqueId(),
            name: "Side Login",
            url: "/auth/auth1/login",
          },
          {
            id: uniqueId(),
            name: "Boxed Login",
            url: "/auth/auth2/login",
          }
        ],
      },
      {
        name: "Register",
        id: uniqueId(),
        icon: "tabler:user-plus",
        children: [
          {
            id: uniqueId(),
            name: "Side Register",
            url: "/auth/auth1/register",
          },
          {
            id: uniqueId(),
            name: "Boxed Register",
            url: "/auth/auth2/register",
          }
        ],
      },
      {
        name: "Forgot Password",
        id: uniqueId(),
        icon: "tabler:rotate",
        children: [
          {
            id: uniqueId(),
            name: "Side Forgot Pwd",
            url: "/auth/auth1/forgot-password",
          },
          {
            id: uniqueId(),
            name: "Boxed Forgot Pwd",
            url: "/auth/auth2/forgot-password",
          }
        ],
      },
      {
        name: "Two Steps",
        id: uniqueId(),
        icon: "tabler:rotate",
        children: [
          {
            id: uniqueId(),
            name: "Side Two Steps",
            url: "/auth/auth1/two-steps",
          },
          {
            id: uniqueId(),
            name: "Boxed Two Steps",
            url: "/auth/auth2/two-steps",
          }
        ],
      },
      {
        id: uniqueId(),
        name: "Maintenance",
        icon: "tabler:settings",
        url: "/auth/maintenance",
      },
    ],
  },


];

export default SidebarContent;
