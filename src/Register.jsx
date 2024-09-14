import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersCreateRequest, usersFormUpdate } from "./redux/register/actions";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error, user, formData } = useSelector(
    (state) => state.create
  );
  const [formErrors, setFormErrors] = useState({});

  const validationSchema = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }
    setFormErrors(newErrors);
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(usersFormUpdate(name, value));
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validationSchema();
    if (Object.keys(errors).length === 0) {
      dispatch(usersCreateRequest(formData));
    }
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="max-w-lg w-full mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h2 className="text-4xl font-semibold text-purple-600">Register</h2>
        <form className="my-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-base text-slate-500 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter full name"
                onChange={handleChange}
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
              />
              {formErrors.name && (
                <span className="text-red-500">{formErrors.name}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-base text-slate-500 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={handleChange}
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
              />
              {formErrors.email && (
                <span className="text-red-500">{formErrors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-base text-slate-500 font-medium"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Enter phone"
                onChange={handleChange}
                className="w-full p-3 border border-slate-500 rounded-lg focus:outline-none hover:border-purple-800 hover:shadow"
              />
              {formErrors.phone && (
                <span className="text-red-500">{formErrors.phone}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {user && (
              <p style={{ color: "green" }}>User registered successfully!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
