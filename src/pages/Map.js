//src/
import React, { useState, useEffect } from "react";
import CameroonMap from "../components/CameroonMap";
import { MdHeight } from "react-icons/md";
import { Table } from "antd";
import { getCustomers } from "../API";
import SideMap from "./SideMap";

function Map() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      getCustomers().then((res) => {
        setDataSource(res.users);
        setLoading(false);
      });
    }, []);

  return (
    <div className="d-flex flex-column flex-xl-row justify-content-between">
      <div className="flex-fill m-3 border" style= {tableStyle}>
        <Table
          columns={[
            {
              title: "Candidat",
              dataIndex: "firstName",
            },
            {
              title: "Parti",
              dataIndex: "lastName",
            },
            {
              title: "Nombre de voies",
              dataIndex: "discountedPrice",
            },
            {
              title: "Couleur",
              dataIndex: "color",
              render: (color) => (
                <div
                  style={{
                    width: 30,
                    height: 20,
                    backgroundColor: color,
                    borderRadius: "20%",
                    border: "1px solid #000",
                  }}
                ></div>
              ),
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
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
const tableStyle = { maxWidth : "50%"}

export default Map;
