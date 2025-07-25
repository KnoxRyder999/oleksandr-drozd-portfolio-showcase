import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Private Freelancer',
      company: 'Self‑managed freelance engagements',
      period: 'May 2025 – July 2025',
      location: 'Remote (Ukraine based)',
      role: 'Full‑Stack and Solidity Developer',
      highlights: [
        'Developed Solidity currency token contract and Web3 frontend for a DeFi proof‑of‑concept on the Polygon testnet.',
        'Integrated backend Node.js API for user registration, wallet linkage, and contract interaction.',
        'Coordinated with a designer and client remotely via Trello and weekly video calls; handled deployment to testnet, documentation and handoff.'
      ]
    },
    {
      title: 'Freelance Contractor',
      company: 'Small health‑tech consultancy',
      period: 'February 2025 – May 2025',
      location: 'Remote (Ukraine based)',
      role: 'Laravel / React Developer',
      highlights: [
        'Built patient login, appointment booking and record upload features using Laravel backend and React frontend.',
        'Implemented REST endpoints, file storage with AWS S3, and token‑based authentication.',
        'Handoff included API documentation (Swagger), deployment via Docker Compose, and guidance to the client team for continuation.'
      ]
    },
    {
      title: 'Freelance Contributor',
      company: 'Niche blockchain startup',
      period: 'April 2025 – June 2025',
      location: 'Remote',
      role: 'Blockchain Backend Developer',
      highlights: [
        'Authored and tested Solidity smart contract modules for staking and token vesting.',
        'Added gas usage monitoring in Hardhat and optimized loops to reduce cost by ~15 percent.',
        'Delivered test suite and documentation; coordinated with front‑end developer for integration.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent freelance projects and collaborations in Web3 and full-stack development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="portfolio-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Timeline indicator */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground lg:text-center">
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.role}</p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;