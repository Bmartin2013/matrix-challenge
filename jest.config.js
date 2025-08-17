/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: "jsdom",
    transform: { "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.test.json" }] },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^@domain/(.*)$": "<rootDir>/src/domain/$1",
      "^@features/(.*)$": "<rootDir>/src/features/$1",
      "^@shared/(.*)$": "<rootDir>/src/shared/$1",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };