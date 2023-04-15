import React from "react";

const ViolationTable = () => {
  const data = [
    {
      category: "LTO Violation fee relative to Licensing",
      count: 10,
    },
    {
      category: "LTO Fines and Penalties connected with car registration/renewal",
      count: 5,
    },
    {
      category: "LTO Fines and Penalties in connection with vehicles accessories, equipment, parts",
      count: 8,
    },
    {
      category: "Traggic Violation Notice for Unattended Vehicle",
      count: 2,
    },
  ];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop:"3px"
  };

  const thStyle = {
    backgroundColor: "#75D4FF",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "8px",
    textAlign: "left",
    
  };

  const tdStyle = {
    border: "0px",
    padding: "8px",
    textAlign: "left",
    
  };

  const trEvenStyle = {
    backgroundColor: "#D9F3FF",
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Category</th>
          <th style={thStyle}>Number of Violations</th>
        </tr>
      </thead>
      <tbody>
        {data.map((violation, index) => (
          <tr
            key={violation.category}
            style={index % 2 === 0 ? trEvenStyle : null}
          >
            <td style={tdStyle}>{violation.category}</td>
            <td style={tdStyle}>{violation.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViolationTable;
