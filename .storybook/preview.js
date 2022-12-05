export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // viewport: {
  //   viewports: {
  //     iphonex: {
  //       name: 'iPhone X',
  //       styles: {
  //         width: '375px',
  //         height: '812px',
  //       },
  //     },
  //   },
  // },
  // backgrounds: {
  //   values: [
  //     {
  //       name: 'gray',
  //       value: '#808080',
  //     }
  //   ],
  // },
}