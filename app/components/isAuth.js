'use client'
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function isAuth(Component) {
  return function IsAuth(props) {
    const auth = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('user')) : false;;

    useEffect(() => {
      if (!auth) {
        return redirect('/');
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}