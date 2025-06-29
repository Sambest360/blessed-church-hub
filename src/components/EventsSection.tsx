
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Youth Group Game Night",
      date: "2024-01-15",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Join us for an evening of fun games, fellowship, and snacks. All youth ages 12-18 welcome!",
      category: "Youth"
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "2024-01-20",
      time: "10:00 AM",
      location: "Church Parking Lot",
      description: "Help us serve our community by donating non-perishable food items for local families in need.",
      category: "Community"
    },
    {
      id: 3,
      title: "Women's Bible Study",
      date: "2024-01-22",
      time: "6:30 PM",
      location: "Room 201",
      description: "Join us as we study the book of Philippians. All women are welcome to attend.",
      category: "Bible Study"
    },
    {
      id: 4,
      title: "Men's Prayer Breakfast",
      date: "2024-01-25",
      time: "8:00 AM",
      location: "Fellowship Hall",
      description: "Start your Saturday with fellowship, prayer, and a hearty breakfast with the men of our church.",
      category: "Fellowship"
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="events" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for these special events and connect with our church community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card key={event.id} className="church-shadow hover:shadow-lg transition-all duration-300 border-0">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-primary">
                    {event.title}
                  </CardTitle>
                  <span className="bg-church-yellow text-church-blue px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
