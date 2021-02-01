module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: new RegExp("assets/svg"),
        },
      },
    },
  ],
};
