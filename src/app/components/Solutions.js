import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
const solutionsContent = {
  text: {
    headingSubTitle: "Our Solutions",
    headingTitle:
      "From safeguarding your home with state-of-the-art alarm systems",
    description:
      "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you have taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most . your family s well-being.",
    features: [
      {
        title: "Home Fire Safety",
      },
      {
        title: "Cybersecurity Solutions",
      },
      {
        title: "Emergency Preparedness",
      },
      {
        title: "Identity Theft Protection",
      },
    ],
    cta: {
      btn1: {
        href: "#_",
        label: "Get Started",
      },

      btn2: {
        href: "#_",
        label: "How it works?",
      },
    },
  },
  images: {
    img1: "/images/solution-img-1-min.jpg",
    img2: "/images/solution-img-2-min.jpg",
    img3: "/images/solution-img-3-min.jpg",
  },
  experience: {
    years: "25+",
    label: "Years of Experience",
  },
};
const Solutions = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
            <div className="flex gap-2">
              <div>
                <Image
                  src={solutionsContent.images.img1}
                  width={626}
                  height={640}
                  alt="Jeofreycodes.com"
                  className="object-cover h-full w-full rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2">
                <div className="w-4/12 flex">
                  <div className="ml-auto">
                    <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                  </div>
                </div>
                <div className="w-6/12">
                  <Image
                    src={solutionsContent.images.img3}
                    width={626}
                    height={626}
                    alt="Jeofreycodes.com"
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/*End cols*/}
            <div className="mt-auto">
              <div className="flex flex-col gap-2">
                <div>
                  <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                </div>
                <div>
                  <Image
                    src={solutionsContent.images.img2}
                    width={547}
                    height={573}
                    alt="Jeofreycodes.com"
                    className="object-cover h-full w-full rounded-lg shadow-2xl"
                  />
                </div>
                {solutionsContent.experience.label && (
                  <div>
                    <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                      <strong className="block font-bold text-primary text-xl lg:text-5xl">
                        {solutionsContent.experience.years}
                      </strong>
                      <span>{solutionsContent.experience.label}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
