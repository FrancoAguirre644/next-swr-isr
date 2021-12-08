import axios from 'axios';
import useSWR from 'swr';

export function useUser(id) {
    const url = `/users/${id}`;

    const fetcher = async (key) => {
        const res = await axios.get(key);
        return res.data;
    }

    const { data, error } = useSWR(url, fetcher);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function useUsers() {
    const url = '/users?_sort=createdAt&_order=desc';

    const fetcher = async (key) => {
        const res = await axios.get(key);
        return res.data;
    }

    const { data, error } = useSWR(url, fetcher);

    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }

}