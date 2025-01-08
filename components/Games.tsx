import Image from "next/image";
import Container from "./Container";

export default function Games() {
  const publishedGames = [
    {
      title: "Adventure Quest",
      thumbnail: "/game3.avif",
      description: "An epic journey through uncharted lands.",
      trailer: "https://www.youtube.com/embed/dummy-trailer",
      screenshots: ["/game3.avif", "/game3.avif"],
      purchaseLink: "https://store.example.com/adventure-quest",
      developer: "Indie Studio Alpha",
    },
    {
      title: "Pixel Hero",
      thumbnail: "/game1.avif",
      description: "A pixel art platformer with unique mechanics.",
      trailer: "https://www.youtube.com/embed/dummy-trailer2",
      screenshots: ["/game3.avif", "/game3.avif"],
      purchaseLink: "https://store.example.com/pixel-hero",
      developer: "Indie Studio Beta",
    },
  ];

  const inHouseGames = [
    {
      title: "Code Breakers",
      thumbnail: "/game1.avif",
      description: "A puzzle game to challenge your logic.",
    },
    {
      title: "Space Odyssey",
      thumbnail: "/game2.avif",
      description: "Explore the universe in this sci-fi adventure.",
    },
  ];

  return (
    <Container>
      <section className="container mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Games We&apos;ve Published
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {publishedGames.map((game, index) => (
              <div
                key={index}
                className="bg-muted/50 p-6 rounded-lg shadow-lg flex flex-col"
              >
                <Image
                  width={100}
                  height={100}
                  src={game.thumbnail}
                  alt={`${game.title} Thumbnail`}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <iframe
                  src={game.trailer}
                  className="w-full h-56 mb-4"
                  title={`${game.title} Trailer`}
                  allowFullScreen
                ></iframe>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {game.screenshots.map((screenshot, idx) => (
                    <Image
                      width={100}
                      height={100}
                      key={idx}
                      src={screenshot}
                      alt={`${game.title} Screenshot ${idx + 1}`}
                      className="rounded-lg"
                    />
                  ))}
                </div>
                <a
                  href={game.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mb-2"
                >
                  Purchase/Play
                </a>
                <p className="text-gray-400 text-sm">
                  Developed by{" "}
                  <span className="text-gray-300">{game.developer}</span>.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Section */}
        <section>
          <h1 className="text-4xl font-bold mb-8 text-center">
            In-House Projects
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {inHouseGames.map((game, index) => (
              <div
                key={index}
                className="bg-muted/50 p-6 rounded-lg shadow-lg flex flex-col"
              >
                <Image
                  width={100}
                  height={100}
                  src={game.thumbnail}
                  alt={`${game.title} Thumbnail`}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <p className="text-gray-400">{game.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </Container>
  );
}
