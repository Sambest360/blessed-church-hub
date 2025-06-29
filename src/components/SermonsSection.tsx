
import { Play, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SermonsSection = () => {
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith: Trusting God's Plan",
      pastor: "Pastor Michael Johnson",
      date: "2024-01-07",
      series: "Faith Journey",
      description: "Discover how to trust God's perfect timing and plan for your life, even when the path seems unclear.",
      thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "38 min"
    },
    {
      id: 2,
      title: "The Power of Prayer in Daily Life",
      pastor: "Pastor Sarah Williams",
      date: "2023-12-31",
      series: "Living Faith",
      description: "Learn how prayer can transform your daily routine and strengthen your relationship with God.",
      thumbnail: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "42 min"
    },
    {
      id: 3,
      title: "Love Your Neighbor: Practical Christianity",
      pastor: "Pastor Michael Johnson",
      date: "2023-12-24",
      series: "Christmas Series",
      description: "Understanding what it truly means to love your neighbor and how to put this commandment into action.",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "35 min"
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Recent Sermons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Grow in faith with our weekly messages. Watch or listen to past sermons anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {sermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden church-shadow hover:shadow-lg transition-all duration-300 border-0">
              <div className="relative">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white text-primary hover:bg-church-yellow hover:text-church-blue">
                    <Play className="h-5 w-5 mr-2" />
                    Watch
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-church-yellow text-church-blue px-2 py-1 rounded text-sm font-medium">
                  {sermon.series}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {sermon.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                  {sermon.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{sermon.pastor}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(sermon.date)}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {sermon.description}
                </p>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Play className="h-4 w-4 mr-2" />
                    Watch
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Sermons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;
