import type { IApi } from 'umi';

export default (api: IApi) => {
  api.onStart(() => {
    console.log('Hello PRO');
  });
  const plugins = [
    require.resolve('./features/proconfig'),
    require.resolve('umi-plugins-pro/dist/openapi'),
  ];
  return {
    plugins,
  };
};
