import { IApi } from 'umi';
import { getSchemas } from './schema';

export default (api: IApi) => {
  // TODO: 以下的注释要根据后面的支持情况选择性开启
  const configDefaults: Record<string, any> = {
    history: { type: 'hash' },
    targets: {
      ie: 9,
    },
    hash: true,
    ...api.userConfig,
  };

  api.modifyConfig((memo: any) => {
    memo.alias.alita = 'umi';
    Object.keys(configDefaults).forEach((key) => {
      memo[key] = configDefaults[key];
    });
    return memo;
  });

  const extraSchemas = getSchemas();

  for (const key of Object.keys(extraSchemas)) {
    const config: Record<string, any> = {
      schema: extraSchemas[key] || ((joi: any) => joi.any()),
    };
    if (key in configDefaults) {
      config.default = configDefaults[key];
    }
    api.registerPlugins([
      {
        id: `alita: config-${key}`,
        key: key,
        config,
      },
    ]);
  }
};
