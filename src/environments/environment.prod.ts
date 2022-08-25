export const environment = {
  production: false,
  header: 'Bronze',
  localization: {
    languages: [
      { code: 'en', name: 'EN', culture: 'en-EN' },
      { code: 'ja', name: 'JP', culture: 'ja-JP' },
    ],
    defaultLanguage: 'ja',
  },
  HOME_PAGE: 'http://localhost:4200',
  API_SERVICE: 'http://localhost:8080',
  API_AUTH: 'http://localhost:8086',
  pageSize: 20,
  pageIndex: 1,
};
