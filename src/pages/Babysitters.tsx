import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Award, Heart } from "lucide-react";

const Babysitters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
              Trusted Babysitting Services
            </h1>
            <p className="text-xl text-purple-600 mb-8 max-w-3xl mx-auto">
              Connect with caring babysitters from youth volunteers, college students, to certified childcare specialists who provide safe, engaging care for your children.
            </p>
            <Link to="/connect">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Find Babysitters
              </Button>
            </Link>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
              Our Babysitting Providers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-full inline-flex bg-purple-100 mb-3 w-fit">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Certified Specialists</CardTitle>
                  <CardDescription>
                    Professional childcare providers with formal training, certifications, and extensive experience in child development and safety.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700">CPR Certified</Badge>
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700">Background Checked</Badge>
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700">First Aid Trained</Badge>
                  </div>
                  <Link to="/connect">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Find Certified Babysitters
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-full inline-flex bg-blue-100 mb-3 w-fit">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">College Students</CardTitle>
                  <CardDescription>
                    Responsible college students studying education, child development, or related fields who offer affordable, flexible babysitting services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">Student Verified</Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">Flexible Hours</Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">Affordable Rates</Badge>
                  </div>
                  <Link to="/connect">
                    <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                      Connect with Students
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 rounded-full inline-flex bg-green-100 mb-3 w-fit">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Youth Volunteers</CardTitle>
                  <CardDescription>
                    Caring teenagers and young adults from your community who love spending time with children and offer budget-friendly babysitting.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary" className="bg-green-50 text-green-700">Community Based</Badge>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">Budget Friendly</Badge>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">Local Youth</Badge>
                  </div>
                  <Link to="/connect">
                    <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      Find Youth Babysitters
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Our Babysitters */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                Why Choose Our Babysitting Network?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-3 rounded-full bg-purple-100 inline-flex mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Variety of Options</h4>
                  <p className="text-sm text-gray-600">From certified professionals to caring youth volunteers</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full bg-purple-100 inline-flex mb-3">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Vetted Providers</h4>
                  <p className="text-sm text-gray-600">All babysitters are screened and verified</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full bg-purple-100 inline-flex mb-3">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-808 mb-2">Caring & Compassionate</h4>
                  <p className="text-sm text-gray-600">Providers who genuinely love working with children</p>
                </div>
                <div className="text-center">
                  <div className="p-3 rounded-full bg-purple-100 inline-flex mb-3">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Educational Focus</h4>
                  <p className="text-sm text-gray-600">Many providers incorporate learning and development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Find the Perfect Babysitter?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Browse our network of trusted babysitters and find the right fit for your family's needs and budget.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Browse All Babysitters
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Babysitters;