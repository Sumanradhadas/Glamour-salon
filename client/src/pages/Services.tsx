import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import hairImage from "@assets/stock_images/professional_hair_st_d0347780.jpg";
import makeupImage from "@assets/stock_images/makeup_artist_beauty_483b3e19.jpg";
import spaImage from "@assets/stock_images/spa_wellness_massage_12c1c80d.jpg";

export default function Services() {
  const services = [
    {
      title: "Hair Styling",
      image: hairImage,
      description: "Expert cuts, vibrant colors, and nourishing treatments designed to bring out your hair's natural beauty.",
      features: ["Precision Cuts", "Color Treatments", "Deep Conditioning", "Styling for Events"],
    },
    {
      title: "Makeup Artistry",
      image: makeupImage,
      description: "Professional makeup application for weddings, photoshoots, special events, or everyday elegance.",
      features: ["Bridal Makeup", "Special Events", "Photoshoot Ready", "Natural & Glam Looks"],
    },
    {
      title: "Spa & Wellness",
      image: spaImage,
      description: "Indulge in our rejuvenating spa treatments that refresh your body, mind, and spirit.",
      features: ["Facial Treatments", "Massage Therapy", "Body Treatments", "Aromatherapy"],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent"
            data-testid="text-services-title"
          >
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 mx-auto mb-6 rounded-full glow-primary-sm" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Discover our comprehensive range of luxury beauty services, each designed to enhance your natural radiance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-smooth"
              data-testid={`card-service-${index}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full hover-elevate"
                    data-testid={`button-book-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Book This Service
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-strong rounded-xl p-12">
          <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-consultation-heading">
            Not Sure Which Service to Choose?
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-consultation-description">
            Our beauty experts are here to help you find the perfect treatment
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="glow-primary-sm"
              data-testid="button-consultation"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
