import Card from '../components/Card'
import Loading from '../components/Loading'
import { useUsers } from '../actions/users'
import { useEffect, useState } from 'react'

const Page = ({ initUsers, page, limit, search }) => {

    const [data, setData] = useState(initUsers);
    const [loaded, setLoaded] = useState(false);
    const { users, isLoading, isError } = useUsers(page, limit, search);

    useEffect(() => {
        if(users) {
            setData(users);
            setLoaded(true);
        }
    }, [users]);

    if (loaded && isError) return <h2>{isError}</h2>;

    if (loaded && isLoading) return <Loading />

    return (
        <div className="card_container">
            {
                data?.map(user => (
                    <Card key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default Page;