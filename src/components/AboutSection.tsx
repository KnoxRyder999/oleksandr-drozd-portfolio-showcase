import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise in full-stack and blockchain technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a freelance full‑stack and blockchain developer who began freelancing in May 2024. 
                I work on Web3, SaaS, eCommerce and healthcare platforms as solo contributor or in small remote teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have experience with Solidity smart contracts, React, Node.js, Laravel and database integrations 
                across varied domains. I deliver working MVPs and collaborate on deployments and handoffs.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Key Achievements</h3>
              <div className="space-y-3">
                {[
                  'Contributed staking‑logic smart contracts that reduced gas usage by credible optimization before deployment.',
                  'Delivered a patient portal demo in health‑tech MVP within tight timeline and guided deployment on AWS.',
                  'Built and handed off a DeFi frontend‑backend prototype from design to testnet deployment as solo freelancer.'
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Education</h4>
                    <p className="font-medium">Bachelor's Degree in Computer Science</p>
                    <p className="text-muted-foreground">Kharkiv National University of Radioelectronics</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2015 – 2019
                      </div>
                      <div className="flex items-center gap-1">
                        <span>GPA 3.2 / 4.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Location & Availability</h4>
                    <p className="text-muted-foreground">Based in Kharkiv, Ukraine</p>
                    <p className="text-muted-foreground">Available for remote work worldwide</p>
                    <p className="text-muted-foreground">Open to freelance projects and collaborations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Style Card */}
            <Card className="portfolio-card">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Work Style</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Remote collaboration',
                      'Agile handoffs',
                      'Documentation',
                      'Async coordination'
                    ].map((skill) => (
                      <span key={skill} className="skill-tag text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;