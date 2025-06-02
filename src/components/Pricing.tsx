import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "month",
    description: "Perfect for beginners and casual content creators.",
    features: [
      "Up to 10 videos per month",
      "720p export quality",
      "Basic VS1 effects",
      "Standard processing speed",
      "Email support"
    ],
    popular: false,
    btnClass: "text-blue-600 border-blue-600 hover:bg-blue-50"
  },
  {
    name: "Pro",
    price: "$49",
    period: "month",
    description: "For serious creators who need professional results.",
    features: [
      "Unlimited videos",
      "4K export quality",
      "All VS1 effects & templates",
      "Priority processing",
      "Python script customization",
      "24/7 priority support"
    ],
    popular: true,
    btnClass: "btn-primary"
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "month",
    description: "For teams and professional studios with advanced needs.",
    features: [
      "Unlimited videos",
      "8K export quality",
      "Advanced VS1 model access",
      "Dedicated processing servers",
      "Custom API integration",
      "White-label exports",
      "Dedicated account manager"
    ],
    popular: false,
    btnClass: "text-orange-600 border-orange-600 hover:bg-orange-50"
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="section" id="pricing">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full font-medium text-sm"
        >
          Pricing
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-6"
        >
          Choose Your <span className="gradient-text">Perfect Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          Whether you're a casual content creator or a professional studio, we have the right plan for you. All plans include access to our revolutionary VS1 model.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-xl overflow-hidden ${plan.popular ? 'ring-2 ring-blue-600 transform md:-translate-y-4' : 'border border-gray-200'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button
                className={`w-full py-3 rounded-lg border transition-colors duration-300 ${
                  plan.popular ? 'btn-primary' : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          All plans come with a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;