"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const TaxHero = () => {
  const [imageSrc, setImageSrc] = useState('/tax-planing.jpg'); // Default image
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const service = searchParams.get('service'); // Get the service from the URL
    switch (service) {
      case 'Tax Planning':
        setImageSrc('/tax-planing.jpg');
        break;
      case 'Tax Compliance':
        setImageSrc('/tax-complaince.jpg');
        break;
      case 'Tax Resolution':
        setImageSrc('/tax-resolution.jpg');
        break;
      default:
        setImageSrc('/tax-planing.jpg'); // Default image if no service is provided
    }
  }, [searchParams]);

  return (
    <div className="bg-purple-700 text-white py-24 w-full flex items-center">
      <div className="container  flex max-w-6xl px-6 mx-auto flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Service</h1>
          <p className="text-xl mb-8">
            At ebotSAP, we specialize in providing comprehensive tax services tailored to meet the unique needs of our clients. Our team of experienced professionals is dedicated to helping you navigate the complexities of tax planning, tax resolution, and tax compliance, ensuring your financial health and peace of mind.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src={imageSrc} 
            alt="Tax Service" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default TaxHero;
