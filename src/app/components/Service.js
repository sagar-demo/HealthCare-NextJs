import React from "react";
import Image from "next/image";

const serviceContent = {
  heading: {
    headingSubTitle: "Our Awesome Service",
    headingTitle: "Our Services",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      icon: "/images/icon-1.svg",
      title: "Child Safety Solutions",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-2.svg",
      title: "Elderly Care Monitoring",
      description:
        "Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.",
    },
    {
      icon: "/images/icon-3.svg",
      title: "Home Fire Safety",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-4.svg",
      title: "Financial Planning",
      description:
        "Expert financial advice to help you build a strong financial foundation and plan for your family long-term security.",
    },
    {
      icon: "/images/icon-5.svg",
      title: "Personal Safety Devices",
      description:
        "Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      icon: "/images/icon-6.svg",
      title: "Insurance Coverage ",
      description:
        "Tailored insurance policies to protect your family financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};
const Service = () => {
  return (
    <section className="py-20">
    <div className="container mx-auto px-4">
    <div className="max-w-xl mx-auto text-center mb-20">
    
    {serviceContent.heading.headingSubTitle && (
        <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-10">{serviceContent.heading.headingSubTitle}</span>
      )}
        {serviceContent.heading.headingTitle && (

        <h2 className="text-2xl lg:text-4xl font-bold text-heading mb-5">
        {serviceContent.heading.headingTitle}
        </h2>
        )}
        {serviceContent.heading.description && (
        <p className="leading-relaxed text-body ">
        {serviceContent.heading.description}
        </p>
        )}

    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 lx:grid-cols-3 gap-10">
    {serviceContent.items.map((item, index) => (
    <div className="flex space-x-10" key={index}>
    <div className="w-14 shrink-0">
    
<span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
<Image src={item.icon} width={62} height={62} alt="Jeofreycodes.com" />
</span>
    </div>
    <div>
    {item.title&&(
        <h3 className="text-heading font-bold text-md mb-3">{item.title}</h3>
    )}
  
   {item.description&&(
    <p className="leading-relaxed">{item.description}</p>

   )}
    </div>
    </div>
    ))}
    </div>
    </div>
    </section>
  )
};

export default Service;
