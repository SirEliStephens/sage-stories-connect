import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Clock } from "lucide-react";

const Childcare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-ocean-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sage-700 mb-4">Child Care & Babysitting Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive childcare services provided by qualified and caring individuals to meet all your family's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* RBT Certified Section */}
          <Card className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-sage-50">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-sage-600" />
                <CardTitle className="text-2xl text-sage-700">RBT Certified</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Registered Behavior Technicians providing specialized care
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Specialized Training</h4>
                    <p className="text-gray-600">Professional behavior technicians with certification in applied behavior analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sage-700 mb-1">Therapeutic Support</h4>
                    <p className="text-gray-600">Evidence-based interventions and behavioral support for children with special needs</p>
                  </div>
                </div>
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                  Find RBT Caregivers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* University Students Section */}
          <Card className="border-ocean-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-ocean-50">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-8 w-8 text-ocean-600" />
                <CardTitle className="text-2xl text-ocean-700">University Students</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Reliable and educated student caregivers
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-ocean-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-ocean-700 mb-1">Educational Background</h4>
                    <p className="text-gray-600">Current university students pursuing education, psychology, or child development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-ocean-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-ocean-700 mb-1">Flexible Scheduling</h4>
                    <p className="text-gray-600">Adaptable schedules that work around academic commitments and your family's needs</p>
                  </div>
                </div>
                <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white">
                  Connect with Student Caregivers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* General Childcare Services Section */}
          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-purple-50">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl text-purple-700">General Childcare Services</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Comprehensive childcare for all your family's needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-1">Flexible Care Options</h4>
                    <p className="text-gray-600">Full-time, part-time, and occasional childcare services to fit your schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-1">Experienced Caregivers</h4>
                    <p className="text-gray-600">Professional childcare providers with extensive experience in child development</p>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Find General Caregivers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Babysitting Services Section */}
          <Card className="border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-pink-50">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-pink-600" />
                <CardTitle className="text-2xl text-pink-700">Babysitting Services</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Occasional and on-demand babysitting services
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-1">Last-Minute Availability</h4>
                    <p className="text-gray-600">Reliable babysitters available for date nights, events, and emergency care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-1">Trusted Sitters</h4>
                    <p className="text-gray-600">Background-checked babysitters with references and childcare experience</p>
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Find Babysitters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto border-sage-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-sage-700 mb-4">Why Choose Our Childcare Services?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Verified Professionals</h4>
                  <p className="text-gray-600">All caregivers undergo thorough background checks and verification</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Quality Care</h4>
                  <p className="text-gray-600">Focused on providing nurturing, safe, and engaging childcare</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Peace of Mind</h4>
                  <p className="text-gray-600">Regular updates and communication with parents throughout care</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Childcare;