import React from "react";

const FormData = (props) => {
  const { email, setEmail, password, setPassword } = props;
  return (
    <div className="mb-4">
      <div className="mb-4 md:w-full">
        <label htmlFor="email" className="block text-xs mb-1">
          Email
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6 md:w-full">
        <label htmlFor="password" className="block text-xs mb-1">
          Password
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FormData;
