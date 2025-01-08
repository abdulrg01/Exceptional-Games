import Container from "./Container";
import { Card } from "./ui/card";

export default function Services() {
  const services = [
    {
      title: "Marketing & Promotion",
      description:
        "Comprehensive campaigns to ensure your game reaches its target audience through social media, influencers, and advertisements.",
      icon: "📢",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing to identify and fix bugs, ensuring a smooth and enjoyable gaming experience.",
      icon: "✅",
    },
    {
      title: "Community Management",
      description:
        "Building and managing a thriving community to keep players engaged and foster loyalty.",
      icon: "🤝",
    },
    {
      title: "Legal",
      description:
        "Handling licensing, contracts, and compliance to safeguard your intellectual property and business interests.",
      icon: "⚖️",
    },
    {
      title: "Distribution",
      description:
        "Efficiently distributing your game across multiple platforms, including Steam, PlayStation, Xbox, and mobile stores.",
      icon: "🌍",
    },
    {
      title: "Additional Services",
      description:
        "Custom solutions tailored to your unique needs, from localization to post-launch support.",
      icon: "✨",
    },
  ];

  return (
    <Container>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
