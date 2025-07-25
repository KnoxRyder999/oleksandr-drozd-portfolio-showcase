import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-variant/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-variant/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center space-y-8">
          {/* Main heading with animation */}
          <div className={`space-y-4 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block">Oleksandr</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Drozd
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full‑Stack and Blockchain Web Developer
            </p>
          </div>

          {/* Description */}
          <div className={`space-y-6 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a freelance developer specializing in Web3, SaaS, eCommerce and healthcare platforms. 
              I deliver working MVPs and collaborate on deployments across varied domains using 
              <span className="text-primary font-medium"> React, Node.js, Solidity, and Laravel</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-muted-foreground">📍 Kharkiv, Ukraine</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">📧 Rozda622@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('mailto:Rozda622@gmail.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;