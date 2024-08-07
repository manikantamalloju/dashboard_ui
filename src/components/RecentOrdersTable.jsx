import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const RecentOrdersTable = () => {
  const orders = [
    {
      id: 1,
      customer: "Wade Warren",
      orderNumber: "15478256",
      amount: 124.0,
      status: "Delivered",
      avatar: "path/to/avatar1.png",
    },
    {
      id: 2,
      customer: "Jane Cooper",
      orderNumber: "48965786",
      amount: 365.02,
      status: "Delivered",
      avatar: "path/to/avatar2.png",
    },
    {
      id: 3,
      customer: "Guy Hawkins",
      orderNumber: "78958215",
      amount: 45.88,
      status: "Cancelled",
      avatar: "path/to/avatar3.png",
    },
    {
      id: 4,
      customer: "Kristin Watson",
      orderNumber: "20965732",
      amount: 65.0,
      status: "Pending",
      avatar: "path/to/avatar4.png",
    },
    {
      id: 5,
      customer: "Cody Fisher",
      orderNumber: "95715620",
      amount: 545.0,
      status: "Delivered",
      avatar: "path/to/avatar5.png",
    },
    {
      id: 6,
      customer: "Savannah Nguyen",
      orderNumber: "78514568",
      amount: 128.2,
      status: "Delivered",
      avatar: "path/to/avatar6.png",
    },
  ];

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const getSeverity = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Pending":
        return "warning";
      case "Cancelled":
        return "danger";
      default:
        return null;
    }
  };

  const customerBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={rowData.customer}
          src={rowData.avatar}
          width="32"
          className="mr-2"
        />
        <span>{rowData.customer}</span>
      </div>
    );
  };

  const customTableStyles = {
    header: {
      backgroundColor: "#333",
      color: "#fff",
    },
    row: {
      backgroundColor: "#333",
      color: "#fff",
    },
    stripedRow: {
      backgroundColor: "#444",
    },
  };

  return (
    <div>
      <h5 style={{ color: "#fff" }}>Recent Orders</h5>
      <DataTable value={orders} tableStyle={customTableStyles.row}>
        <Column
          field="customer"
          header="Customer"
          body={customerBodyTemplate}
          headerStyle={customTableStyles.header}
          bodyStyle={customTableStyles.row}
        ></Column>
        <Column
          field="orderNumber"
          header="Order No."
          headerStyle={customTableStyles.header}
          bodyStyle={customTableStyles.row}
        ></Column>
        <Column
          field="amount"
          header="Amount"
          headerStyle={customTableStyles.header}
          bodyStyle={customTableStyles.row}
        ></Column>
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          headerStyle={customTableStyles.header}
          bodyStyle={customTableStyles.row}
        ></Column>
      </DataTable>
    </div>
  );
};

export default RecentOrdersTable;
