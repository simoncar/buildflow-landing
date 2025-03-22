import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, CheckSquare, Users, Bell, Clock, BarChart3, Layers, MessageSquare, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import AppShowcase from '../components/AppShowcase';

const Index: React.FC = () => {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Add all elements with fade-in class to the observer
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" aria-hidden="true" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-float opacity-20" style={{
        animationDelay: '2s'
      }}></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Construction Management <span className="text-primary">Simplified</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Streamline your building projects with the ultimate project management app designed specifically for builders.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/register" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </Link>
              <a href="#features" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all">
                Learn More
              </a>
            </div>
            
            <div className="flex justify-center space-x-4">
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 object-scale-down" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Powerful Features for Builders
            </h2>
            <p className="text-white/70 text-lg">
              ONEBUILD comes packed with everything you need to manage your construction projects efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
            <FeatureCard icon={Calendar} title="Project Timeline" description="Schedule and track all your project milestones, deadlines, and events in one intuitive calendar view." color="bg-app-blue" delay={100} />
            <FeatureCard icon={CheckSquare} title="Task Management" description="Create, assign, and track tasks with detailed notes and progress tracking for each stage of your build." color="bg-app-green" delay={200} />
            <FeatureCard icon={FileText} title="Document Storage" description="Store and organize all project documents, permits, plans, and contracts in one secure location." color="bg-app-orange" delay={300} />
            <FeatureCard icon={Users} title="Team Collaboration" description="Invite clients, contractors, and team members to collaborate on projects with tailored access levels." color="bg-purple-500" delay={400} />
            <FeatureCard icon={Bell} title="Real-time Notifications" description="Stay informed with instant alerts about important updates, approaching deadlines, and completed tasks." color="bg-pink-500" delay={500} />
            <FeatureCard icon={BarChart3} title="Progress Tracking" description="Monitor project status with visual progress indicators and comprehensive reporting tools." color="bg-yellow-500" delay={600} />
          </div>
        </div>
      </section>
      
      {/* App Showcase Section */}
      <AppShowcase />
      
      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-primary/5 to-background/0 pointer-events-none" aria-hidden="true" />
        
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Builders Choose ONEBUILD
            </h2>
            <p className="text-white/70 text-lg">
              Join thousands of builders who are transforming their workflow with our specialized platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">01</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Streamlined Workflow</h3>
              <p className="text-white/70">
                Reduce administrative overhead and stay focused on what matters—building. Our intuitive interface 
                simplifies project management, saving you valuable time.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">02</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Better Communication</h3>
              <p className="text-white/70">
                Eliminate miscommunications with a centralized platform where all stakeholders can share 
                updates, documents, and feedback in real-time.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">03</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Increased Profitability</h3>
              <p className="text-white/70">
                Keep projects on schedule and on budget with powerful planning tools and analytics that 
                help you identify issues before they become costly problems.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center fade-in">
            <Link to="/register" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all transform hover:scale-105 shadow-lg inline-block">
              Start Your Free Trial
            </Link>
            <p className="mt-4 text-white/60 text-sm">No credit card required. Your first project free.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10 fade-in">
            <p className="text-xl md:text-2xl text-white/90 italic mb-6 leading-relaxed">
              "ONEBUILD has completely transformed how we manage our construction projects. The ability to track 
              tasks, store documents, and communicate with the team all in one place has made our workflow incredibly 
              efficient. We've reduced administrative time by almost 40%."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                <Users size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Michael Thompson</h4>
                <p className="text-white/60 text-sm">Thompson Construction, Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Language Support Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
            <Globe size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Available in Multiple Languages
            </h2>
            <p className="text-white/70 text-lg">
              ONEBUILD is designed for an international workforce, with full support for English and Spanish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto fade-in">
            <div className="p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all text-center">
              <div className="text-3xl font-bold mb-4">🇺🇸 English</div>
              <p className="text-white/70">
                Every feature, document, and interface element is available in English, making the app 
                accessible to English-speaking teams worldwide.
              </p>
            </div>
            
            <div className="p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all text-center">
              <div className="text-3xl font-bold mb-4">🇪🇸 Español</div>
              <p className="text-white/70">
                Acceda a todas las funciones en español, permitiendo que los equipos de habla hispana 
                aprovechen al máximo la aplicación sin barreras lingüísticas.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in">
            <p className="text-white/70">
              Our commitment to language accessibility ensures that construction teams can collaborate 
              effectively regardless of their primary language. Additional language support coming soon.
            </p>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 relative bg-gradient-to-b from-background to-black">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Transform Your Building Process?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of builders who have streamlined their workflow with ONEBUILD.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link to="/register" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all transform hover:scale-105 shadow-lg">
                Create Account
              </Link>
              <a 
                href="https://b.otbapps.com/signIn" 
                className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 object-scale-down" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Index;
