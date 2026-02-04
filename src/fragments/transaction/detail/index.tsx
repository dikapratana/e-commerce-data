import { Avatar, Col, Flex, Row } from "antd";
import CardX from "../../../components/Card/cardX";
import useController from "./hooks/use-controller";
import { dateFormat } from "../../../utils/date";
import {
  colorMap,
  defaultText,
  type ChipType,
} from "../../../components/chip/constants";
import { formatIDR } from "../../../utils/idrFormat";

export default function TransactionDetailFragment() {
  const { data, loading } = useController();
  return (
    <CardX title="Detail Transaksi" loading={loading} backPath="/transaction">
      <Flex justify="space-between">
        <Flex gap={32}>
          <Flex vertical gap={4}>
            <p className="text-xs font-normal text-neutral-800">
              Kode Transaksi
            </p>
            <h1 className="text-sm font-medium text-neutral-800">
              {data?.code}
            </h1>
          </Flex>
          <Flex vertical gap={4}>
            <p className="text-xs font-normal text-neutral-800">
              Tanggal Transaksi
            </p>
            <h1 className="text-sm font-medium text-neutral-800">
              {dateFormat(data?.createdAt ?? "", "DD MMMM YYYY HH:mm")}
            </h1>
          </Flex>
        </Flex>
        <h1
          className="text-xl font-medium"
          style={{
            color: data?.status ? colorMap[data.status as ChipType] : "",
          }}
        >
          {data?.status ? defaultText[data.status as ChipType] : "-"}
        </h1>
      </Flex>

      <div className="p-4 border rounded-lg border-neutral-200 my-4">
        <h1 className="text-lg font-medium mb-4 text-neutral-800">
          Informasi Customer
        </h1>
        <Flex gap={16} align="center">
          <div>
            <Avatar size={60} />
          </div>
          <Flex vertical className="w-full">
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">
                  Nama Customer
                </p>
              </Col>
              <Col span={12}>: {data?.customerName}</Col>
            </Row>
            <Row>
              <Col span={4}>
                <p className="text-sm font-normal text-neutral-800">
                  No Pelanggan
                </p>
              </Col>
              <Col span={12}>: {data?.customerNo}</Col>
            </Row>
          </Flex>
        </Flex>
      </div>
      <div>
        <h1 className="text-lg font-medium mb-4 text-neutral-800">
          Informasi Paket
        </h1>
        <Flex>
          <Flex gap={16} align="center" className="w-2/3">
            <div>
              <div className="w-20 h-20 bg-neutral-300 rounded-lg flex justify-center items-center" />
            </div>
            <Flex vertical className="w-full">
              <h1 className="text-base text-neutral-800 font-medium">
                {data?.packageName}
              </h1>
              <Row>
                <Col span={4}>Provider</Col>
                <Col span={12}>: {data?.providerName}</Col>
              </Row>
              <Row>
                <Col span={4}>Kuota</Col>
                <Col span={12}>
                  : {data?.packageData?.quota}
                  {data?.packageData?.quotaUnit}
                </Col>
              </Row>
              <Row>
                <Col span={4}>Masa Aktif</Col>
                <Col span={12}>: {data?.packageData?.validity} Hari</Col>
              </Row>
            </Flex>
          </Flex>
          <Flex vertical className="w-1/3">
            <p>Total Bayar</p>
            <h1 className="font-medium text-xl">{formatIDR(data?.price)}</h1>
          </Flex>
        </Flex>
      </div>
    </CardX>
  );
}
