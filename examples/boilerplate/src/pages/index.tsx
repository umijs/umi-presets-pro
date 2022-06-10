import React, { useEffect } from 'react';
export default () => {
  useEffect(() => {
    const data = fetch('/api/currentUser');
    console.log(data);
  }, []);
  return <div>Hello</div>;
};
