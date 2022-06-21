import { useOutlet } from 'umi';

const Layout = () => {
  const element = useOutlet();
  return <>{element}</>;
};

export default Layout;
