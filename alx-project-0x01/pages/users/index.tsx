import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import React, { useState } from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser: UserData) => {
    // For now, just close the modal. Optionally, you can update state to add the user.
    console.log("New user added:", newUser);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center p-4">
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Add User
        </button>
      </div>
      <div className="flex flex-col items-center overflow-auto p-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      {isModalOpen && (
        <UserModal onClose={handleCloseModal} onSubmit={handleAddUser} />
      )}
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
