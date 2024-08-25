'use client';
import { Card, Row, Typography } from 'antd';

type Props = {
  title: string;
  description: string;
  content: any;
};

const { Title, Text } = Typography;

const ReportDescCard = ({ title, description, content }: Props) => {
  return (
    <Card style={{ borderRadius: 3, width: '100%' }}>
      <Title level={3}>{title}</Title>
      <Text type="secondary">{description}</Text>
      <Row style={{ marginTop: '10px' }}>
        <ol style={{ listStylePosition: 'inside', lineHeight: '30px' }}>
          <Title level={5}>Inhoudsopgave</Title>
          {content?.map((item: any) => (
            <li key={item.anchor}>
              <a href={`#${item.anchor}`}>{item.title}</a>
            </li>
          ))}
        </ol>
      </Row>
    </Card>
  );
};

export default ReportDescCard;
