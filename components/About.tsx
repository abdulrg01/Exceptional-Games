import { Card } from "./ui/card";

export default function About() {
  return (
    <div className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Our Mission: Empowering Indie Developers
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We collaborate with indie developers to bring their visions to life,
            providing the resources, marketing, and expertise needed to ensure
            their success. Our goal is to create a thriving ecosystem where
            creativity flourishes and innovative games reach players worldwide.
          </p>
        </section>

        {/* What We Offer */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Resources</h3>
            <p className="text-gray-400">
              Access to cutting-edge tools, funding, and technical support to
              bring your games to life.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Marketing</h3>
            <p className="text-gray-400">
              Comprehensive marketing campaigns to ensure your game reaches its
              target audience.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Expertise</h3>
            <p className="text-gray-400">
              Guidance from industry veterans to navigate development and
              publishing challenges.
            </p>
          </Card>
        </section>

        {/* Development Studio Integration */}
        <section className="bg-muted/50 p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">
            Development Studio Integration
          </h2>
          <p className="text-lg text-gray-300 text-center mb-6 max-w-4xl mx-auto">
            Our in-house development studio brings years of experience to the
            publishing process, ensuring every game we publish meets the highest
            standards of quality and creativity. By integrating our expertise,
            we help developers create immersive experiences that resonate with
            players worldwide.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-400">
                Our studio has delivered award-winning games, demonstrating a
                commitment to excellence in design, storytelling, and gameplay.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-400">
                We leverage the latest tools and technologies to optimize
                development workflows and enhance game performance.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card hover:bg-accent cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4">
                Seamless Collaboration
              </h3>
              <p className="text-gray-400">
                Our team works hand-in-hand with developers, offering guidance
                and support throughout the development lifecycle.
              </p>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-gray-400 mt-2">
                We believe in working closely with developers to achieve their
                creative visions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p className="text-gray-400 mt-2">
                Empowering innovative ideas and pushing the boundaries of
                gaming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Success</h3>
              <p className="text-gray-400 mt-2">
                Ensuring every game we publish reaches its full potential.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
