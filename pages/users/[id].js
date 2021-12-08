import axios from "axios";
import { useRouter } from "next/router";
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { useUser } from '../../actions/users';

const User = () => {

    const router = useRouter();
    const { id } = router.query;

    const { user, isLoading, isError } = useUser(id);

    if (isError) return <h2>{isError}</h2>;

    if (isLoading) return <Loading />

    return (
        <div>
            <Card user={user} />
        </div>
    )
}

export default User;