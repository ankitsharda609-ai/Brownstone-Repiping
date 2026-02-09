
import React from 'react';
import { FAQItem, Service } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Why is PEX better for a Brownstone than copper?",
    answer: "In older Brooklyn homes, PEX is often superior because its flexibility allows us to snake it through existing walls with minimal openings. This preserves your historic plaster and wood details. Additionally, PEX is highly resistant to freezing and scale buildup, which are common issues in NYC's aging infrastructure."
  },
  {
    question: "Do I need to replace my internal lead pipes?",
    answer: "Yes. Even if your main service line is new, 'secondary' lead pipes or lead-soldered joints inside the home can still contaminate your water. Our secondary lead pipe replacement service identifies and removes these risks, ensuring your family's water is 100% safe."
  },
  {
    question: "How long does a typical repiping project take?",
    answer: "Most brownstone repiping projects are completed within 3 to 5 days. Because we specialize in PEX retrofitting, we significantly reduce the time spent on demolition and wall repairs compared to traditional methods."
  },
  {
    question: "Will you need to break my historic walls?",
    answer: "We pride ourselves on 'minimal-impact' plumbing. While some access points are necessary, our PEX Retrofit technique allows us to perform 'surgical' cuts rather than full-wall removals, keeping your home’s historic character intact."
  }
];

export const SERVICES: Service[] = [
  {
    id: "lead-replacement",
    title: "Secondary Lead Pipe Replacement",
    icon: "ShieldCheck",
    description: "Surgical removal of hazardous internal lead lines without destroying original crown molding.",
    fullContent: "While the city often focuses on the main service line, many brownstones still have 'secondary' lead pipes—older internal lines that can leach lead into your drinking water. We provide surgical replacement of these lines, removing health risks without destroying your historic plaster walls or original crown molding."
  },
  {
    id: "pex-retrofit",
    title: "PEX Retrofit & Upgrades",
    icon: "Layers",
    description: "Flexible, freeze-resistant piping snaked through existing wall cavities for minimal disruption.",
    fullContent: "Traditional pipe replacement in a brownstone used to mean 'gutting' the house. With our PEX Retrofit system, we use flexible, freeze-resistant piping that can be snaked through existing wall cavities. It prevents bursts during New York winters, costs less due to reduced labor, and operates quietly."
  },
  {
    id: "lpc-compliant",
    title: "LPC Compliant Restoration",
    icon: "Building",
    description: "Expert plumbing updates that strictly adhere to Landmark Preservation Commission guidelines.",
    fullContent: "Owning a landmarked property comes with responsibility. We handle the paperwork and execution of plumbing upgrades that satisfy both modern building codes and historic preservation requirements."
  }
];

export const CONTACT_INFO = {
  address: "300 Cadman Plaza W, Brooklyn, NY 11201",
  phone: "(844) 340-6413",
  email: "hello@brownstonerepiping.com",
  hours: "Mon-Fri: 8:00 AM - 6:00 PM, Emergency 24/7"
};
