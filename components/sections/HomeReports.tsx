'use client'
import { Col, Row, Typography } from 'antd';
import ReportCard from '../cards/ReportCard';
import { report } from '@/constants/data';
const { Title } = Typography;

const HomeReports = () => {
  const data = report;

  return (
    <>
      <Title level={5}>Rapport aanmaken</Title>
      <Row gutter={[20, 20]}>
        {data?.map((report) => (
          <Col key={report.id} span={8}>
            <ReportCard
              Icon={report.Icon}
              title={report.title}
              description={report.description}
              link={'/' + report.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeReports;
