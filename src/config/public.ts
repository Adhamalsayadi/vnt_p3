export type NavLink = {
  name: string;
  href: string;
};

export type CountryOption = {
  name: string;
  flag: string;
};

export type ServiceOption = {
  label: string;
  image: string;
};

export type SelectFilterOption = {
  key: "category" | "subCategory" | "time" | "clientRate" | "vtRate";
  label: string;
  options: Array<string | { v: string; l: string }>;
};

export const NAV_LINKS: NavLink[] = [
  { name: "home", href: "/" },
  { name: "enquiries", href: "/enquiries" },
  { name: "advertisments", href: "/advertisments" },
  { name: "services", href: "/services" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export const COUNTRY_OPTIONS: CountryOption[] = [
  { name: "Saudi Arabia", flag: "/Saudi_flag.png" },
  { name: "Bahrain", flag: "/bahrain_flag.png" },
];

export const HOME_SERVICE_OPTIONS: ServiceOption[] = [
  { label: "Services", image: "/Services.png" },
  { label: "Rental", image: "/for-rent.png" },
  { label: "Products", image: "/received.png" },
  { label: "Man power", image: "/power.png" },
];

export const ENQUIRY_FILTERS: SelectFilterOption[] = [
  {
    key: "category",
    label: "all categories",
    options: ["Services", "Rental", "Products", "Man power"],
  },
  {
    key: "subCategory",
    label: "sub categories",
    options: ["sub 1", "sub 2", "sub 3", "sub 4"],
  },
  {
    key: "time",
    label: "select time",
    options: ["today", "this week", "this month"],
  },
  {
    key: "clientRate",
    label: "client rate",
    options: [
      { v: "5", l: "5 stars" },
      { v: "3", l: "3-5" },
      { v: "1", l: "1-3" },
    ],
  },
  {
    key: "vtRate",
    label: "vT rate",
    options: [
      { v: "5", l: "5 stars" },
      { v: "3", l: "3-5" },
      { v: "1", l: "1-3" },
    ],
  },
];

export const FOOTER_USEFUL_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Ads", href: "/advertisments" },
  { label: "Why us", href: "/about" },
];

export const FOOTER_SUPPORT_LINKS = [
  { label: "Getting started", href: "/contact" },
  { label: "Help center", href: "/contact" },
  { label: "Report a bug", href: "/contact" },
];
