
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to
          <span className="block text-church-yellow">Grace Fellowship</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
          A community of faith, hope, and love. Join us as we grow together in Christ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="bg-church-yellow text-church-blue hover:bg-church-yellow/90 text-lg px-8 py-3">
            Join Us This Sunday
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-church-blue text-lg px-8 py-3">
            Watch Online
          </Button>
        </div>
        
        {/* Service Times */}
        <div className="mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-lg mb-2">Sunday Services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-church-yellow font-semibold">
            <span>9:00 AM - Traditional Service</span>
            <span className="hidden sm:inline">|</span>
            <span>11:00 AM - Contemporary Service</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
