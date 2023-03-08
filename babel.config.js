module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "component",
      {
        libDir: "lib",
        root: 'my-lib',
        libraryName: "my-lib",
        styleLibrary: {
          name: "lib-style",
          base: false,
        },
      },
      "my-lib"
    ],
  ],
};
