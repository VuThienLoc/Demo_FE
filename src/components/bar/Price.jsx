import { Link } from "react-router-dom";
import { Card, Button } from "antd";

const plans = [
  {
    name: "Basic",
    price: "$19",
    features: ["1 Consultation", "Email Support", "Access to Resources"],
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
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    features: ["Unlimited Consultations", "24/7 Support", "Custom Programs"],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`rounded-2xl shadow-lg transition ${
              plan.highlight ? "border-blue-600 scale-105" : "border-gray-200"
            }`}w
            variant={false}
            style={{

              borderColor: plan.highlight ? "#1890ff" : "#d9d9d9",
              backgroundColor: "#fff",
            }}
            hoverable
            title={
              <h3
                className={`text-xl font-semibold ${
                  plan.highlight ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
            }
          >
            <div className="py-12">
              <div className="text-4xl font-extrabold mb-4">
                {plan.price}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                type={plan.highlight ? "primary" : "default"}
                block
                size="large"
                className="font-semibold"
              >
                {plan.highlight ? "Get Started" : "Contact Us"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
