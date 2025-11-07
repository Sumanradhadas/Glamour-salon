import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, Sparkles, Heart } from "lucide-react";
import heroImage from "@assets/stock_images/luxury_beauty_salon__e684b049.jpg";

export default function Home() {
  const features = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Expert cuts, colors, and treatments tailored to your unique beauty",
    },
    {
      icon: Sparkles,
      title: "Makeup Artistry",
      description: "Professional makeup for any occasion, from natural to glamorous",
    },
    {
      icon: Heart,
      title: "Spa & Wellness",
      description: "Rejuvenating treatments for complete relaxation and self-care",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Glamour Beauty Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          </div>
          <h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent"
            data-testid="text-hero-title"
          >
            Glamour Beauty Salon
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light" data-testid="text-hero-subtitle">
            Where Elegance Meets Expertise
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-hero-description">
            Experience luxury beauty services in a sophisticated, modern setting. Our expert team transforms beauty into an art form.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="glow-primary transition-smooth hover:scale-105"
              data-testid="button-book-now-hero"
            >
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12" data-testid="text-services-heading">
            Our Signature Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass p-8 hover:scale-105 transition-smooth group hover:shadow-lg hover:shadow-primary/20"
                data-testid={`card-feature-${index}`}
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-cta-heading">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-description">
            Book your appointment today and experience the Glamour difference
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="glow-primary-sm"
              data-testid="button-contact-cta"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">© 2024 Glamour Beauty Salon. A WebGlow Portfolio Project.</p>
        </div>
      </footer>
    </div>
  );
}
