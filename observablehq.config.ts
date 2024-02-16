// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Bayesian Learning",

  pages: [
    {
      name: "Contents",
      pages: [
        {name: "Distributions", path: "/distributions"},
        {name: "Bayesian updating", path: "/updating"}
      ]
    }
  ],

  // Some additional configuration options and their defaults:
  theme: "slate", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Dashboard built with Observable Framework", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
};
