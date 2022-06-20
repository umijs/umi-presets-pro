export default {
  presets: [require.resolve('umi-presets-pro')],
  openAPI: {
    requestLibPath: "import request from '@utils/request'",
    // 这里使用 copy 的 url
    schemaPath:
      'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
    mock: true,
  },
  mfsu: false,
  request: {
    dataField: '',
  },
};
