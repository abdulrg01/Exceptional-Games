"use client";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const FeaturedSection = () => {
  const games = [
    {
      title: "Epic Adventure",
      description:
        "Embark on a thrilling journey through magical lands filled with challenges and treasures.",
      image: "/laptop.jpg",
      trailer: "https://www.youtube.com/embed/sample1",
      rating: 4.8,
      accolade: "Game of the Year - Space Game Awards 2023",
    },
    {
      title: "Galactic Wars",
      description:
        "Fight in epic space battles and save the galaxy in this action-packed shooter.",
      image: "/image-1.jpg",
      trailer: "https://www.youtube.com/embed/sample2",
      rating: 4.7,
      accolade: "Best Action Game - Cyber Gaming Expo 2023",
    },
    {
      title: "Puzzle Paradise",
      description:
        "Solve intricate puzzles and unlock the secrets of a mysterious island.",
      image: "/hp.jpg",
      trailer: "https://www.youtube.com/embed/sample3",
      rating: 4.9,
      accolade: "Most Immersive World - Fantasy Game Guild 2023",
    },
    {
      title: "Epic Adventure",
      description:
        "Embark on a thrilling journey through magical lands filled with challenges and treasures.",
      image: "/laptop.jpg",
      trailer: "https://www.youtube.com/embed/sample1", // Replace with your trailer link
      rating: 4.8,
      accolade: "Game of the Year - Space Game Awards 2023",
    },
    {
      title: "Galactic Wars",
      description:
        "Fight in epic space battles and save the galaxy in this action-packed shooter.",
      image: "/image-1.jpg",
      trailer: "https://www.youtube.com/embed/sample2",
      rating: 4.7,
      accolade: "Best Action Game - Cyber Gaming Expo 2023",
    },
    {
      title: "Puzzle Paradise",
      description:
        "Solve intricate puzzles and unlock the secrets of a mysterious island.",
      image: "/hp.jpg",
      trailer: "https://www.youtube.com/embed/sample3",
      rating: 4.8,
      accolade: "Game of the Year - Space Game Awards 2023",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Games</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
                <div className="relative h-56 bg-black">
                  <Image
                    src={game.image}
                    alt={`Screenshot of ${game.title}`}
                    width={1280}
                    height={7500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold">
                      {game.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    {game.accolade}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
