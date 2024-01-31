import React from "react";

const Table = (props) => {
  const customTableClass = {
    width: '100%',
    overFlowX: 'auto'
  }
  const theadStyle = {
    fontSize: '12px'
  } 
  const tbodyStyle = {
    fontSize: '10px',
  }


  return (
    <table className="tabel" style={customTableClass}>
      <thead style={theadStyle}>
        <tr>
          <th className="p-2">id</th>
          <th className="p-2">Name</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Email</th>
          <th className="p-2">Signup Data</th>
        </tr>
      </thead>
      <tbody style={tbodyStyle}>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td className="p-2">{user.id}</td>
            <td className="p-2">{user.fullName}</td>
            <td className="p-2">{user.mobileNumber}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.signupDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
