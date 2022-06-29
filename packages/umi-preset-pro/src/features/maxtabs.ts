import { join } from 'path';
import { IApi } from 'umi';

export function winPath(path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, '/');
}

export function withTmpPath(opts: {
  api: IApi;
  path: string;
  noPluginDir?: boolean;
}) {
  return winPath(
    join(
      opts.api.paths.absTmpPath,
      opts.api.plugin.key && !opts.noPluginDir
        ? `plugin-${opts.api.plugin.key}`
        : '',
      opts.path,
    ),
  );
}

export default (api: IApi) => {
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: 'Layout.tsx',
      content: `
      import { useKeepOutlets } from '@umijs/max';

      const Layout = () => {
        const element = useKeepOutlets();
        return <>{element}</>;
      };

      export default Layout;
`,
    });
  });

  api.register({
    key: 'addLayouts',
    fn() {
      return [
        {
          id: 'max-tabs',
          file: withTmpPath({ api, path: 'Layout.tsx' }),
          test: (route: any) => {
            return route.layout !== false;
          },
        },
      ];
    },
    stage: -1,
  });
};
