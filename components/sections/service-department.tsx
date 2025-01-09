"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Container from "../Container";
import { services } from "@/constant/page";

export function ServiceDepartment() {
  return (
    <Container>
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full">
                  Checkout
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export const runtime = "edge";
