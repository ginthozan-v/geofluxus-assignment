'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  DatePicker,
  Flex,
  Input,
  Modal,
  Row,
  Typography,
} from 'antd';
import { useRouter } from 'next/navigation';

import { useState, type CSSProperties, type FC } from 'react';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const gridStyle: CSSProperties = {
  textAlign: 'center',
  width: '100%',
  borderRadius: '3px',
};

const iconStyle: CSSProperties = {
  backgroundColor: '#F0F6FF',
  color: '#152BEE',
  width: '72px',
  height: '72px',
  fontSize: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
};

type Props = {
  Icon: React.ElementType;
  title: string;
  description: string;
  link: string;
};

const ReportCard: FC<Props> = ({ Icon, title, description, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [naam, setNaam] = useState('');
  const [date, setDate] = useState<any>('');

  const router = useRouter();

  const handleOk = () => {
    router.push(
      `${link}?naam=${naam}&startDate=${new Date(
        date[0]
      ).toLocaleDateString()}&endDate=${new Date(date[1]).toLocaleDateString()}`
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card style={gridStyle}>
        <Icon style={iconStyle} />
        <Row justify="center">
          <Title level={5}>{title}</Title>
          <Text type="secondary">{description}</Text>
        </Row>
        <Row justify="center" style={{ marginTop: 16 }}>
          <Button
            type="primary"
            iconPosition="end"
            icon={<ArrowRightOutlined />}
            onClick={() => setIsModalOpen(true)}
          >
            Aanmaken
          </Button>
        </Row>
      </Card>

      <Modal
        title="Afval rapport aanmaken"
        open={isModalOpen}
        onOk={handleOk}
        cancelText="Sluiten"
        onCancel={handleCancel}
        okText="Genereer"
      >
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Naam</Typography.Title>
            <Input
              placeholder="Naam"
              onChange={(e) => setNaam(e.target.value)}
            />
          </div>
          <div>
            <Typography.Title level={5}>Period</Typography.Title>
            <RangePicker onCalendarChange={(e) => setDate(e)} />
          </div>
        </Flex>
      </Modal>
    </>
  );
};

export default ReportCard;
