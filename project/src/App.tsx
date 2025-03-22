import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Award, 
  ChevronRight,
  BarChart,
  Palette,
  Globe,
  MessageSquare,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" 
                alt="BuzzBee Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-2xl font-bold text-white">Buzz<span className="text-[#FFD700]">Bee</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#FFD700] transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#FFD700] transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-[#FFD700] transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-[#FFD700] transition-colors">Portfolio</a>
              <a href="#contact" className="bg-[#FFD700] text-black px-4 py-2 rounded-full hover:bg-[#F4C430] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Elevate Your Brand with
                <span className="block text-[#FFD700] mt-2">BuzzBee</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We provide top-notch digital marketing solutions to help you stand out in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#FFD700] hover:bg-[#F4C430] text-black px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#portfolio" className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 text-center">
                  Our Work
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-full blur-3xl" />
              <div className="relative bg-black/50 border border-[#FFD700]/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Palette className="h-8 w-8" />, label: "Creative Design" },
                    { icon: <Globe className="h-8 w-8" />, label: "Global Reach" },
                    { icon: <BarChart className="h-8 w-8" />, label: "Data Analytics" },
                    { icon: <MessageSquare className="h-8 w-8" />, label: "24/7 Support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-[#FFD700]">
                      {item.icon}
                      <span className="text-white text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Our Portfolio</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Project 1",
                category: "Digital Marketing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              },
              {
                title: "Project 2",
                category: "Brand Strategy",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              },
              {
                title: "Project 3",
                category: "Social Media",
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
              },
              {
                title: "Project 4",
                category: "Content Creation",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-[#FFD700]">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch with us today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#FFD700]" />
                <span className="text-gray-300">buzzbeeagency@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#FFD700]" />
                <span className="text-gray-300">+91 9345508768</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#FFD700]" />
                <span className="text-gray-300">Chennai</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#FFD700]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#FFD700]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#FFD700]/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                ></textarea>
              </div>
              <button className="w-full bg-[#FFD700] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#F4C430] transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" 
                alt="BuzzBee Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-2xl font-bold text-white">Buzz<span className="text-[#FFD700]">Bee</span></span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 BuzzBee. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;