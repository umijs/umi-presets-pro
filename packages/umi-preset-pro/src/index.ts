import type { IApi } from 'umi';

export default (api: IApi) => {
  api.onStart(() => {
    console.log('Hello PRO');
  });
  const plugins = [
    require.resolve('./features/proconfig'),
    require.resolve('@umijs/max-plugin-openapi'),
    require.resolve('@alita/plugins/dist/keepalive'),
    require.resolve('@alita/plugins/dist/tabs-layout'),
  ];
  return {
    plugins,
  };
};
