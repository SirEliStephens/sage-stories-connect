import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareTakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-50 to-ocean-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-800 mb-6">
              Care Takers & Personal Care
            </h1>
            <p className="text-xl text-ocean-600 mb-8 max-w-3xl mx-auto">
              Find experienced and compassionate caregivers who provide personal care, companionship, and assistance with daily living activities.
            </p>
            <Link to="/connect">
              <Button className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-3 text-lg">
                Find Care Providers
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-ocean-800 mb-12">
              Care Services Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Personal Care</h3>
                <p className="text-gray-600">
                  Assistance with bathing, dressing, grooming, and other personal hygiene activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Companionship</h3>
                <p className="text-gray-600">
                  Social interaction, conversation, and emotional support to reduce isolation and loneliness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Meal Preparation</h3>
                <p className="text-gray-600">
                  Planning, preparing, and serving nutritious meals according to dietary requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Medication Management</h3>
                <p className="text-gray-600">
                  Reminders and assistance with medication schedules and proper administration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Mobility Assistance</h3>
                <p className="text-gray-600">
                  Help with walking, transferring, and using mobility aids safely.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-ocean-100">
                <h3 className="text-xl font-semibold text-ocean-800 mb-4">Light Housekeeping</h3>
                <p className="text-gray-600">
                  Maintaining a clean and safe living environment with light cleaning tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-ocean-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Find Qualified Care Providers
            </h2>
            <p className="text-xl text-ocean-100 mb-8">
              Connect with certified caregivers who are dedicated to providing quality care and support.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-600 px-8 py-3 text-lg">
                Browse Caregivers
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareTakers;