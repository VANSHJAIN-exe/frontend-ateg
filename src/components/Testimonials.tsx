import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Turner",
    role: "YouTube Content Creator",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "ATEG's VS1 model transformed my gaming highlights into professional-looking videos in minutes. The Valorant-style effects are incredibly polished and my viewers love the new aesthetic.",
    stars: 5
  },
  {
    name: "Mia Johnson",
    role: "Esports Team Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "We use ATEG for all our team highlights and social media content. The AI understands gaming footage perfectly and applies effects that make our plays look epic. Huge time saver!",
    stars: 5
  },
  {
    name: "David Chen",
    role: "Indie Game Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "As a developer, I appreciate how well the Python integration works. I've been able to customize the VS1 model to match our game's aesthetic perfectly for all our promotional videos.",
    stars: 4
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="section" id="testimonials">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 bg-orange-100 text-orange-800 rounded-full font-medium text-sm"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-6"
        >
          What Our <span className="gradient-text">Users Say</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          Join thousands of content creators, gamers, and media professionals who are revolutionizing their video editing workflow with ATEG.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card relative"
          >
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg">
                <span className="text-white font-bold">{testimonial.stars}.0</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            
            <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
            
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;