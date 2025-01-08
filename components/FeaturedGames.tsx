import Image from 'next/image'
import { Star } from 'lucide-react'

interface Game {
  title: string
  description: string
  imageUrl: string
  rating: number
  accolade: string
}

const games: Game[] = [
  {
    title: "Cosmic Odyssey",
    description: "An epic space exploration RPG with breathtaking visuals and a compelling narrative.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    rating: 4.8,
    accolade: "Game of the Year - Space Game Awards 2023"
  },
  {
    title: "Neon Ninja",
    description: "A fast-paced, cyberpunk action game with innovative combat mechanics and stunning neon aesthetics.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    rating: 4.7,
    accolade: "Best Action Game - Cyber Gaming Expo 2023"
  },
  {
    title: "Mythic Realms",
    description: "A beautifully crafted fantasy MMORPG with rich lore and endless adventures.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    rating: 4.9,
    accolade: "Most Immersive World - Fantasy Game Guild 2023"
  }
]

export default function FeaturedGames() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={game.imageUrl}
                alt={`Screenshot of ${game.title}`}
                width={1280}
                height={720}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{game.rating.toFixed(1)}</span>
                </div>
                <p className="text-sm text-primary font-medium">{game.accolade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}