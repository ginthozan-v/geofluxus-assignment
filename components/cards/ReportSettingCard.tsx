'use client';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const { Title, Text } = Typography;

const ReportSettingCard = () => {
  const searchParams = useSearchParams();
  const naam = searchParams.get('naam');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  const downloadPdf = () => {
    window.print();
  };

  return (
    <Card
      title="Rapportage instellingen"
      style={{ borderRadius: 3, background: '#F0F6FF', borderColor: '#CBE1FD' }}
    >
      <Row>
        <Col span={24}>
          <Text type="secondary">Naam</Text>
          <Title
            type="secondary"
            level={5}
            style={{ margin: 0, fontWeight: 400 }}
          >
            {naam}
          </Title>
        </Col>
      </Row>

      <Row style={{ marginTop: '10px' }}>
        <Col span={24}>
          <Text type="secondary">Period</Text>
          <Title
            type="secondary"
            level={5}
            style={{ margin: 0, fontWeight: 400 }}
          >
            {startDate} - {endDate}
          </Title>
        </Col>
      </Row>

      <Row style={{ marginTop: '10px' }}>
        <Col span={24}>
          <Text type="secondary">Datum aangemaakt</Text>
          <Title
            type="secondary"
            level={5}
            style={{ margin: 0, fontWeight: 400 }}
          >
            08/04/2024
          </Title>
        </Col>
      </Row>

      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size="large"
        style={{ marginTop: '10px' }}
        block
      >
        Download.xsls
      </Button>
      <Button
        icon={<DownloadOutlined />}
        size="large"
        style={{ marginTop: '10px' }}
        onClick={() => downloadPdf()}
        block
      >
        Download.pdf
      </Button>
    </Card>
  );
};

export default ReportSettingCard;
