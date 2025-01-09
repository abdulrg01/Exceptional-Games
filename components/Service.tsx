import { servicesListSection } from "@/constant/page";
import Container from "./Container";
import { Card } from "./ui/card";

export default function Services() {
  return (
    <Container>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesListSection.map((service, index) => (
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
