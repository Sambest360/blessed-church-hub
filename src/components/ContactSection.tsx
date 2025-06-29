
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Faith Street", "Hope City, HC 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-HOPE", "(555) 123-4673"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gracefellowship.org", "pastor@gracefellowship.org"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9AM-5PM", "Sat: 9AM-12PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to meet you! Come as you are and experience the warmth of our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="church-shadow border-0">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Service Times</h4>
              <div className="bg-white rounded-lg p-6 church-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday Morning Worship</span>
                    <span className="text-primary font-semibold">9:00 AM & 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Wednesday Bible Study</span>
                    <span className="text-primary font-semibold">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Youth Group (Fridays)</span>
                    <span className="text-primary font-semibold">7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center church-shadow">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Map integration coming soon</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Directions
              </Button>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
