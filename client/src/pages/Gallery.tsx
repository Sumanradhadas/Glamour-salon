import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import gallery1 from "@assets/stock_images/woman_before_after_h_ac411f5e.jpg";
import gallery2 from "@assets/stock_images/woman_before_after_h_9c1d047c.jpg";
import gallery3 from "@assets/stock_images/woman_before_after_h_ce5b8771.jpg";
import hair1 from "@assets/stock_images/professional_hair_st_d0347780.jpg";
import makeup1 from "@assets/stock_images/makeup_artist_beauty_483b3e19.jpg";
import spa1 from "@assets/stock_images/spa_wellness_massage_12c1c80d.jpg";

export default function Gallery() {
  const transformations = [
    {
      image: gallery1,
      title: "Hair Color Transformation",
      category: "Hair Styling",
      description: "Complete hair color transformation with balayage highlights",
    },
    {
      image: gallery2,
      title: "Bridal Makeup",
      category: "Makeup",
      description: "Elegant bridal makeup with a natural glow",
    },
    {
      image: gallery3,
      title: "Hair Styling & Cut",
      category: "Hair Styling",
      description: "Modern layered cut with professional styling",
    },
    {
      image: hair1,
      title: "Professional Blow-Dry",
      category: "Hair Styling",
      description: "Luxurious blow-dry service for volume and shine",
    },
    {
      image: makeup1,
      title: "Evening Glam Look",
      category: "Makeup",
      description: "Dramatic evening makeup for special occasions",
    },
    {
      image: spa1,
      title: "Spa Relaxation",
      category: "Spa & Wellness",
      description: "Ultimate relaxation with our signature spa treatments",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent"
            data-testid="text-gallery-title"
          >
            Our Work
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 mx-auto mb-6 rounded-full glow-primary-sm" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
            Witness the stunning transformations our expert team creates every day
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Card
              key={index}
              className="glass overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-smooth"
              data-testid={`card-gallery-${index}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-smooth">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-primary/20 text-primary border-primary/30"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-smooth" data-testid={`text-gallery-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 opacity-0 group-hover:opacity-100 transition-smooth" data-testid={`text-gallery-description-${index}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 glass-strong rounded-xl p-12">
          <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-transformation-heading">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-transformation-description">
            Let our experts create your perfect look
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="hover:scale-105 transition-smooth glow-primary-sm"
              data-testid="button-book-transformation"
            >
              Book Your Session
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
