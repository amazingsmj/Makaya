//src/
import React, { useState } from "react";
import CameroonMap from "../components/CameroonMap";
import { MdHeight } from "react-icons/md";
import { Table } from "antd";

function Map() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="d-flex flex-column flex-xl-row justify-content-between">
      <div className="flex-fill m-3 border">
        <Table
          columns={[
            {
              title: "Candidat",
              dataIndex: "title",
            },
            {
              title: "Parti",
              dataIndex: "quantity",
            },
            {
              title: "Nombre de voies",
              dataIndex: "discountedPrice",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </div>
      <div className="flex-fill m-3 border" style={mapStyle}>
        <h1>Map</h1>
        <CameroonMap />
      </div>
    </div>
  );
}

const mapStyle = { maxHeight: "800px", overflow: "hidden" };

export default Map;
