module.exports = {
  async redirects() {
    return [
      {
        source: "/degree-verification",
        destination: "/degree-verification", // The external URL you want to redirect to
        permanent: true, // This means the redirect is permanent (HTTP 308)
      },
     
    ];
  },
};
