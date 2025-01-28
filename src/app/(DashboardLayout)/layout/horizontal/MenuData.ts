import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: "tabler:home-2",
    href: "",
    children: [
      {
        title: "Modern",
        icon: 'tabler:aperture',
        id: uniqueId(),
        href: "/",
      },
      {
        title: "eCommerce",
        icon: 'tabler:shopping-cart',
        id: uniqueId(),
        href: "/dashboards/eCommerce",
      },
      {
        id: uniqueId(),
        title: "Front Pages",
        icon: "tabler:app-window",
        href: "",
        children: [
          {
            title: "Homepage",
            id: uniqueId(),
            href: "/frontend-pages/homepage",
          },
          {
            title: "About Us",
            id: uniqueId(),
            href: "/frontend-pages/about",
          },
          {
            title: "Blog",
            id: uniqueId(),
            href: "/frontend-pages/blog/post",
          },
          {
            title: "Blog Details",
            id: uniqueId(),
            href: "/frontend-pages/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
          {
            title: "Contact Us",
            id: uniqueId(),
            href: "/frontend-pages/contact",
          },
          {
            title: "Portfolio",
            id: uniqueId(),
            href: "/frontend-pages/portfolio",
          },
          {
            title: "Pricing",
            id: uniqueId(),
            href: "/frontend-pages/pricing",
          },
        ],
      },
      // {
      //   title: "NFT",
      //   icon: 'tabler:currency-dollar',
      //   id: uniqueId(),
      //   href: "/dashboards/nft",
      // },
      // {
      //   title: "Crypto",
      //   icon: 'tabler:cpu',
      //   id: uniqueId(),
      //   href: "/dashboards/crypto",
      // },
      // {
      //   title: "General",
      //   icon: 'tabler:activity-heartbeat',
      //   id: uniqueId(),
      //   href: "/dashboards/general",
      // },
      // {
      //   title: "Music",
      //   icon: 'tabler:playlist',
      //   id: uniqueId(),
      //   href: "/dashboards/music",
      // }
    ],
  },
  {
    id: uniqueId(),
    title: "Apps",
    icon: "tabler:archive",
    href: "",
    children: [
      {
        id: uniqueId(),
        title: "Calendar",
        icon: "tabler:calendar",
        href: "/apps/calendar",
      },
      {
        id: uniqueId(),
        title: "Kanban",
        icon: "tabler:layout-kanban",
        href: "/apps/kanban",
      },
      {
        id: uniqueId(),
        title: "Chats",
        icon: "tabler:message-dots",
        href: "/apps/chats",
      },

      {
        id: uniqueId(),
        title: "Email",
        icon: "tabler:mail",
        href: "/apps/email",
      },
      
      {
        id: uniqueId(),
        title: "Notes",
        icon: "tabler:notes",
        href: "/apps/notes",
      },
      {
        id: uniqueId(),
        title: "Contacts",
        icon: "tabler:phone",
        href: "/apps/contacts",
      },
      {
        title: "Invoice",
        id: uniqueId(),
        icon: "tabler:file-text",
        href:"",
        children: [
          {
            id: uniqueId(),
            title: "List",
            href: "/apps/invoice/list",
          },
          {
            id: uniqueId(),
            title: "Details",
            href: "/apps/invoice/detail/PineappleInc",
          },
          {
            id: uniqueId(),
            title: "Create",
            href: "/apps/invoice/create",
          },
          {
            id: uniqueId(),
            title: "Edit",
            href: "/apps/invoice/edit/PineappleInc",
          },
        ],
      },
      {
        title: "User Profile",
        id: uniqueId(),
        icon: "tabler:user-circle",
        href:"",
        children: [
          {
            id: uniqueId(),
            title: "Profile",
            href: "/apps/user-profile/profile",
          },
          {
            id: uniqueId(),
            title: "Followers",
            href: "/apps/user-profile/followers",
          },
          {
            id: uniqueId(),
            title: "Friends",
            href: "/apps/user-profile/friends",
          },
          {
            id: uniqueId(),
            title: "Gallery",
            href: "/apps/user-profile/gallery",
          },
        ],
      },
      {
        title: "Blogs",
        id: uniqueId(),
        icon: "tabler:chart-donut-3",
        href:"",
        children: [
          {
            id: uniqueId(),
            title: "Blog Post",
            href: "/apps/blog/post",
          },
          {
            id: uniqueId(),
            title: "Blog Detail",
            href: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
          },
        ],
      },
      {
        title: "Ecommerce",
        id: uniqueId(),
        icon: "tabler:basket",
        href:"",
        children: [
          {
            id: uniqueId(),
            title: "Shop",
            href: "/apps/ecommerce/shop",
          },
          {
            id: uniqueId(),
            title: "Details",
            href: "/apps/ecommerce/detail/1",
          },
          {
            id: uniqueId(),
            title: "List",
            href: "/apps/ecommerce/list",
          },
          {
            id: uniqueId(),
            title: "Checkout",
            href: "/apps/ecommerce/checkout",
          },
          {
            id: uniqueId(),
            title: "Add Product",
            href: "/apps/ecommerce/addproduct",
          },
          {
            id: uniqueId(),
            title: "Edit Product",
            href: "/apps/ecommerce/editproduct",
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Tickets",
        icon: "tabler:list-details",
        href: "/apps/tickets",
      },

    ],
  },

  {
    id: uniqueId(),
    title: "Ui Elements",
    icon: "tabler:layout-grid",
    column: 4,
    href: "",
    children: [
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Accordian",
        href: "/ui-components/accrodian",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Badge",
        href: "/ui-components/badge",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Button",
        href: "/ui-components/buttons",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Dropdowns",
        href: "/ui-components/dropdown",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Modals",
        href: "/ui-components/modals",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Tab",
        href: "/ui-components/tab",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Tooltip",
        href: "/ui-components/tooltip",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Alert",
        href: "/ui-components/alert",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Progressbar",
        href: "/ui-components/progressbar",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Pagination",
        href: "/ui-components/pagination",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Breadcrumbs",
        href: "/ui-components/breadcrumb",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Drawer",
        href: "/ui-components/drawer",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Lists",
        href: "/ui-components/listgroup",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Carousel",
        href: "/ui-components/carousel",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Spinner",
        href: "/ui-components/spinner",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Avatar",
        href: "/ui-components/avatar",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Banner",
        href: "/ui-components/banner",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Button Group",
        href: "/ui-components/button-group",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Card",
        href: "/ui-components/card",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Datepicker",
        href: "/ui-components/datepicker",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Footer",
        href: "/ui-components/footer",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "KBD",
        href: "/ui-components/kbd",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Mega Menu",
        href: "/ui-components/megamenu",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Navbar",
        href: "/ui-components/navbar",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Popover",
        href: "/ui-components/popover",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Rating",
        href: "/ui-components/rating",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Sidebar",
        href: "/ui-components/sidebar",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Tables",
        href: "/ui-components/tables",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Timeline",
        href: "/ui-components/timeline",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Toast",
        href: "/ui-components/toast",
      },
      {
        id: uniqueId(),
        icon:"tabler:circle",
        title: "Typography",
        href: "/ui-components/typography",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Headless UI",
    column: 4,
    icon: "tabler:brand-headlessui",
    href: "",
    children: [
      {
        title: "Dropdown",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/dropdown",
      },
      {
        title: "Disclosure",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/disclosure",
      },
      {
        title: "Dialog",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/dialog",
      },
      {
        title: "Popover",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/popover",
      },
      {
        title: "Tabs",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/tabs",
      },
      {
        title: "Transition",
        icon: "tabler:circle",
        id: uniqueId(),
        href: "/headless-ui/transition",
      },

      {
        id: uniqueId(),
        title: "Buttons",
        icon: "tabler:circle",
        href: "/headless-form/buttons",
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: "tabler:circle",
        href: "/headless-form/checkbox",
      },
      {
        id: uniqueId(),
        title: "Combobox",
        icon: "tabler:circle",
        href: "/headless-form/combobox",
      },
      {
        id: uniqueId(),
        title: "Fieldset",
        icon: "tabler:circle",
        href: "/headless-form/fieldset",
      },
      {
        id: uniqueId(),
        title: "Input",
        icon: "tabler:circle",
        href: "/headless-form/input",
      },
      {
        id: uniqueId(),
        title: "Listbox",
        icon: "tabler:circle",
        href: "/headless-form/listbox",
      },
      {
        id: uniqueId(),
        title: "Radio Group",
        icon: "tabler:circle",
        href: "/headless-form/radiogroup",
      },
      {
        id: uniqueId(),
        title: "Select",
        icon: "tabler:circle",
        href: "/headless-form/select",
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: "tabler:circle",
        href: "/headless-form/switch",
      },
      {
        id: uniqueId(),
        title: "Textarea",
        icon: "tabler:circle",
        href: "/headless-form/textarea",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Pages",
    icon: "tabler:notebook",
    href: "",
    children: [
      {
        title: "Account Setting",
        icon: "tabler:user-circle",
        id: uniqueId(),
        href: "/theme-pages/account-settings",
      },
      {
        title: "FAQ",
        icon: "tabler:help",
        id: uniqueId(),
        href: "/theme-pages/faq",
      },
      {
        title: "Pricing",
        icon: "tabler:currency-dollar",
        id: uniqueId(),
        href: "/theme-pages/pricing",
      },
      {
        title: "Landingpage",
        icon: "tabler:app-window",
        id: uniqueId(),
        href: "/landingpage",
      },
      {
        title: "Roll Base Access",
        icon: "tabler:topology-star-3",
        id: uniqueId(),
        href: "/theme-pages/casl",
      },
      {
        id: uniqueId(),
        title: "Widgets",
        icon: "tabler:brand-airtable",
        href: "/widgets/cards",
        children: [
          {
            id: uniqueId(),
            title: "Cards",
            icon: "tabler:cards",
            href: "/widgets/cards",
          },
          {
            id: uniqueId(),
            title: "Banners",
            icon: "tabler:components",
            href: "/widgets/banners",
          },
          {
            id: uniqueId(),
            title: "Charts",
            icon: "tabler:chart-pie",
            href: "/widgets/charts",
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Auth",
        icon: "tabler:shield",
        href: "/400",
        children: [
          {
            id: uniqueId(),
            title: "Error",
            icon: "tabler:alert-circle",
            href: "/auth/error",
          },
          {
            title: "Login",
            id: uniqueId(),
            icon: "tabler:login",
            href: "/auth/auth1/login",
            children: [
              {
                id: uniqueId(),
                title: "Side Login",
                href: "/auth/auth1/login",
              },
              {
                id: uniqueId(),
                title: "Boxed Login",
                href: "/auth/auth2/login",
              }
            ],
          },
          {
            title: "Register",
            id: uniqueId(),
            icon: "tabler:user-plus",
            href: "/auth/auth1/register",
            children: [
              {
                id: uniqueId(),
                title: "Side Register",
                href: "/auth/auth1/register",
              },
              {
                id: uniqueId(),
                title: "Boxed Register",
                href: "/auth/auth2/register",
              }
            ],
          },
          {
            title: "Forgot Password",
            id: uniqueId(),
            icon: "tabler:rotate",
            href: "/auth/auth1/forgot-password",
            children: [
              {
                id: uniqueId(),
                title: "Side Forgot Pwd",
                href: "/auth/auth1/forgot-password",
              },
              {
                id: uniqueId(),
                title: "Boxed Forgot Pwd",
                href: "/auth/auth2/forgot-password",
              }
            ],
          },
          {
            title: "Two Steps",
            id: uniqueId(),
            icon: "tabler:rotate",
            href: "/auth/auth1/two-steps",
            children: [
              {
                id: uniqueId(),
                title: "Side Two Steps",
                href: "/auth/auth1/two-steps",
              },
              {
                id: uniqueId(),
                title: "Boxed Two Steps",
                href: "/auth/auth2/two-steps",
              }
            ],
          },
          {
            id: uniqueId(),
            title: "Maintenance",
            icon: "tabler:settings",
            href: "/auth/maintenance",
          },
        ],
      },
      {
        id: uniqueId(),
        title: "Icons",
        icon: "tabler:category-2",
        href: "/icons",
        children: [
          {
            id: uniqueId(),
            title: "Iconify Icons",
            href: "/icons/iconify",
          },
          {
            id: uniqueId(),
            title: "Tabler Icons",
            href: "/icons/tabler",
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: "tabler:files",
    href: "",
    children: [
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Forms Elements",
        href: "/forms/form-elements",
      },
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Forms Layouts",
        href: "/forms/form-layouts",
      },
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Forms Horizontal",
        href: "/forms/form-horizontal",
      },
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Forms Vertical",
        href: "/forms/form-vertical",
      },
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Forms Custom",
        href: "/forms/form-custom",
      },
      {
        id: uniqueId(),
        icon: "tabler:circle",
        title: "Form Validation",
        href: "/forms/form-validation",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Charts",
    icon: "tabler:chart-pie",
    href: "/charts/",
    children: [
      {
        title: "Line Chart",
        icon: "tabler:chart-sankey",
        id: uniqueId(),
        href: "/charts/line",
      },
      {
        title: "Area Chart",
        icon: "tabler:chart-histogram",
        id: uniqueId(),
        href: "/charts/area",
      },
      {
        title: "Gradient Chart",
        icon: "tabler:chart-area-line-filled",
        id: uniqueId(),
        href: "/charts/gradient",
      },
      {
        title: "Candlestick",
        icon: "tabler:chart-candle",
        id: uniqueId(),
        href: "/charts/candlestick",
      },
      {
        title: "Column",
        icon: "tabler:chart-bar",
        id: uniqueId(),
        href: "/charts/column",
      },
      {
        title: "Doughnut & Pie",
        icon: "tabler:chart-donut-2",
        id: uniqueId(),
        href: "/charts/doughnut",
      },
      {
        title: "Radialbar & Radar",
        icon: "tabler:chart-arcs",
        id: uniqueId(),
        href: "/charts/radialbar",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Tables",
    icon: "tabler:layout-sidebar",
    href: "",
    children: [
      {
        title: "Basic Tables",
        icon: "tabler:border-all",
        id: uniqueId(),
        href: "/tables/basic",
      },
      {
        title: "Striped Rows Table",
        icon: "tabler:table-row",
        id: uniqueId(),
        href: "/tables/striped-row",
      },
      {
        title: "Hover Table",
        icon: "tabler:table-alias",
        id: uniqueId(),
        href: "/tables/hover-table",
      },
      {
        title: "Checkbox Table",
        icon: "tabler:brand-airtable",
        id: uniqueId(),
        href: "/tables/checkbox-table",
      },
      {
        id: uniqueId(),
        title: "React Tables",
        icon: "tabler:brand-airtable",
        href: "",
        children: [
          {
            id: uniqueId(),
            title: "Basic",
            href: "/react-tables/basic",
          },
          {
            id: uniqueId(),
            title: "Dense",
            href: "/react-tables/dense",
          },
          {
            id: uniqueId(),
            title: "Sorting",
            href: "/react-tables/sorting",
          },
          {
            id: uniqueId(),
            title: "Filtering",
            href: "/react-tables/filtering",
          },
          {
            id: uniqueId(),
            title: "Pagination",
            href: "/react-tables/pagination",
          },
          {
            id: uniqueId(),
            title: "Row Selection",
            href: "/react-tables/row-selection",
          },
          {
            id: uniqueId(),
            title: "Column Visibility",
            href: "/react-tables/columnvisibility",
          },
          {
            id: uniqueId(),
            title: "Editable",
            href: "/react-tables/editable",
          },
          {
            id: uniqueId(),
            title: "Sticky",
            href: "/react-tables/sticky",
          },
          {
            id: uniqueId(),
            title: "Drag & Drop",
            href: "/react-tables/drag-drop",
          },
          {
            id: uniqueId(),
            title: "Empty",
            href: "/react-tables/empty",
          },
          {
            id: uniqueId(),
            title: "Expanding",
            href: "/react-tables/expanding",
          },
          
        ],
      },
    ],
  },
];
export default Menuitems;
