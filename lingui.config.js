/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["zh", "en"],
    sourceLocale: "en",
    catalogs: [
      {
        path: "<rootDir>/src/locales/{locale}/messages",
        include: ["src"],
      },
    ],
    format: "po",
    compileNamespace:'ts'
  };