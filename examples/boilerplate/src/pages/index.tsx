import { request, useRequest } from 'umi';

export default () => {
  const { data } = useRequest(() => {
    return request('/api/currentUser');
  });
  if (data?.name) {
    return <div>Hello {data?.name}</div>;
  }
  return <div>Please execute ``max openapi`` command.</div>;
};
