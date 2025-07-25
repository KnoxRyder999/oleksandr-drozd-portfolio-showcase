import { Code, Database, Cloud, Smartphone, Globe, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      skills: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Web3.js'],
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      skills: ['Node.js (Express)', 'Laravel 8/9', 'REST APIs', 'GraphQL', 'PHP', 'Python'],
      color: 'bg-green-500/10 text-green-500'
    },
    {
      title: 'Blockchain & Web3',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Web3.js', 'Infura', 'IPFS'],
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      color: 'bg-orange-500/10 text-orange-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['Docker', 'AWS EC2', 'DigitalOcean', 'GitHub Actions', 'Vercel', 'Netlify'],
      color: 'bg-cyan-500/10 text-cyan-500'
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="h-6 w-6" />,
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Stripe API', 'Swagger'],
      color: 'bg-pink-500/10 text-pink-500'
    }
  ];

  const softSkills = [
    'Remote collaboration',
    'Agile methodologies',
    'Technical documentation',
    'Async coordination',
    'Project management',
    'Client communication'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Category header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Soft Skills & Work Style</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill) => (
              <span key={skill} className="skill-tag text-base">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <Card className="portfolio-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Experience Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-muted-foreground">Years of Development</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;