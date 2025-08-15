import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TalkSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Talk Support Services
            </h1>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto">
              Get support for all mental health problems from certified professionals, psychology students, or caring volunteers who offer a listening ear and compassionate guidance.
            </p>
            <Link to="/connect">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg">
                Find Talk Support Providers
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-sage-800 mb-12">
              Types of Talk Support Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Emotional Support</h3>
                <p className="text-gray-600">
                  Professional listeners who provide a safe space to express your feelings and work through emotional challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Crisis Support</h3>
                <p className="text-gray-600">
                  Immediate support for those experiencing mental health crises or urgent emotional distress.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Peer Support</h3>
                <p className="text-gray-600">
                  Connect with others who have shared similar experiences and can offer understanding and guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Grief Counseling</h3>
                <p className="text-gray-600">
                  Specialized support for those dealing with loss and the grieving process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Anxiety Support</h3>
                <p className="text-gray-600">
                  Focused support for managing anxiety, panic attacks, and stress-related concerns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-sage-100">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Life Coaching</h3>
                <p className="text-gray-600">
                  Goal-oriented conversations to help you navigate life transitions and personal growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sage-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Connect with a Talk Support Provider?
            </h2>
            <p className="text-xl text-sage-100 mb-8">
              Browse our network of qualified professionals and find the right support for your needs.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-3 text-lg">
                Browse Providers
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TalkSupport;