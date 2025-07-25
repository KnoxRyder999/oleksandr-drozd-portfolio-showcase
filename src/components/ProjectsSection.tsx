import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import project images
import cryptoPlatformImg from '@/assets/crypto-platform.jpg';
import healthPortalImg from '@/assets/health-portal.jpg';
import supplyChainImg from '@/assets/supply-chain.jpg';
import saasDashboardImg from '@/assets/saas-dashboard.jpg';
import ecommerceStoreImg from '@/assets/ecommerce-store.jpg';
import clinicChainImg from '@/assets/clinic-chain.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Crypto Local Token Platform',
      period: 'Apr 2025 – May 2025',
      client: 'Independent freelance DeFi concept',
      role: 'Full‑Stack & Smart Contract Developer',
      stack: ['Solidity', 'Hardhat', 'React', 'Web3.js', 'Polygon Mumbai'],
      url: 'https://cryptolocal.app',
      image: cryptoPlatformImg,
      summary: 'Token issuance platform allowing local community members to create and trade a simple ERC‑20 token on Polygon, with web wallet integration and simple frontend trading.',
      featured: true
    },
    {
      title: 'HealthHub Appointment Portal',
      period: 'Feb 2025 – Apr 2025',
      client: 'Health‑tech consultancy client',
      role: 'Backend and Frontend Developer',
      stack: ['Laravel 9', 'React.js', 'MySQL', 'AWS S3', 'Docker'],
      url: 'https://healthhub‑demo.org',
      image: healthPortalImg,
      summary: 'Patient portal demo including secure registration, appointment scheduling and record uploads; REST backend with React UI and deployment scripts for quick startup.',
      featured: true
    },
    {
      title: 'SupplyChain Smart Contract Suite',
      period: 'Mar 2024 – Dec 2024',
      client: 'Freelance client working in logistics',
      role: 'Solidity Developer and Auditor',
      stack: ['Solidity', 'OpenZeppelin', 'Hardhat', 'ethers.js'],
      url: 'https://supplychain‑onchain.com',
      image: supplyChainImg,
      summary: 'Developed smart contracts to track shipment proofs, ownership transfer and audit logs; gas‑efficient implementations and basic test coverage included.',
      featured: true
    },
    {
      title: 'React‑Node SaaS Dashboard',
      period: 'Jan 2023 – Oct 2023',
      client: 'SaaS startup in business analytics',
      role: 'Full‑Stack Developer',
      stack: ['React.js', 'Node.js (Express)', 'PostgreSQL', 'Chart.js', 'AWS EC2'],
      url: 'https://dash‑analytiq.com',
      image: saasDashboardImg,
      summary: 'Dashboard for business KPIs, real‑time charts, user roles and CSV export; built authentication, UI and backend API endpoints.'
    },
    {
      title: 'EcoCommerce Handmade Goods Store',
      period: 'Feb 2022 – Nov 2022',
      client: 'Independent ecommerce micro‑brand',
      role: 'Full‑Stack Developer',
      stack: ['Laravel 8', 'Stripe API', 'Vue.js', 'MySQL', 'DigitalOcean'],
      url: 'https://ecocommerce‑market.com',
      image: ecommerceStoreImg,
      summary: 'Built online store for handmade goods, integrated shopping cart, payments and admin panel; managed hosting and SSL deployment.'
    },
    {
      title: 'ClinicChain Records System',
      period: 'Jan 2021 – Dec 2021',
      client: 'Small healthcare tech pilot',
      role: 'Blockchain Developer',
      stack: ['Solidity', 'IPFS', 'Web3.js', 'React.js', 'Infura'],
      url: 'https://clinicchain‑pilot.com',
      image: clinicChainImg,
      summary: 'Prototype for secure medical record storage using IPFS for file data and Ethereum testnet for hash anchoring; patient UI for upload and verification.'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of recent work in Web3, SaaS, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`portfolio-card group ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project links overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium">{project.role}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
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

export default ProjectsSection;