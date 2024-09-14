import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  usersDeleteRequest,
  usersDetailsRequest,
  usersRequest,
  usersUpdateRequest,
} from "./redux/users/actions";

const UserLists = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { loading, users, error, user } = useSelector((state) => state.users);
  const [id, setId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    dispatch(usersRequest());
  }, [dispatch]);

  const handleEditClick = (id) => () => {
    setShowModal(true);
    dispatch(usersDetailsRequest(id));
    setId(id);
  };

  useEffect(() => {
    if (user) {
      setEditFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(usersUpdateRequest(id, editFormData));
      setShowModal(false);
    }
  };

  const handleDeleteClick = (id) => () => {
    setDelModal(true);
    setId(id);
  };

  const handleDelete = () => {
    if (id) {
      dispatch(usersDeleteRequest(id));
      setDelModal(false);
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-center my-3">UserLists</h2>
      <table className="mx-auto table-auto">
        <thead>
          <tr className="w-full p-3 flex justify-between gap-4 border border-gray-600">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && <p>Loading...</p>}
          {users.slice(page * 5 - 5, page * 5).map((v) => (
            <tr
              key={v.id}
              className="w-full p-3 flex justify-between gap-4 border border-gray-600"
            >
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.phone}</td>
              <td className="flex gap-1 items-center justify-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  onClick={handleEditClick(v.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={handleDeleteClick(v.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pt-5 flex items-center justify-center gap-2">
        {[...Array(Math.ceil(users?.length / 5) || 1)].map((_, i) => {
          return (
            <button
              key={i}
              className="px-3 py-2 border bg-slate-300 rounded-lg"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editFormData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={editFormData.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {delModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Delete User</h2>
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={() => setDelModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLists;
