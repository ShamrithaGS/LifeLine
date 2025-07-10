import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  MapPin,
  Users,
  Clock,
  Shield,
  Phone,
  Zap,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { value: "10,000+", label: "Registered Donors", icon: Users },
    { value: "500+", label: "Lives Saved", icon: Heart },
    { value: "< 10 min", label: "Average Response", icon: Clock },
    { value: "24/7", label: "Available", icon: Shield },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Location",
      description:
        "Find nearby donors instantly with our smart geolocation system",
      color: "bg-medical-50 text-medical-600",
    },
    {
      icon: Zap,
      title: "Emergency SOS",
      description:
        "One-tap emergency alerts to notify all compatible donors nearby",
      color: "bg-blood-50 text-blood-600",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your personal information is encrypted and secure",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered compatibility matching for faster connections",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blood-50 via-background to-medical-50"></div>
        <div className="container max-w-screen-2xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blood-100 text-blood-800 hover:bg-blood-200">
                  🚀 Now in Beta - Join Early Access
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Save Lives with <span className="text-primary">LifeLink</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Connect blood donors with those in critical need. Every drop
                  counts, every minute matters, every life is precious.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/register">
                    <Heart className="h-5 w-5 mr-2" />
                    Become a Donor
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Request
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Free Forever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Privacy Protected</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blood-50 border-blood-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-blood-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-blood-700">
                        Live Alert
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blood-600">
                      O- blood needed urgently at City Hospital
                    </p>
                    <p className="text-xs text-blood-500 mt-1">
                      2 donors nearby
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-medical-50 border-medical-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-medical-600" />
                      <span className="text-sm font-medium text-medical-700">
                        Location
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-medical-600">
                      5 donors within 2km radius
                    </p>
                    <p className="text-xs text-medical-500 mt-1">
                      Response time: 8 min
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200 col-span-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-green-800">
                          Success Rate
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          98.7%
                        </p>
                      </div>
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container max-w-screen-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-screen-2xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              How LifeLink Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform uses cutting-edge technology to connect donors and
              recipients in the fastest, safest way possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-screen-2xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              All Blood Types Welcome
            </h2>
            <p className="text-xl text-muted-foreground">
              Every blood type is needed. Find out how you can help save lives.
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-2xl mx-auto">
            {bloodTypes.map((type) => (
              <div
                key={type}
                className="aspect-square bg-card border-2 border-primary/20 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <span className="text-xl font-bold text-primary">{type}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/register">
                Register as Donor
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20">
        <div className="container max-w-screen-2xl">
          <Card className="bg-gradient-to-r from-blood-600 to-blood-700 border-blood-600 text-white">
            <CardContent className="py-12">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Emergency? We're Here 24/7
                </h2>
                <p className="text-xl text-blood-100">
                  Critical blood shortages happen without warning. Our emergency
                  network can connect you with donors in minutes, not hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Emergency Line
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg border-white text-white hover:bg-white hover:text-blood-600"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Send SOS Alert
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
