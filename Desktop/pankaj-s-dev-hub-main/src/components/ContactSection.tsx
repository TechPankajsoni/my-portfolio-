import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_ihewsyk';
    const templateId = 'template_9fv43o2';
    const publicKey = 'QH2T9THIFFt1_LNWo';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'pankajsoni5083@gmail.com',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-10 w-16 h-16 rounded-full border-4 border-secondary/20 animate-bounce-slow" />
      <div className="absolute bottom-1/4 left-10 w-8 h-8 bg-yellow rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -right-40 bottom-1/4 w-48 h-48 bg-secondary/10 shape-blob animate-spin-slow" />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">CONTACT</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Have a project in mind? Let's connect and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="mailto:pankajsoni5083@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">pankajsoni5083@gmail.com</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+918813803101"
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">+91 8813803101</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Rewari, Haryana, India</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/TechPankajsoni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pankaj-soni-6a6606232"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/pankaj_____.011111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;