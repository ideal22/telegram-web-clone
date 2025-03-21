import { useSearchParams, useRouter } from 'next/navigation';

export const useSetQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setQueryParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return { setQueryParams };
};
