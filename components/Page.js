import Card from '../components/Card'
import Loading from '../components/Loading'
import { useUsers } from '../actions/users'

const Page = () => {

    const { users, isLoading, isError } = useUsers();

    if (isError) return <h2>{isError}</h2>;

    if (isLoading) return <Loading />

    return (
        <div className="card_container">
            {
                users.map(user => (
                    <Card key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default Page;