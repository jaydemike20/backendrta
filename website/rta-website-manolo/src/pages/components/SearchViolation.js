import React from 'react';
import data from './../components/options/ViolationRecord.json'

const ViolationsTable = ({ data }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '150%',
    margin: '20px 0',
  };

  const thStyle = {
    backgroundColor: '#83F0FB',
    color: 'white',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Traffic Violation</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Address</th>
          <th style={thStyle}>Apprehending Officer</th>
          <th style={thStyle}>Driver's License Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((violation, index) => (
          <tr key={index}>
            <td style={tdStyle}>{violation.trafficViolation}</td>
            <td style={tdStyle}>{violation.date}</td>
            <td style={tdStyle}>{violation.address}</td>
            <td style={tdStyle}>{violation.officer}</td>
            <td style={tdStyle}>{violation.licenseNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SearchViolation = () => {
  const violations = [
    {
      trafficViolation: 'Speeding',
      date: 'April 15, 2023',
      address: '123 Main St.',
      officer: 'Officer Smith',
      licenseNumber: '1234567890',
    }
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const titleStyle = {
    color: 'black',
    fontSize: '32px',
    margin: '20px 0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Traffic Violations</h1>
      <ViolationsTable data={violations} />
    </div>
  );
};

export default SearchViolation;
