import { useKeepOutlets } from '@umijs/max';

const Layout = () => {
  const element = useKeepOutlets();
  return <>{element}</>;
};

export default Layout;
