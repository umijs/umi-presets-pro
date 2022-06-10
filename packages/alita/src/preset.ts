import type { IApi } from 'umi';

export default (api: IApi) => {
  api.onStart(() => {
    console.log('Hello alita-next');
  });
  const plugins = [require.resolve('./features/config/dumiconfig')];
  return {
    plugins,
  };
};
