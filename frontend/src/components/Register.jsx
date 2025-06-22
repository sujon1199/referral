import { useState } from "react";
import axios from "axios";
// import QRCode from "react-qr-code";
import Dashboard from "./Dashboard";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    referralCode: "",
  });

  const [userReferralCode, setUserReferralCode] = useState("");
  const [referralTree, setReferralTree] = useState([]);
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        form
      );

      setUserReferralCode(res.data.referralCode);
      setReferralTree(res.data.referralTree);
      setRegisteredUser({
        name: form.name,
        email: form.email,
        referralCode: res.data.referralCode,
        referralTree: res.data.referralTree,
        _id: res.data.userId,
      });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Your Name"
          required
          className="border border-gray-300 px-2 py-1 rounded-md "
        />
        <br />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          required
          className="border border-gray-300 px-2 py-1 rounded-md my-2"
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
          required
          className="border border-gray-300 px-2 py-1 rounded-md my-2"
        />
        <br />
        <input
          name="referralCode"
          onChange={handleChange}
          value={form.referralCode}
          placeholder="Referral Code (optional)"
          className="border border-gray-300 px-2 py-1 rounded-md my-2"
        />
        <br />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Register
        </button>
      </form>
      {registeredUser && <Dashboard user={registeredUser} />}
      {/* {userReferralCode && (
        <div style={{ marginTop: "30px" }}>
          <h3>🎉 Registration Successful!</h3>
          <p>
            <strong>Your Referral Code:</strong> {userReferralCode}
          </p>
          <QRCode
            value={`http://localhost:5174/register?ref=${userReferralCode}`}
          />
          <p style={{ marginTop: "10px" }}>
            <strong>Your 10-Level Upline:</strong>
          </p>
          <ul>
            {referralTree.map((id, i) => (
              <li key={id}>
                Level {i + 1} → {id}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Register;
