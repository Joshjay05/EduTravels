"use client";

import { cardService } from "@/constant";
import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Servspages from "@/app/servicePage";
import EnquiryForm from "./EnquiryForm";

const Services = () => {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleFormSubmitSuccess = () => {
    console.log("Form submitted successfully, hiding form");
    setShow(false);
  };

  return (
    <section id="services" className="max-container padding-container py-24">
      <article className="flex flex-col gap-8 ">
        <h1 className="bold-32 font-[700] text-center">Our Services</h1>
        <p className="lg:text-2xl">
          Take your career to the Next level regardless of the travel plans
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardService.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </article>
      <>
        <Servspages />
      </>
      <div
        className="flex items-center justify-center my-6"
        onClick={handleButtonClick}
      >
        <Button
          type="button"
          title="Get Started..."
          variant="btn_dark_rounded"
          onClick={handleButtonClick}
        />
      </div>
      <div id="enquiry">
        {show && <EnquiryForm onSubmitSuccess={handleFormSubmitSuccess} />}
      </div>
    </section>
  );
};

export default Services;
