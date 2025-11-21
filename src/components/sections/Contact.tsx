import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'veeranjaneyuluvipparla.2109@gmail.com',
      link: 'mailto:veeranjaneyuluvipparla.2109@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Guntur, AndhraPradesh',
      link: 'https://www.google.com/maps/place/Pedapalem,+Andhra+Pradesh+522409/@16.59148,80.09925,14z/data=!3m1!4b1!4m6!3m5!1s0x3a359e02be0967a9:0xa1656f33b61f76db!8m2!3d16.5900399!4d80.1009796!16s%2Fm%2F0463j08?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/veera5423' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/veeranjaneyulu-v' },
    { icon: FaTwitter, href: 'https://x.com/Veera_V4' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        'service_ayv2sr1',
        'template_ei5bwgw',
        formRef.current!,
        '3chtD839POqxYW33z'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
  // Log error for debugging purposes and show user-friendly message
  console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="contact" className="py-20 bg-dynamic text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      <Icon className="text-2xl" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-gray-300 hover:text-brand-400 text-2xl"
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 glass p-8 rounded-xl neon-accent"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-black/20 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-black/20 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-black/20 text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-black font-medium rounded-md transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-brand-500 hover:bg-brand-600'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-3 rounded-md ${
                      submitStatus === 'success'
                        ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                        : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
                    }`}
                  >
                    {submitStatus === 'success'
                      ? 'Message sent successfully!'
                      : 'Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;