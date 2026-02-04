import { Col, Flex, Row } from "antd";
import CardX from "../../../components/Card/cardX";
import useController from "./hooks/use-controller";
import { UserOutlined } from "@ant-design/icons";
import Table from "./table";

export default function CustomerDetailFragment() {
  const { data, loading, transaction } = useController();
  return (
    <CardX title="Detail Customer" loading={loading} backPath="/customer">
      <div className="p-4 border rounded-lg border-neutral-200 my-4">
        <Flex align="center" justify="space-between">
          <h1 className="text-lg font-medium mb-4 text-neutral-800">
            Informasi Customer
          </h1>
          <h1
            className="text-xl font-medium"
            style={{
              color: data?.isActive ? "green" : "red",
            }}
          >
            {data?.isActive ? "Aktif" : "Tidak Aktif"}
          </h1>
        </Flex>

        <Flex gap={16} align="center" className="w-full">
          <div>
            <div className="w-24 h-24 bg-neutral-300 rounded-lg flex justify-center items-center">
              <UserOutlined className="text-6xl" />
            </div>
          </div>
          <Flex vertical className="w-full">
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">
                  Kode Customer
                </p>
              </Col>
              <Col span={12}>: {data?.code}</Col>
            </Row>
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">Nama</p>
              </Col>
              <Col span={12}>: {data?.name}</Col>
            </Row>
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">Email</p>
              </Col>
              <Col span={12}>: {data?.email}</Col>
            </Row>
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">Provider</p>
              </Col>
              <Col span={12}>: {data?.provider}</Col>
            </Row>
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">
                  No Pelanggan
                </p>
              </Col>
              <Col span={12}>: {data?.noTelp}</Col>
            </Row>
          </Flex>
        </Flex>
      </div>
      <h1 className="text-lg font-medium mb-4 text-neutral-800">
        Riwayat Trannsaksi
      </h1>
      <Table data={transaction?.data ?? []} isLoading={transaction.isLoading} />
    </CardX>
  );
}
