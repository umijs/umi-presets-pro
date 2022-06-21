import { request, useNavigate, useRequest } from 'umi';

export default () => {
  const navigate = useNavigate();
  const { data } = useRequest(() => {
    return request('/api/currentUser');
  });
  if (data?.name) {
    return (
      <div
        onClick={() => {
          navigate('/users');
        }}
      >
        Hello {data?.name}
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        navigate('/users');
      }}
    >
      Please execute ``max openapi`` command.
    </div>
  );
};
