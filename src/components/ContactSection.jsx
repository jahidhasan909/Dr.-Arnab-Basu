'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mail, 
  Globe, 
  MapPin, 
  Building, 
  Send, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b176e36f-6f45-42b3-81e3-1debb4e46b16", 
          
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          category: formData.category,
          message: formData.message,

     
          subject: `Executive Inquiry: ${formData.category || 'General'} - ${formData.fullName}`,
          from_name: "Dr. Arnab Basu Executive Desk",
          replyto: formData.email,

          
          autorespond: `Dear ${formData.fullName},\n\nThank you for reaching out. Your message regarding "${formData.category || 'Executive Inquiry'}" has been successfully routed to Dr. Arnab Basu's executive desk.\n\nWe will review your details and respond via email shortly.\n\nBest regards,\nExecutive Desk | Dr. Arnab Basu\nwww.arnabbasu.in`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Thank you. A confirmation receipt has been sent to your email.");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Email Submission Error:", error);
      setIsSubmitting(false);
      toast.error("Failed to transmit inquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 px-4 max-w-[1309px] mx-auto text-white overflow-hidden">
      <div className="space-y-12">
      
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-center space-y-2 max-w-3xl mx-auto"
        >
          <Badge 
            variant="outline" 
            className="bg-white/10 text-white px-3 py-1 border-white/10 text-xs font-semibold tracking-widest uppercase rounded-full backdrop-blur-md inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Direct Collaboration
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
            Book an Executive Advisory, Keynote, or Jury Appointment
          </h2>

          <p className="text-slate-300 lg:hidden text-xs sm:text-[0.95rem] leading-relaxed">
            Dr. Arnab Basu is available for C-Suite advisory, executive keynote addresses on Behavioral Intelligence &amp; AI Strategy, venture jury appointments, and strategic board positions.
          </p>
          <p className="text-slate-300 hidden lg:block sm:text-[0.95rem] leading-relaxed">
            Dr. Arnab Basu is available for C-Suite advisory, executive keynote addresses on Behavioral <br /> Intelligence &amp; AI Strategy, venture jury appointments, and strategic board positions.
          </p>
        </motion.div>

    
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          
          
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex flex-col gap-4 h-full"
          >
            <Card className="bg-white/10 border-white/10 text-white backdrop-blur-md p-0 overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <CardHeader className="p-5 pb-3 border-b border-white/10">
                  <CardTitle className="text-lg font-bold">Direct Channels</CardTitle>
                  <CardDescription className="text-slate-300 text-xs">
                    Reach out directly for time-sensitive inquiries and high-level briefs.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-emerald-400 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Direct Email</span>
                      <a href="mailto:arnab@arnabbasu.in" className="text-white hover:text-emerald-300 font-medium transition-colors">
                        arnab@arnabbasu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-emerald-400 shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Canonical Website</span>
                      <a href="https://www.arnabbasu.in" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-300 font-medium transition-colors">
                        www.arnabbasu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-emerald-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">Primary Hub</span>
                      <span className="text-slate-200">Kolkata, West Bengal, India</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-md p-4 shrink-0">
              <div className="flex items-start gap-2.5 text-xs">
                <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                    Registered Entity Disclosures
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    Yancha Positive Learning LLP, Viya Apartment, 6/B Gobindo Auddy Road, Kolkata 700027, West Bengal, India.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 h-full"
          >
            <Card className="bg-white/10 border-white/10 text-white backdrop-blur-md p-6 h-full flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 my-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Thank you. Your message has been routed to Dr. Arnab Basu&apos;s executive desk. A confirmation receipt has been sent to your email address.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', organization: '', email: '', category: '', message: '' });
                    }}
                    className="mt-4 text-xs bg-white/5 border-white/10 hover:bg-white/10 text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Full Name</label>
                        <Input 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Dr. / Mr. / Ms. Full Name"
                          className="bg-white/5 border-white/15 text-white placeholder:text-slate-400 text-xs h-10 focus:border-emerald-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Organization / Institution</label>
                        <Input 
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Company or University Name"
                          className="bg-white/5 border-white/15 text-white placeholder:text-slate-400 text-xs h-10 focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Email Address</label>
                        <Input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="bg-white/5 border-white/15 text-white placeholder:text-slate-400 text-xs h-10 focus:border-emerald-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Engagement Category</label>
                        <Select 
                          required
                          onValueChange={(val) => setFormData({ ...formData, category: val })}
                        >
                          <SelectTrigger className="bg-white/5 border-white/15 text-slate-300 text-xs h-10 focus:border-emerald-400 w-full">
                            <SelectValue placeholder="Select requirement..." />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-white/10 text-white text-xs">
                            <SelectItem value="Keynote Address / Summit Speaker">Keynote Address / Summit Speaker</SelectItem>
                            <SelectItem value="Executive Advisory / C-Suite Strategy">Executive Advisory / C-Suite Strategy</SelectItem>
                            <SelectItem value="Startup Pitch Jury / Competition Judge">Startup Pitch Jury / Competition Judge</SelectItem>
                            <SelectItem value="Yancha EdTech / HIQ Implementation">Yancha EdTech / HIQ Implementation</SelectItem>
                            <SelectItem value="Board Appointment / Venture Investment">Board Appointment / Venture Investment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message &amp; Details</label>
                      <Textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share event details, timeline, or scope of requirement..."
                        className="bg-white/5 border-white/15 text-white placeholder:text-slate-400 text-xs focus:border-emerald-400 resize-none"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#6f8293] hover:bg-[#3d5264] hover:cursor-pointer text-white font-bold text-xs h-10 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Transmit Inquiry
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;