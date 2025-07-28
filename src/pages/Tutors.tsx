import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tutors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Educational Tutors & Learning Support
            </h1>
            <p className="text-xl text-emerald-600 mb-8 max-w-3xl mx-auto">
              Connect with qualified tutors and educational specialists who provide personalized learning support across all subjects and skill levels.
            </p>
            <Link to="/connect">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                Find Educational Support
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
              Educational Services Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Academic Tutoring</h3>
                <p className="text-gray-600">
                  One-on-one tutoring in mathematics, science, language arts, and other core subjects.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Test Preparation</h3>
                <p className="text-gray-600">
                  Specialized preparation for standardized tests, entrance exams, and academic assessments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Learning Disabilities Support</h3>
                <p className="text-gray-600">
                  Specialized tutoring for students with learning differences and disabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Adult Education</h3>
                <p className="text-gray-600">
                  Educational support for adult learners, including GED preparation and continuing education.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Technology Training</h3>
                <p className="text-gray-600">
                  Computer skills, digital literacy, and technology training for all ages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Language Learning</h3>
                <p className="text-gray-600">
                  Foreign language instruction and English as a Second Language (ESL) support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Connect with Qualified Tutors
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Find experienced educators who are passionate about helping you achieve your learning goals.
            </p>
            <Link to="/connect">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg">
                Browse Tutors
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutors;