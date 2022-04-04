module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_includes/assets");
  eleventyConfig.addWatchTarget("./src/_includes/assets/");

  // Filter using `Array.filter`
  eleventyConfig.addCollection("featured", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      // Side-step tags and do your own filtering
      return "featured" in item.data;
    });
  });

  eleventyConfig.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
