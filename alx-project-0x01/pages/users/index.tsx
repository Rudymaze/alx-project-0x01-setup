import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { PostProps, UserProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import posts from "../posts";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col items-center overflow-auto p-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <div className="flex flex-col items-center overflow-auto p-4">
        {posts.map(({ title, body, userId, id }: PostProps, key: number) => (
          <PostCard
            title={title}
            body={body}
            userId={userId}
            id={id}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
