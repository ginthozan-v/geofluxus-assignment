'use client';
import { Button, Row } from 'antd';
import React from 'react';
import ReportDescCard from '../cards/ReportDescCard';
import ReportListItemCard from '../cards/ReportListItemCard';
import { report } from '@/constants/data';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

type Props = {
  reportId: string;
};

const ReportDetail = ({ reportId }: Props) => {
  const router = useRouter();
  const reportData = report.find((x) => x.id === reportId);

  const reportItems = [
    {
      id: 'verwerkingsmethodes',
      title: 'Verwerkingsmethodes',
    },
    {
      id: 'afvalstromen',
      title: 'Afvalstromen',
    },
    {
      id: 'verwerkers',
      title: 'Verwerkers',
    },
    {
      id: 'materialen',
      title: 'Materialen',
    },
  ];

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    }
  };

  return (
    <>
      <Row>
        <Button
          icon={<ArrowLeftOutlined />}
          size="middle"
          style={{ marginBottom: '10px' }}
          onClick={() => goBack()}
        >
          Terug naar overzicht
        </Button>
      </Row>
      <Row gutter={[0, 10]}>
        {reportData && (
          <ReportDescCard
            title={reportData.title}
            description={reportData.description}
            content={reportData.content}
          />
        )}
        {reportItems?.map((item, i) => (
          <ReportListItemCard
            key={item.id}
            id={i}
            title={item.title}
            anchor={item.id}
          />
        ))}
      </Row>
    </>
  );
};

export default ReportDetail;
