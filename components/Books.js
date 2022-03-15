import React from "react";
import DataGrid from "react-data-grid";

function Books() {
  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ];

  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">Books I Read:</h3>
      <DataGrid columns={columns} rows={rows} />;
    </div>
  );
}

export default Books;
