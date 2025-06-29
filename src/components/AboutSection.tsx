
import { Heart, Users, BookOpen, HandHeart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in loving God with all our heart and loving our neighbors as ourselves."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building authentic relationships and supporting one another through life's journey."
    },
    {
      icon: BookOpen,
      title: "Scripture",
      description: "Committed to teaching and living by the truth found in God's Word."
    },
    {
      icon: HandHeart,
      title: "Service",
      description: "Serving our community and making a positive impact in the world around us."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Grace Fellowship
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over 30 years, Grace Fellowship has been a beacon of hope and faith in our community. 
            We are a diverse family united by our love for Jesus Christ and our commitment to growing 
            together in faith, fellowship, and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center church-shadow hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              To know Christ and make Him known. We exist to help people discover God's love, 
              grow in their faith, and serve others with joy and purpose.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're taking your first steps in faith or have been walking with Jesus 
              for years, there's a place for you here at Grace Fellowship.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Church community"
              className="rounded-lg church-shadow w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
