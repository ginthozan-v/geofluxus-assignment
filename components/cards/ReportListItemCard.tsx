'use client';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Row, Typography } from 'antd';

const { Title, Text } = Typography;
type Props = {
  id: number;
  title: string;
  anchor: string;
};

const ReportListItemCard = ({ id, title, anchor }: Props) => {
  const downloadPdf = () => {
    window.print();
  };
  return (
    <Card key={id} id={anchor} style={{ borderRadius: 3 }}>
      <Row justify="space-between">
        <Title level={5}>
          {id + 1}. {title}
        </Title>
        <Button
          icon={<DownloadOutlined />}
          iconPosition={'end'}
          style={{ marginBottom: '5px' }}
          onClick={() => downloadPdf()}
        >
          Download data
        </Button>
      </Row>
      <Text type="secondary">
        In het onderstaande overzicht en tabel vindt u de toegepaste
        verwerkingsmethoden voor uw afval, inclusief de classificatie als
        gevaarlijk of niet-gevaarlijk afval. De tabel biedt een gedetailleerd
        overzicht van specifieke verwerkingsmethoden en welke afvalstromen
        volgens deze wijze zijn verwerkt.{' '}
      </Text>
    </Card>
  );
};

export default ReportListItemCard;
