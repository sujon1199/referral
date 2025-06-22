import React from "react";
import QRCode from "react-qr-code";

const Dashboard = ({ user }) => {
  const referralLink = `https://yourdomain.com/register?ref=${user.referralCode}`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">👤 Welcome, {user.name}!</h2>

      {/* Referral Code + QR */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          📢 Your Referral Code: <span className="text-green-600">{user.referralCode}</span>
        </h3>
        <div className="flex flex-col items-center gap-2">
          <QRCode value={referralLink} />
          <p className="text-sm text-gray-500 break-all">
            Referral Link: <a href={referralLink} className="text-blue-500 underline">{referralLink}</a>
          </p>
        </div>
      </div>

      {/* Upline Tree */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          📚 Your 10-Level Referral Upline Tree
        </h3>
        {user.referralTree.length === 0 ? (
          <p className="text-gray-500">You were not referred by anyone.</p>
        ) : (
          <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
            {user.referralTree.map((id, index) => (
              <li key={id}>
                <span className="font-medium">Level {index + 1}:</span> {id}
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Profile Info */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📝 Your Profile Info</h3>
        <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-sm text-gray-600"><strong>User ID:</strong> {user._id}</p>
        <p className="text-sm text-gray-600"><strong>User ID:</strong> {user.referralCode}</p>
      </div>
    </div>
  );
};

export default Dashboard;
