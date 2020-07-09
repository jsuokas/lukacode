module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["<rootDir>/test/**/*.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
};
