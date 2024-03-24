'use client';
import { useRouter } from 'next/router';

const useAdminRoute = () => {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');
  console.log(isAdminRoute);
  return isAdminRoute;
};
export default useAdminRoute;
