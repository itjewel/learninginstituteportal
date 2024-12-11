'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CompaniesSection() {
  const [activeTab, setActiveTab] = useState('workingWith');

  const tabs = [
    { id: 'workingWith', label: 'Working with' },
    { id: 'membersOf', label: 'Members of' },
    { id: 'ourConcerns', label: 'Our Concerns' },
  ];

  const logos = {
    workingWith: [
      { src: '/images/home/companies/working_with/1_partner_logo_1663044423.png', alt: 'Ministry of Women and Children Affairs', link: '' },
      { src: '/images/home/companies/working_with/2_partner_logo_1663044423.png', alt: 'Independent University Bangladesh', link: '' },
      { src: '/images/home/companies/working_with/5_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
    ],
    membersOf: [
        { src: '/images/home/companies/members/1_partner_logo_1663044437.png', alt: 'Ministry of Women and Children Affairs', link: '' },
        { src: '/images/home/companies/members/2_partner_logo_1663044437.png', alt: 'Independent University Bangladesh', link: '' },
        { src: '/images/home/companies/members/3_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/4_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/5_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/5_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/6_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/6_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/7_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/7_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/8_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/8_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/9_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/9_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/10_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/11_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/12_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/13_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/14_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/15_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
    ],
    ourConcerns: [
        { src: '/images/home/companies/members/7_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/7_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/8_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/8_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/9_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/9_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/10_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/11_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/12_partner_logo_1663044438.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/13_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/14_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/15_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/1_partner_logo_1663044437.png', alt: 'Ministry of Women and Children Affairs', link: '' },
        { src: '/images/home/companies/members/2_partner_logo_1663044437.png', alt: 'Independent University Bangladesh', link: '' },
        { src: '/images/home/companies/members/3_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/4_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/5_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/5_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/6_partner_logo_1663044423.png', alt: 'University Logo 1', link: '' },
        { src: '/images/home/companies/members/6_partner_logo_1663044437.png', alt: 'University Logo 1', link: '' },
       
    ],
  };

  return (
    <div className="py-10 bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">700+ Companies Are Connected To Us</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-4">
          {logos[activeTab].map((logo, index) => (
            <Link key={index} href={logo.link} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={250}
                className="h-auto max-w-[150px] object-contain" // Restrict image size and ensure proper scaling
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
