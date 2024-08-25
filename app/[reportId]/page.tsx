import { Col, Row } from 'antd';
import ReportDetail from '@/components/sections/ReportDetail';
import ReportSettingCard from '@/components/cards/ReportSettingCard';

interface Props {
  params: {
    reportId: string;
  };
}

const ReportPage: React.FC<Props> = ({ params }) => {
  return (
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <ReportDetail reportId={params.reportId} />
        </Col>
        <Col span={8}>
          <ReportSettingCard />
        </Col>
      </Row>
  );
};

export default ReportPage;
