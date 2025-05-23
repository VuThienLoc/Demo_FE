import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Add your login logic here
    console.log("Login attempt with:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Login Card */}
      <Card
        className="w-full max-w-md relative z-10"
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Return to Home Link */}
        <Form.Item>
          <Link to="/">
            <Button
              type="link"
              icon={<ArrowLeftOutlined />}
              className="text-blue-600"
            >
              Back to Home
            </Button>
          </Link>
        </Form.Item>
        <Title level={3} className="text-center">
          Sign in to your account
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-6"
        >
          {/* Email Input */}
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign in
            </Button>
          </Form.Item>

          <Divider>Or</Divider>
          <div className="flex flex-row items-center justify-center gap-2">
            <Form.Item>
              <Button
                type="default"
                className="w-full flex items-center justify-center gap-2"
                icon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                }
              >
                Login with Google
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="default"
                className="w-full flex items-center justify-center gap-2"
                icon={
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github"
                    className="h-5 w-5"
                  />
                }
              >
                Login with Github
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
