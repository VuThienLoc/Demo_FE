// Consultant.jsx
import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  Divider,
  List,
  Avatar,
  Space,
} from "antd";
import {
  CheckCircleOutlined,
  TeamOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Consultant profiles
const consultants = [
  {
    name: "Dr. Sarah Johnson",
    title: "Senior Health Consultant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Specializing in women's health with over 10 years of experience in reproductive health counseling.",
    availability: "Mon-Fri",
  },
  {
    name: "Dr. Michael Chen",
    title: "Health & Wellness Specialist",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Expert in holistic health approaches with a focus on preventative care and wellness strategies.",
    availability: "Tue-Sat",
  },
  {
    name: "Dr. Amara Patel",
    title: "Sexuality Education Expert",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    description:
      "Certified sexuality educator with expertise in gender care and comprehensive sexual health education.",
    availability: "Mon-Thu",
  },
];

// Service benefits
const benefits = [
  {
    title: "Personalized Care",
    description:
      "Tailored health plans that address your specific needs and concerns",
    icon: <CheckCircleOutlined style={{ fontSize: 24, color: "#1677ff" }} />,
  },
  {
    title: "Confidential Consultations",
    description:
      "Private and secure sessions that respect your privacy and personal information",
    icon: (
      <SafetyCertificateOutlined style={{ fontSize: 24, color: "#1677ff" }} />
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book appointments that fit your schedule with easy rescheduling options",
    icon: <CalendarOutlined style={{ fontSize: 24, color: "#1677ff" }} />,
  },
  {
    title: "Expert Team",
    description:
      "Access to a diverse team of qualified healthcare professionals",
    icon: <TeamOutlined style={{ fontSize: 24, color: "#1677ff" }} />,
  },
];

// Pricing plans
const plans = [
  {
    name: "Basic",
    price: "$19",
    features: ["1 Consultation", "Email Support", "Access to Resources"],
    button: (
      <Button type="primary" block>
        Choose Basic
      </Button>
    ),
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    features: [
      "5 Consultations",
      "Priority Email Support",
      "Personalized Resources",
    ],
    button: (
      <Button type="primary" block>
        Choose Pro
      </Button>
    ),
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Unlimited Consultations", "24/7 Support", "Custom Programs"],
    button: (
      <Button type="default" block>
        Contact Sales
      </Button>
    ),
    highlight: false,
  },
];

export default function Consultant() {
  return (
    <div
      style={{ background: "#f9fafb", minHeight: "100vh", padding: "24px 0" }}
    >
      {/* Hero Section */}
      <Card
        style={{ maxWidth: screen, margin: "0 auto 48px", textAlign: "center" }}
        variant={false}
      >
        <Title level={1} style={{ color: "#1677ff" }}>
          Consultation Services
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 18 }}>
          Get expert guidance, personalized resources, and priority support for
          your health and wellness journey at Gendercare.
        </Paragraph>
      </Card>

      {/* Benefits Section */}
      <div style={{ maxWidth: 1000, margin: "0 auto 48px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Why Choose Our Consultation Services
        </Title>
        <Row gutter={[24, 24]}>
          {benefits.map((benefit) => (
            <Col xs={24} sm={12} key={benefit.title}>
              <Card bordered={false}>
                <Space align="start">
                  {benefit.icon}
                  <div>
                    <Title level={4} style={{ marginTop: 0 }}>
                      {benefit.title}
                    </Title>
                    <Paragraph>{benefit.description}</Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Meet Our Consultants Section */}
      <div style={{ maxWidth: 1000, margin: "0 auto 48px", padding: "0 24px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Meet Our Consultants
        </Title>
        <Row gutter={[24, 24]}>
          {consultants.map((consultant) => (
            <Col xs={24} md={8} key={consultant.name}>
              <Card
                bordered
                cover={
                  <div style={{ padding: "24px 0 0", textAlign: "center" }}>
                    <Avatar size={100} src={consultant.avatar} />
                  </div>
                }
                style={{ textAlign: "center" }}
              >
                <Title level={4} style={{ margin: "8px 0" }}>
                  {consultant.name}
                </Title>
                <Text
                  type="secondary"
                  style={{ display: "block", marginBottom: "12px" }}
                >
                  {consultant.title}
                </Text>
                <Paragraph>{consultant.description}</Paragraph>
                <Divider style={{ margin: "12px 0" }} />
                <Paragraph>
                  <Text strong>Available: </Text>
                  {consultant.availability}
                </Paragraph>
                <Button type="primary" ghost>
                  Book Appointment
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Packages Section */}
      <div style={{ maxWidth: 1000, margin: "0 auto 48px", padding: "0 24px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Choose Your Plan
        </Title>
        <Row gutter={24} justify="center">
          {plans.map((plan) => (
            <Col xs={24} md={8} key={plan.name} style={{ marginBottom: 24 }}>
              <Card
                title={
                  <div style={{ padding: "15px", textAlign: "center" }}>
                    <Title
                      level={3}
                      style={{
                        color: plan.highlight ? "#1677ff" : "#1d4ed8",
                        margin: 0,
                      }}
                    >
                      {plan.name}
                    </Title>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        margin: "12px 0",
                      }}
                    >
                      {plan.price}
                      <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                        /mo
                      </span>
                    </div>
                  </div>
                }
                variant={plan.highlight}
                headStyle={plan.highlight ? { borderColor: "#1677ff" } : {}}
                style={{
                  borderColor: plan.highlight ? "#1677ff" : "#f0f0f0",
                  boxShadow: plan.highlight ? "0 0 12px #1677ff22" : undefined,
                  height: "100%",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={plan.features}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <CheckCircleOutlined style={{ color: "#1677ff" }} />
                        }
                        title={item}
                      />
                    </List.Item>
                  )}
                  style={{ marginBottom: 24 }}
                />
                {plan.button}
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Contact Section */}
      <Card
        style={{
          maxWidth: 600,
          margin: "0 auto 48px",
          textAlign: "center",
          background: "#e0f2fe",
        }}
        variant={false}
      >
        <Title level={3} style={{ color: "#1677ff" }}>
          Need help choosing?
        </Title>
        <Paragraph>
          Contact our team for personalized recommendations or to learn more
          about our services.
        </Paragraph>
        <Button type="primary" href="/contact">
          Contact Us
        </Button>
      </Card>
    </div>
  );
}
