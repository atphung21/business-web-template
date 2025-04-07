import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ServiceCard } from "../components/serviceCard/ServiceCard";

export const TestimonialsPage = ({ title, description }) => (
  <div>
    <Header
      headerTitle={
        <AddressLink
          fontColor={"white"}
          address="12818 BROOKHURST STREET, GARDEN GROVE, CA 92840"
        />
      }
    />
    <CompanyLogo />
    <NavigationBar />
    <section
      style={{
        padding: "50px 20px",
        backgroundColor: "#edf2f7",
        textAlign: "center",
        letterSpacing: "3px",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "normal",
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr)",
          gap: "0.8rem",
        }}
      >
        <ServiceCard
          title="Dr. Harley, DaWanda & Tabitha H. (Santa Ana, CA)"
          description='"Jessica comes very highly recommended by the Howard family. She is a very hard and diligent worker and went beyond our expectations for our insurance needs. In this day and age where dependable people are at an all time low, with Jessica you will not be disappointed!"'
          image="/harley.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Sharin B. (Hawthorne, CA)"
          description=' "Jessica has helped me with my insurance and doctor selection so many times, I cannot count. She is caring and gets back to me immediately. I always feel she cares about me personally and remembers my health issues. She has spent endless time helping me. She is knowledgeable about different insurance carriers and doctors. She will do whatever it takes to get you the best possible care. I highly recommend Jessica for all your insurance needs."'
          imageSide="left"
        />
        <ServiceCard
          title="Richard E. (Meridian, TX)"
          description='"Just cares absolutely in amazing young girl she is answered every question iPad never made me feel the hurried or pressured he help me find exactly the plan I was looking for and I would definitely recommend her to everyone I know."'
          image="/richard.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Thomas W. (Phoenix, AZ)"
          description='"I have had the greatest pleasure of working with Jessica for several years.
          She has proven herself as a very dependable, hard and diligent worker. In this day and age dependable people seem to be at an all-time low,. She has went beyond my expectations to meet my insurance needs. and works very hard to help me find the insurance policy that fit my unique situation. Jessica has always been extremely helpful and willing to get me everything I am entitled to.
          She is absolutely an amazing young lady who provided correct answers to every question, She would even check and make sure, when necessary. Jessica never has made me feel hurried or pressured when she helps me and found the exact best plan for me. I highly recommend her to everyone. With Jessica you will not be disappointed!"'
          image="/thomas.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Terrance G & Khiem P. (Anaheim, CA)"
          description='"We have used Jessica for about 5 yrs, retirement medical, always addresses our concerns right away, highly recommended"'
          imageSide="left"
        />
        <ServiceCard
          title="Judith B. (Phoenix, AZ)"
          description='"Jessica is extremely helpful and is willing do get you everything you are entitled to.. She is extremely pleasant and knowledgeable! I enjoy working with her."'
          image="/judith.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Farhan K. (Cypress, CA)"
          description='"She helped us out greatly with our insurance plan, can’t recommend her enough!"'
          image="/farhan.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Shig M. (Orange, CA)"
          description='"If you need a helping hand she is there for you. If you need to learn what’s going on, she will educate you. Whatever the situation, she will find what works best for you with all of her willpower. If you take a look on her insurance agency webpage, it proves her dedication, knowledge, and diligence."'
          image="/shig.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Eva Lopez. (Long Beach, CA)"
          description={
            '"I\'m Eva Lopez I recommended Jessica she is very especial to work with insurance thank you for your help"'
          }
          image="/eva.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Devin P. (Apache Junction, AZ)"
          description={
            '"I was so overwhelmed with everything related to Medicare when I turned 65 and ready to retire. I was inundated with mail from so many different insurance companies, phone calls and messages every day of the week and people coming to my home knocking on my door. A good friend of mine suggested I contact Jessica Tcheng for help. Jessica helped me every step of the way. She spent a lot of time with me on the phone explaining everything in detail and the options available. She contacted my doctors’ offices and found out what plans they accepted. She sent me info on the plans she thought were the best for me to review and help with my choices. Jessica made the whole process so easy for me to understand and complete. I just can’t say enough good things about her!! If you have any issues, problems, or questions about Medicare, I suggest you contact Jessica Q Tcheng @ www.itoinsuranceagency.com, Phone: (949) 394-7738, Fax: (949) 301-9611 She will help you at no cost!!"'
          }
          imageSide="left"
        />
        <ServiceCard
          title="Esther & Ramon A. (Santa Clarita, CA)"
          description={
            '"She\'s very helpful, attentive and she treats me like she\'s helping a family member."'
          }
          image="/esther.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Letty J. (Cerritos, CA)"
          description={
            '"Jessica Tcheng is a wonderful and efficient agent. Every time its open enrollment and I need for her to check on new plans that can save me money ,she is quick to respond with different plans that may benefit my families needs. I highly recommend her to all my friends and family."'
          }
          imageSide="left"
        />
        <ServiceCard
          title="Larry S. (Phoenix, AZ)"
          description={
            '"I must say Jessica Is very swift and a tentative Towards her clients needs. I have been a client now going on 7 years And I have to say she has always had my best interest in mind regarding my health care needs and has gone out of her scope to assist me, I would definitely recommend her for those of you that have insurance questions and/or needs"'
          }
          image="/larry.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Chris F. (Peoria, AZ)"
          description={
            '"I have had the greatest pleasure working with Jessica. She understands her clients needs and works very hard to help them find the insurance policy that fits their unique situation."'
          }
          image="/chris.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Vince K. (Bullhead City, AZ)"
          description={
            '"Medicare??? Who can understand it. I read all the literature that came in the mail. It was time for me to make some choices. Lucky for me I met Jessica Tcheng. Her knowledge and patient way of explaining made it easy for me. I had a great outcome. When I moved out of state Jessica helped me with a smooth transition with Insurance. If you are needing Insurance, my suggestion is to talk to Jessica. She has always been available If I had any questions."'
          }
          image="/vince.webp"
          imageSide="left"
        />
        <ServiceCard
          title="Paul D. (Westminster, CA)"
          description={
            '"Jessica helped me out with some problems I had even after my new insurance started. She is exceptional as an agent."'
          }
          image="/paul.webp"
          imageSide="left"
        />{" "}
        <ServiceCard
          title="Jane G. (Phoenix, AZ)"
          description={
            '"Jessica Tcheng did a very thorough job in researching a new health insurance plan to fit my particular needs. She also suggested a new Primary Care provider that I have been very happy with. What a relief to have her expertise in making these important decisions. Her willingness to "go the extra mile" has been a true blessing!"'
          }
          imageSide="left"
        />{" "}
        <ServiceCard
          title="William B. (Long Beach, CA)"
          description={
            '"ITO Insurance Agency is awesome! Also Jessica Tcheng is awesome! If you really want a good insurance plan better get with Jessica. Someone who really loves what she dose, her job. And she really love helping people, especially us seniors. I tell you the truth, there\'s been a couple of times I\'ve gotten so frustrated trying to distinguish which insurance plan is a good insurance plan from going through quite a few? So I call Jessica for help, and I get help and no more frustration! She finds me a really good insurance plan. William Beck US Army Disabled Veteran."'
          }
          image="/william.webp"
          imageSide="left"
        />
      </div>
    </section>
    <ContactSection
        phoneNumber={"(949) 317-2220"}
        extension={"2"}
        email={"info@itoinsuranceagency.com"}
        fax={"(949) 301-9611"}
      />
      <Footer />
  </div>
);
