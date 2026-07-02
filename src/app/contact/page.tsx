// "use client";
// import React, { useState } from "react";
// import { Mail, MapPin, CheckCircle2, Send, Sparkles, ArrowRight, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [form, setForm] = useState({ 
//     name: "", 
//     email: "", 
//     company: "", 
//     message: "" 
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedDate || !selectedTime) {
//       alert("Please select a date and time for your demo.");
//       return;
//     }
//     setSubmitted(true);
//   };

//   // Calendar functions
//   const getDaysInMonth = (date: Date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const days = [];
//     const startingDay = firstDay.getDay();
    
//     // Add empty days for padding
//     for (let i = 0; i < startingDay; i++) {
//       days.push(null);
//     }
    
//     // Add actual days
//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       days.push(new Date(year, month, i));
//     }
    
//     return days;
//   };

//   const isToday = (date: Date) => {
//     const today = new Date();
//     return date.getDate() === today.getDate() &&
//       date.getMonth() === today.getMonth() &&
//       date.getFullYear() === today.getFullYear();
//   };

//   const isSelected = (date: Date) => {
//     if (!selectedDate) return false;
//     return date.getDate() === selectedDate.getDate() &&
//       date.getMonth() === selectedDate.getMonth() &&
//       date.getFullYear() === selectedDate.getFullYear();
//   };

//   const isPastDate = (date: Date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return date < today;
//   };

//   const handleDateSelect = (date: Date) => {
//     if (isPastDate(date)) return;
//     setSelectedDate(date);
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//     setShowCalendar(false);
//   };

//   const changeMonth = (increment: number) => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
//   };

//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

//   const formatDate = (date: Date) => {
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       month: 'short', 
//       day: 'numeric', 
//       year: 'numeric' 
//     });
//   };

//   return (
//     <div className="bg-slate-50 min-h-screen pb-16 overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
//       </div>

//       {/* Hero Header */}
//       <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        
//         <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
//               <Sparkles className="h-3.5 w-3.5 text-blue-400" />
//               <span className="text-xs font-mono tracking-widest text-slate-300">BOOK A DEMO</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
//               Schedule a{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                 Personalized Demo
//               </span>
//             </h1>
            
//             <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
            
//             <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
//               Choose a date and time that works for you. Our team will walk you through the platform and answer all your questions.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative mx-auto container px-6 lg:px-8 -mt-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* Contact Information */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-4 space-y-6"
//           >
//             <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-8">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">Book a Demo</h2>
//                 <p className="text-sm text-slate-500 mt-1">Select a date and time that works for you</p>
//               </div>

//               <div className="space-y-6">
//                 {/* Calendar Booking */}
//                 <motion.div 
//                   whileHover={{ x: 4 }}
//                   className="flex gap-4 items-start group cursor-pointer"
//                   onClick={() => setShowCalendar(true)}
//                 >
//                   <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shrink-0 group-hover:bg-purple-100 transition-colors">
//                     <Calendar className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-semibold text-slate-900">Schedule a Call</h3>
//                     {selectedDate && selectedTime ? (
//                       <p className="text-sm text-purple-600 font-medium">
//                         {formatDate(selectedDate)} at {selectedTime}
//                       </p>
//                     ) : (
//                       <p className="text-sm text-slate-400">Click to pick a time slot →</p>
//                     )}
//                   </div>
//                 </motion.div>

//                 {/* Email */}
//                 <motion.div 
//                   whileHover={{ x: 4 }}
//                   className="flex gap-4 items-start group"
//                 >
//                   <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
//                     <Mail className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-semibold text-slate-900">Email</h3>
//                     <a 
//                       href="mailto:support@stackmsp.com" 
//                       className="text-slate-600 hover:text-blue-600 transition-colors"
//                     >
//                       support@stackmsp.com
//                     </a>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Trust Badge */}
//               <div className="pt-6 border-t border-slate-100">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-2">
//                     <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">JD</div>
//                     <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-600">SK</div>
//                     <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">MR</div>
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-slate-700">Trusted by 2,000+ MSPs</p>
//                     <p className="text-xs text-slate-400">4.9/5 average rating</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6">
//               <p className="text-sm font-semibold text-slate-700">Quick Links</p>
//               <div className="flex flex-wrap gap-3 mt-3">
//                 <Link href="/pricing" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
//                   Pricing
//                 </Link>
//                 <Link href="/features" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
//                   Features
//                 </Link>
//                 <Link href="/trial" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
//                   Free Trial
//                 </Link>
//                 <Link href="/resources" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
//                   Resources
//                 </Link>
//               </div>
//             </div>
//           </motion.div>

//           {/* Booking Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="lg:col-span-8"
//           >
//             <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50">
//               {submitted ? (
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="text-center py-16 space-y-6"
//                 >
//                   <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
//                     <CheckCircle2 className="h-12 w-12" />
//                   </div>
//                   <h2 className="text-3xl font-bold text-slate-900">Demo Scheduled!</h2>
//                   <p className="text-slate-600 max-w-md mx-auto">
//                     We've sent a calendar invite to your email. Looking forward to showing you stackmsp!
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSubmitted(false);
//                       setSelectedDate(null);
//                       setSelectedTime(null);
//                       setForm({ name: "", email: "", company: "", message: "" });
//                     }}
//                     className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
//                   >
//                     Book another time
//                     <ArrowRight className="h-4 w-4" />
//                   </button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="text-center pb-4 border-b border-slate-100">
//                     <h3 className="text-xl font-bold text-slate-900">Book Your Demo</h3>
//                     <p className="text-sm text-slate-500 mt-1">Fill in your details and select a time slot</p>
//                   </div>

//                   {/* Selected Date & Time Display */}
//                   <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <Calendar className="h-5 w-5 text-blue-600" />
//                         <div>
//                           <p className="text-sm font-semibold text-slate-700">Selected Time</p>
//                           {selectedDate && selectedTime ? (
//                             <p className="text-sm text-blue-600 font-medium">
//                               {formatDate(selectedDate)} at {selectedTime}
//                             </p>
//                           ) : (
//                             <p className="text-sm text-slate-400">No time selected</p>
//                           )}
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => setShowCalendar(true)}
//                         className="text-xs font-semibold text-blue-600 hover:text-blue-700"
//                       >
//                         {selectedDate ? "Change" : "Select"}
//                       </button>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         required
//                         value={form.name}
//                         onChange={(e) => setForm({ ...form, name: e.target.value })}
//                         placeholder="Jane Doe"
//                         className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
//                         Work Email <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                         placeholder="jane@company.com"
//                         className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
//                       Company Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       required
//                       value={form.company}
//                       onChange={(e) => setForm({ ...form, company: e.target.value })}
//                       placeholder="Acme Service Provider"
//                       className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
//                       What would you like to see? <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       rows={4}
//                       required
//                       value={form.message}
//                       onChange={(e) => setForm({ ...form, message: e.target.value })}
//                       placeholder="Tell us about your current RMM, CRM & PSA tools, and what you'd like to see in the demo..."
//                       className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-y placeholder:text-slate-400"
//                     />
//                   </div>

//                   <div className="flex items-center gap-3 text-xs text-slate-400">
//                     <div className="flex gap-1">
//                       <span className="text-green-500">✓</span>
//                       <span>Secure form</span>
//                     </div>
//                     <span className="w-px h-4 bg-slate-200" />
//                     <span>We respect your privacy</span>
//                     <span className="w-px h-4 bg-slate-200" />
//                     <span>No spam</span>
//                   </div>

//                   <button
//                     type="submit"
//                     className="group w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-blue-800 active:scale-[0.985] transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
//                   >
//                     Schedule Demo
//                     <Calendar className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Calendar Modal */}
//       <AnimatePresence>
//         {showCalendar && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//             onClick={() => setShowCalendar(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-xl font-bold text-slate-900">Select Date & Time</h3>
//                 <button
//                   onClick={() => setShowCalendar(false)}
//                   className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
//                 >
//                   <X className="h-5 w-5 text-slate-400" />
//                 </button>
//               </div>

//               {/* Month Navigation */}
//               <div className="flex items-center justify-between mb-4">
//                 <button
//                   onClick={() => changeMonth(-1)}
//                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
//                 >
//                   <ChevronLeft className="h-5 w-5 text-slate-600" />
//                 </button>
//                 <span className="font-semibold text-slate-900">
//                   {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
//                 </span>
//                 <button
//                   onClick={() => changeMonth(1)}
//                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
//                 >
//                   <ChevronRight className="h-5 w-5 text-slate-600" />
//                 </button>
//               </div>

//               {/* Day Names */}
//               <div className="grid grid-cols-7 gap-1 mb-2">
//                 {dayNames.map((day) => (
//                   <div key={day} className="text-center text-xs font-semibold text-slate-400 py-2">
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Grid */}
//               <div className="grid grid-cols-7 gap-1">
//                 {getDaysInMonth(currentMonth).map((date, index) => (
//                   <div key={index} className="aspect-square">
//                     {date ? (
//                       <button
//                         onClick={() => handleDateSelect(date)}
//                         disabled={isPastDate(date)}
//                         className={`w-full h-full rounded-xl text-sm font-medium transition-all ${
//                           isPastDate(date)
//                             ? "text-slate-300 cursor-not-allowed"
//                             : isSelected(date)
//                             ? "bg-blue-600 text-white hover:bg-blue-700"
//                             : isToday(date)
//                             ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
//                             : "hover:bg-slate-100 text-slate-700"
//                         }`}
//                       >
//                         {date.getDate()}
//                       </button>
//                     ) : (
//                       <div className="w-full h-full" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Time Slots */}
//               {selectedDate && (
//                 <div className="mt-6 border-t border-slate-200 pt-4">
//                   <p className="text-sm font-semibold text-slate-700 mb-3">
//                     Select Time for {formatDate(selectedDate)}
//                   </p>
//                   <div className="grid grid-cols-2 gap-2">
//                     {timeSlots.map((time) => (
//                       <button
//                         key={time}
//                         onClick={() => handleTimeSelect(time)}
//                         className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
//                           selectedTime === time
//                             ? "border-blue-600 bg-blue-50 text-blue-600"
//                             : "border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
//                         }`}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="mt-6 flex gap-3">
//                 <button
//                   onClick={() => setShowCalendar(false)}
//                   className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (selectedDate && selectedTime) {
//                       setShowCalendar(false);
//                     } else {
//                       alert("Please select a date and time.");
//                     }
//                   }}
//                   className="flex-1 py-2.5 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
// ------




"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Sparkles, Calendar, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, X, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingStep, setBookingStep] = useState<"calendar" | "form">("calendar");
  
  const [contactForm, setContactForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    message: "" 
  });

  const [demoForm, setDemoForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    company: "", 
    message: "" 
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your demo.");
      return;
    }
    setDemoSubmitted(true);
    setShowBookingModal(false);
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const startingDay = firstDay.getDay();
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateSelect = (date: Date) => {
    if (isPastDate(date)) return;
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep("form");
  };

  const changeMonth = (increment: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
    setBookingStep("calendar");
  };

  const resetBooking = () => {
    setShowBookingModal(false);
    setBookingStep("calendar");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Mail className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-mono tracking-widest text-slate-300">CONTACT US</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Have questions or need support? Reach out to our team and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto container px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900">BOOK A DEMO</h2>
                <p className="text-sm text-slate-500 mt-1">We'd love to hear from you</p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Email</h3>
                    <a 
                      href="mailto:support@stackmsp.com" 
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      support@stackmsp.com
                    </a>
                  </div>
                </motion.div>

                

                {/* Book a Demo Button */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="pt-4"
                >
                  <button
                    onClick={openBookingModal}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a Demo
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-2">
                    Schedule a personalized demo with our team
                  </p>
                </motion.div>
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">JD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-bold text-purple-600">SK</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-bold text-emerald-600">MR</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Trusted by 2,000+ MSPs</p>
                    <p className="text-xs text-slate-400">4.9/5 average rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6">
              <p className="text-sm font-semibold text-slate-700">Quick Links</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Link href="/pricing" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Pricing
                </Link>
                <Link href="/features" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Features
                </Link>
                <Link href="/resources" className="text-xs text-slate-500 hover:text-blue-600 transition-colors px-3 py-1.5 bg-white rounded-full border border-slate-200 hover:border-blue-200">
                  Resources
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side (NO date selection) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50">
              {contactSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thanks for reaching out! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Send another message
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="text-center pb-4 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">Send us a Message</h3>
                    <p className="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+1 (234) 567-890"
                      className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full rounded-xl border border-slate-300 px-5 py-3.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-y placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex gap-1">
                      <span className="text-green-500">✓</span>
                      <span>Secure form</span>
                    </div>
                    <span className="w-px h-4 bg-slate-200" />
                    <span>We respect your privacy</span>
                    <span className="w-px h-4 bg-slate-200" />
                    <span>No spam</span>
                  </div>

                  <button
                    type="submit"
                    className="group w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-blue-800 active:scale-[0.985] transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={resetBooking}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white rounded-t-3xl z-10">
                <h3 className="text-xl font-bold text-slate-900">
                  {bookingStep === "calendar" ? "Select Date & Time" : "Complete Your Booking"}
                </h3>
                <button
                  onClick={resetBooking}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-slate-400" />
                </button>
              </div>

              <div className="p-6">
                {bookingStep === "calendar" ? (
                  // Calendar View
                  <div>
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => changeMonth(-1)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5 text-slate-600" />
                      </button>
                      <span className="font-semibold text-slate-900">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </span>
                      <button
                        onClick={() => changeMonth(1)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ChevronRight className="h-5 w-5 text-slate-600" />
                      </button>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {dayNames.map((day) => (
                        <div key={day} className="text-center text-xs font-semibold text-slate-400 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {getDaysInMonth(currentMonth).map((date, index) => (
                        <div key={index} className="aspect-square">
                          {date ? (
                            <button
                              onClick={() => handleDateSelect(date)}
                              disabled={isPastDate(date)}
                              className={`w-full h-full rounded-xl text-sm font-medium transition-all ${
                                isPastDate(date)
                                  ? "text-slate-300 cursor-not-allowed"
                                  : isSelected(date)
                                  ? "bg-purple-600 text-white hover:bg-purple-700"
                                  : isToday(date)
                                  ? "bg-purple-50 text-purple-600 hover:bg-purple-100"
                                  : "hover:bg-slate-100 text-slate-700"
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          ) : (
                            <div className="w-full h-full" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div className="mt-6 border-t border-slate-200 pt-4">
                        <p className="text-sm font-semibold text-slate-700 mb-3">
                          Select Time for {formatDate(selectedDate)}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                                selectedTime === time
                                  ? "border-purple-600 bg-purple-50 text-purple-600"
                                  : "border-slate-200 text-slate-600 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-600"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={resetBooking}
                        className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (selectedDate && selectedTime) {
                            setBookingStep("form");
                          } else {
                            alert("Please select a date and time.");
                          }
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-purple-600 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
                      >
                        Continue to Booking →
                      </button>
                    </div>
                  </div>
                ) : (
                  // Booking Form
                  <form onSubmit={handleDemoSubmit} className="space-y-5">
                    {/* Selected Date & Time Display */}
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="text-sm font-semibold text-slate-700">Selected Time</p>
                            {selectedDate && selectedTime && (
                              <p className="text-sm text-purple-600 font-medium">
                                {formatDate(selectedDate)} at {selectedTime}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setBookingStep("calendar")}
                          className="text-xs font-semibold text-purple-600 hover:text-purple-700"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="demo-name"
                          required
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="demo-email"
                          required
                          value={demoForm.email}
                          onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="demo-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="demo-phone"
                          required
                          value={demoForm.phone}
                          onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                          placeholder="+1 (234) 567-890"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="demo-company" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="demo-company"
                          required
                          value={demoForm.company}
                          onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                          placeholder="Acme Service Provider"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="demo-message" className="block text-sm font-semibold text-slate-700 mb-2">
                        What would you like to see? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="demo-message"
                        rows={3}
                        required
                        value={demoForm.message}
                        onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                        placeholder="Tell us about your current tools and what you'd like to see in the demo..."
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all resize-y placeholder:text-slate-400"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setBookingStep("calendar")}
                        className="flex-1 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-sm font-semibold text-white hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2"
                      >
                        Schedule Demo
                        <Calendar className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}