"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { inHouseGames } from "@/constant/page";

export function Promotions() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          In-House Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inHouseGames.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Image
                      src={promo.thumbnail}
                      alt={promo.title}
                      width={30}
                      height={30}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {promo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <code className="px-2 py-1 bg-muted rounded text-sm">
                        {promo.code}
                      </code>
                      <Button variant="outline">Checkout</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const runtime = "edge";
