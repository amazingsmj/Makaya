import React from "react";
import {
  Avatar,
  Button,
  Space,
  Table,
  Typography,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Rate,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../API";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Bureaux = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const handleAjouterBureau = () => {
    setIsEditMode(false);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleModifier = (record) => {
    setIsEditMode(true);
    setEditingRecord(record);
    setIsModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingRecord(null);
  };

  const handleSubmit = (values) => {
    const newBureau = {
      id: isEditMode ? editingRecord.id : Date.now(),
      ...values,
      thumbnail: "https://via.placeholder.com/150", // Exemple de photo par défaut
    };

    const prevDataSource = dataSource;
    if (isEditMode) {
      setDataSource(
        prevDataSource.map((bureau) =>
          bureau.id === editingRecord.id ? newBureau : bureau
        )
      );
    } else {
      setDataSource([...prevDataSource, newBureau]);
    }

    setIsModalVisible(false);
    form.resetFields();
    setEditingRecord(null);
  };

  const handleRetirer = (record) => {
    setDataSource(dataSource.filter((bureau) => bureau.id !== record.id));
  };

  return (
    <div>
      <Space size={20} direction="vertical" style={{ width: "100%" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={4}>Bureaux de votes</Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={handleAjouterBureau}>
              Ajouter un Bureau
            </Button>
          </Col>
        </Row>

        <Table
          rowKey="id"
          loading={loading}
          columns={[
            {
              title: "Bureau N°",
              dataIndex: "thumbnail",
              render: (link) => <Avatar src={link} />,
            },
            {
              title: "Nom",
              dataIndex: "title",
            },
            {
              title: "Centre de vote",
              dataIndex: "price",
              render: (value) => <span>{value}</span>,
            },
            {
              title: "Président du Bureau",
              dataIndex: "brand",
            },
            {
              title: "Capacité Max",
              dataIndex: "rating",
              render: (rating) => <Rate value={rating} allowHalf disabled />,
            },
            {
              title: "Inscrits",
              dataIndex: "stock",
            },
            {
              title: "Votes Blancs",
              dataIndex: "category",
            },
            {
              title: "Action",
              render: (_, record) => (
                <Space size="middle">
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    onClick={() => handleModifier(record)}
                  />
                  <Button
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleRetirer(record)}
                  />
                </Space>
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
        />

        <Modal
          title={isEditMode ? "Modifier un Bureau" : "Ajouter un Bureau"}
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Nom du Bureau"
              name="title"
              rules={[{ required: true, message: "Veuillez entrer un nom" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Centre de vote"
              name="price"
              rules={[{ required: true, message: "Veuillez entrer le centre" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Président du Bureau"
              name="brand"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer le président du bureau",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Capacité Max"
              name="rating"
              rules={[
                { required: true, message: "Veuillez entrer la capacité" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Nombre d'inscrits"
              name="stock"
              rules={[
                { required: true, message: "Veuillez entrer le nombre d'inscrits" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Votes Blancs"
              name="category"
              rules={[
                { required: true, message: "Veuillez entrer les votes blancs" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button onClick={handleCancel}>Annuler</Button>
                <Button type="primary" htmlType="submit">
                  {isEditMode ? "Modifier" : "Ajouter"}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </div>
  );
};

export default Bureaux;
