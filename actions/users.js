import useSWR from 'swr';

export function useUser(id) {
    const url = `/users/${id}`;

    const { data, error } = useSWR(id ? url : null);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
    }

}

export function useUsers(page, limit, search) {
    let url = '/users?_sort=createdAt&_order=desc';

    if (search) {
        url = `${url}&q=${search}`;
    } else {
        url = `${url}&_page=${page}&_limit=${limit}`;
    }

    const { data, error, mutate } = useSWR(url);

    return {
        users: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }

}