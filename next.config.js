module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.hec.gov.pk/english/Pages/default.aspx", // The external URL you want to redirect to
        permanent: true, // This means the redirect is permanent (HTTP 308)
      },
      {
        source: "/degree-verification",
        destination: "https://www.hec.gov.pk/english/Pages/default.aspx", // The external URL you want to redirect to
        permanent: true, // This means the redirect is permanent (HTTP 308)
      },
    ];
  },
};
