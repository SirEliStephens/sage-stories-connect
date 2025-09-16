import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StoryTelling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Professional Story Telling Services
            </h1>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto">
              Connect with experienced storytellers who bring tales to life through engaging narratives, therapeutic storytelling, and creative expression for all ages.
            </p>
            <Link to="/connect">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg">
                Find a Storyteller
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-sage-800 mb-12">
              Story Telling Services Available
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Survivors of Historic Events</h3>
                <p className="text-gray-600">
                  Share powerful stories of resilience, survival, and historical experiences that educate and inspire future generations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Comedy</h3>
                <p className="text-gray-600">
                  Entertaining storytelling that brings laughter and joy through humorous anecdotes, funny tales, and comedic narratives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">People on the Street</h3>
                <p className="text-gray-600">
                  Real-life stories from everyday people, sharing authentic experiences and perspectives from diverse walks of life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Motivational</h3>
                <p className="text-gray-600">
                  Inspiring storytelling that empowers and motivates through tales of triumph, personal growth, and overcoming challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-sage-800 mb-12">
              Why Choose Professional Storytelling?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-6">Transform Lives Through Stories</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    Enhance communication and listening skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    Build emotional intelligence and empathy
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    Preserve family and cultural memories
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    Support therapeutic and healing processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    Engage audiences of all ages effectively
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-sage-800 mb-4">Perfect For:</h4>
                <div className="space-y-3 text-gray-600">
                  <p>✓ Schools and educational institutions</p>
                  <p>✓ Healthcare and therapy settings</p>
                  <p>✓ Corporate training and development</p>
                  <p>✓ Community centers and libraries</p>
                  <p>✓ Special events and celebrations</p>
                  <p>✓ Personal growth and healing journeys</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sage-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Magic of Storytelling?
            </h2>
            <p className="text-xl text-sage-100 mb-8">
              Connect with skilled storytellers who can bring narratives to life and create meaningful experiences.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-3 text-lg">
                Browse Storytellers
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoryTelling;