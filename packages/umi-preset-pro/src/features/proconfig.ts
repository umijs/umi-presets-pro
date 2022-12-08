import type { IApi } from 'umi';

export default (api: IApi) => {
  const { REACT_APP_ENV } = process.env;

  const define = {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: '',
    REACT_APP_ENV: REACT_APP_ENV || false,
  };

  api.modifyConfig((memo: any) => {
    memo.define = {
      ...memo.define,
      ...define,
    };
    return memo;
  });
};
