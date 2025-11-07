import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import team1 from "@assets/stock_images/professional_hairsty_5fab2c61.jpg";
import team2 from "@assets/stock_images/professional_hairsty_00051497.jpg";
import team3 from "@assets/stock_images/professional_hairsty_04d1b8e7.jpg";
import team4 from "@assets/stock_images/professional_hairsty_f2326c52.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Sophia Laurent",
      role: "Master Stylist & Salon Director",
      image: team1,
      bio: "With over 15 years of experience, Sophia brings European elegance and expertise to every client.",
      specialties: ["Hair Color", "Cutting", "Extensions"],
    },
    {
      name: "Isabella Martinez",
      role: "Lead Makeup Artist",
      image: team2,
      bio: "Award-winning makeup artist specializing in bridal and editorial looks that enhance natural beauty.",
      specialties: ["Bridal Makeup", "Special Events", "Photoshoots"],
    },
    {
      name: "Elena Rossi",
      role: "Senior Stylist",
      image: team3,
      bio: "Passionate about creating personalized styles that reflect each client's unique personality and lifestyle.",
      specialties: ["Precision Cuts", "Balayage", "Styling"],
    },
    {
      name: "Aria Chen",
      role: "Spa & Wellness Specialist",
      image: team4,
      bio: "Certified esthetician dedicated to holistic beauty and wellness through therapeutic spa treatments.",
      specialties: ["Facials", "Massage", "Body Treatments"],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent"
            data-testid="text-team-title"
          >
            Meet Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-400 mx-auto mb-6 rounded-full glow-primary-sm" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            Talented professionals dedicated to making you look and feel your absolute best
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-smooth"
              data-testid={`card-team-${index}`}
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-2" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4" data-testid={`text-member-role-${index}`}>{member.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-member-bio-${index}`}>
                    {member.bio}
                  </p>
                  <div>
                    <p className="text-sm font-medium mb-2 text-foreground/80">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-strong rounded-xl p-12">
          <h2 className="font-serif text-3xl font-semibold mb-4" data-testid="text-book-experts-heading">
            Book with Our Experts
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-book-experts-description">
            Experience personalized service from our talented team
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="hover:scale-105 transition-smooth glow-primary-sm"
              data-testid="button-book-team"
            >
              Schedule an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
