
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 reveal">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          placeholder="Your message"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-primary rounded-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <div className="mr-2 h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
