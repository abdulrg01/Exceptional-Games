import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./Container";

export default function Contact() {
  return (
    <Container>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {/* Contact Information */}
        <section className="mb-16 text-center">
          <p className="text-lg mb-4">
            Reach out to us via email, phone, or social media for any inquiries.
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:contact@gamepublisher.com"
              className="text-blue-500"
            >
              contact@gamepublisher.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://twitter.com/gamepublisher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <Button>
                <Twitter />
              </Button>
            </a>
            <a
              href="https://facebook.com/gamepublisher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <Button>
                <Facebook />
              </Button>
            </a>
            <a
              href="https://linkedin.com/company/gamepublisher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <Button>
                <Linkedin />
              </Button>
            </a>
          </div>
        </section>

        {/* Forms */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Publishing Partnerships Form */}
          <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Publishing Partnerships</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <textarea
                placeholder="Tell us about your project"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white h-32"
              ></textarea>
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          {/* Media Inquiries Form */}
          <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white h-32"
              ></textarea>
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          {/* General Contact Form */}
          <div className="bg-muted/50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">General Contact</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 rounded-lg bg-background text-white h-32"
              ></textarea>
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </section>
    </Container>
  );
}
