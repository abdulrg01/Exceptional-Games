"use client";

import Container from "./Container";
import { Card } from "./ui/card";

export default function Donation() {
  const tiers = [
    {
      title: "Bronze Tier",
      amount: "$5",
      description:
        "Get a personalized thank-you email and social media shoutout.",
      buttonText: "Donate $5",
    },
    {
      title: "Silver Tier",
      amount: "$20",
      description:
        "Includes all Bronze rewards, plus early access to our game trailers and updates.",
      buttonText: "Donate $20",
    },
    {
      title: "Gold Tier",
      amount: "$50",
      description:
        "All Silver rewards, plus an exclusive digital wallpaper and in-game credit.",
      buttonText: "Donate $50",
    },
    {
      title: "Platinum Tier",
      amount: "$100",
      description:
        "All Gold rewards, plus access to behind-the-scenes content and exclusive developer Q&A sessions.",
      buttonText: "Donate $100",
    },
  ];

  return (
    <Container>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Support Us</h1>
        <p className="text-center text-lg mb-12">
          Your contributions help us create amazing games and support indie
          developers. Choose a tier and join our journey!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow bg-muted/50 hover:bg-accent cursor-pointer"
            >
              <h2 className="text-2xl font-bold mb-4">{tier.title}</h2>
              <p className="text-3xl font-bold text-blue-400 mb-4">
                {tier.amount}
              </p>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
                onClick={() =>
                  alert(`Redirecting to payment for ${tier.amount}`)
                }
              >
                {tier.buttonText}
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Not ready to choose a tier? You can still contribute any amount and
            help us bring more creative projects to life!
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            onClick={() => alert("Redirecting to custom donation page")}
          >
            Donate Any Amount
          </button>
        </div>
      </section>
    </Container>
  );
}
