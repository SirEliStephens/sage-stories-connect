import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OtherServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
              Other Support Services
            </h1>
            <p className="text-xl text-purple-600 mb-8 max-w-3xl mx-auto">
              Discover a wide range of specialized services and support options to meet your unique needs and circumstances.
            </p>
            <Link to="/connect">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
              Additional Services Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Pet Care Services</h3>
                <p className="text-gray-600">
                  Dog walking, pet sitting, and animal care services for when you need support with your furry friends.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Transportation Assistance</h3>
                <p className="text-gray-600">
                  Safe and reliable transportation for medical appointments, errands, and social activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Technology Support</h3>
                <p className="text-gray-600">
                  Help with computers, smartphones, smart home devices, and other technology needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Home Organization</h3>
                <p className="text-gray-600">
                  Professional organizing services to help create functional and peaceful living spaces.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Handyman Services</h3>
                <p className="text-gray-600">
                  Minor home repairs, maintenance tasks, and household improvements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Creative Arts Support</h3>
                <p className="text-gray-600">
                  Art therapy, music lessons, creative workshops, and artistic expression support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Financial Planning</h3>
                <p className="text-gray-600">
                  Budget assistance, financial literacy education, and basic money management support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Nutrition Counseling</h3>
                <p className="text-gray-600">
                  Dietary guidance, meal planning, and nutritional education for healthy living.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Event Planning</h3>
                <p className="text-gray-600">
                  Assistance with organizing celebrations, family gatherings, and special occasions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Find the Right Service for You
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Browse our diverse network of service providers to find exactly what you need.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                Browse All Providers
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OtherServices;