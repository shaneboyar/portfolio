export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio",
      },
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5e84a3eaa063b2dd294164ca",
                  title: "Sanity Studio",
                  name: "shaneboyar-studio",
                  apiId: "246b7bd9-d219-4418-9f35-23d7b1ec57c9",
                },
                {
                  buildHookId: "5e84a3ea8a8597b3ff43ecaa",
                  title: "Portfolio Website",
                  name: "shaneboyar",
                  apiId: "d6e030f2-c9fe-4f44-930f-58b7536e868d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/shaneboyar/shaneboyar",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://shaneboyar.netlify.com",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" },
    },
  ],
};
