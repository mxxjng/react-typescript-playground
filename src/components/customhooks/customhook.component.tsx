import React from 'react';

import { useFetch } from '../../hooks/DataHooks';

const CustomHook = () => {
  const res = useFetch('https://jsonplaceholder.typicode.com/users/1', {});

  console.log(res);
  if (!res.response) {
    return (
      <>
        <p>loading...</p>
      </>
    );
  }

  if (res.error) {
    return (
      <>
        <p>Error...</p>
      </>
    );
  }

  const { name, email } = res.response;

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
export default CustomHook;
