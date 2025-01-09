import Image from "next/image";
import { Card } from "./ui/card";
import Container from "./Container";
import { blogPosts } from "@/constant/page";

export default function Blog() {
  return (
    <Container>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog & News</h1>
        <p className="text-center text-lg mb-12">
          Stay updated with the latest news, insights, and stories from our
          publishing journey.
        </p>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-500 uppercase">
                  {post.category}
                </p>
                <h2 className="text-2xl font-bold my-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-blue-500 hover:text-blue-600 font-bold"
                >
                  Read More →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
