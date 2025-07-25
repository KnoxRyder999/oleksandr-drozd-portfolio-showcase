import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/oleksandr-drozd',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/oleksandr-drozd',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      href: 'mailto:Rozda622@gmail.com',
      color: 'hover:text-primary'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
      href: 'https://twitter.com/oleksandr_drozd',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-xl font-bold">
              Oleksandr<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Full-Stack and Blockchain Web Developer specializing in Web3, SaaS, 
              and eCommerce solutions. Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              Ready to collaborate on your next project? Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className={`transition-colors ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Oleksandr Drozd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Designed with ❤️ in Ukraine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;