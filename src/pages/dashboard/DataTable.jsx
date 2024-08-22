import React from "react";

const DataTable = () => {
  const data = [
    {
      name: "simran1",
      date: "8/20/2024 4:51:12 PM",
      delivery: "Export",
    },
  ];

  const handleDelete = () => {
    // Handle delete functionality here
    console.log("Delete button clicked");
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "40px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#f4f4f4",
              borderBottom: "2px solid black",
            }}
          >
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Delivery</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>{item.name}</td>
              <td style={{ padding: "10px" }}>{item.date}</td>
              <td style={{ padding: "10px" }}>{item.delivery}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <button
                  onClick={handleDelete}
                  style={{
                    backgroundColor: "#007bff",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "10px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i className="fa fa-trash">Delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
