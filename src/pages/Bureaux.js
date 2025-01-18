import React from 'react';
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../API";


const Bureaux = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      getInventory().then((res) => {
        setDataSource(res.products);
        setLoading(false);
      });
    }, []);

    return(
        <Space size={20} direction="vertical">
      <Typography.Title level={4}>Bureaux de votes</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Bureau N°",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Nom",
            dataIndex: "title",
          },
          {
            title: "Centre de vote",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "President du bureau",
            dataIndex: "brand",
          },
          {
            title: "Capcité Max",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "inscrits",
            dataIndex: "stock",
          },
          {
            title: "Votes blancs",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    )
};

export default Bureaux;