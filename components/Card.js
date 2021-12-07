import Link from "next/link";

const Card = ({ user }) => {
    return (
        <div className="card">
            <Link href={`/users/${user?.id}`}>
                <a>
                    <h2>{user?.name}</h2>
                    <img src={user?.avatar} alt="avatar" />
                </a>
            </Link>
        </div>
    )
}

export default Card;