import Image from "next/image";
import Container from "./Container";
import { inHouseGames, publishedGames } from "@/constant/page";

export default function Games() {
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
