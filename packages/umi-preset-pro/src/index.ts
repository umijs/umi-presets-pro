import type { IApi } from 'umi';

export default (api: IApi) => {
  api.onStart(() => {
    console.log('Hello PRO');
  });
  const plugins = [
    require.resolve('./features/proconfig'),
    require.resolve('@umijs/max-plugin-openapi/dist/openapi'),
  ];
  return {
    plugins,
  };
};
