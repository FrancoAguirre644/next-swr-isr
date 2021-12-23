import axios from "axios";
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { useUser } from '../../actions/users';
import { useEffect, useState } from "react";

const User = ({ initUser, id }) => {

    const [data, setData] = useState(initUser);
    const [loaded, setLoaded] = useState(false);

    const { user, isLoading, isError } = useUser(id);

    useEffect(() => {
        if (user) {
            setData(user);
            setLoaded(true);
        }
    }, []);

    if (loaded && isError) return <h2>{isError}</h2>;

    if (loaded && isLoading) return <Loading />

    return (
        <div>
            {data && <Card user={data} />}
        </div>
    )
}

export async function getStaticPaths() {

    let url = '/users?_sort=createdAt&_order=desc';
    const res = await axios.get(url);
    const users = res.data;

    const paths = users.map((user) => ({
        params: { id: user.id },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {

    let url = `/users/${params.id}`;
    const res = await axios.get(url);

    return {
        props: {
            initUser: res.data,
            id: params.id
        },
        revalidate: 10,
    };
}

export default User;