import React from "react";
import Banner from "@/components/banner";

const AboutUsPage = () => {
  return (
    <section>
      <Banner />

      <div className="max-w-screen-2xl px-4 lg:px-14 mx-auto flex flex-col items-center gap-y-10 py-20">
        <section
          data-name={"about-us-section"}
          className={"flex flex-col gap-y-7 "}
        >
          <div className={"flex flex-col gap-y-7  items-center"}>
            <h2 className={"text-blue-500 font-bold text-2xl md:text-3xl"}>
              About Us
            </h2>
            <div className={"w-full"}>
              <p className={"text-center text-base "}>
                Edubest Travels LTD is a UK-based company dedicated to helping
                busy parents provide their children with enriching travel
                experiences abroad.
              </p>{" "}
              <p className={"text-center text-base "}>
                Locations: Ghana and the UK
              </p>{" "}
              <p className={"text-center text-base "}>
                Industry: Travel and Education
              </p>{" "}
              <p className={"text-center text-base "}>
                Target Audience: Children and young adults in Ghana, ages 10 to
                17
              </p>
            </div>
          </div>
          <div className={"flex flex-col gap-y-7  items-center"}>
            <h3 className={" font-medium text-xl md:text-2xl"}>
              Mission Statement
            </h3>
            <div className={"w-full"}>
              <p className={"text-center text-base "}>
                Edubest Travels is dedicated to providing children in Ghana and
                other parts of the world with enriching travel experiences that
                expand horizons, build cultural capital, and develop confidence
                through exposure to diverse cultures and environments across
                Europe and other parts of the world. Edubest is committed to
                providing a safe, caring experiences for children of busy
                parents.
              </p>
            </div>
          </div>
          <div className={"flex flex-col gap-y-7  items-center"}>
            <h3 className={" font-medium text-xl md:text-2xl"}>Core Values</h3>
            <div className={"w-full space-y-4"}>
              <p className={"text-center text-base "}>
                Care: We prioritise the safety, well-being, and comfort of all
                children in our care. Every trip is designed to ensure a
                nurturing environment that allows children to thrive as they
                explore new cultures and experiences.
              </p>
              <p className={"text-center text-base "}>
                Courageous: We encourage children to step out of their comfort
                zones, embrace new challenges, and build the courage to explore
                the world beyond their borders.
              </p>
              <p className={"text-center text-base "}>
                Confidence: Through our travel experiences, we help children
                develop self-assurance and a strong sense of identity, which
                empowers them to interact confidently with people from various
                backgrounds.
              </p>
            </div>
          </div>
          <div className={"flex flex-col gap-y-7  items-center"}>
            <h3 className={" font-medium text-xl md:text-2xl"}>
              Edubest Values
            </h3>
            <div className={"w-full space-y-4"}>
              <p className={"text-center text-base "}>
                Excellence - Striving for the highest quality in all endeavours,
                aiming to exceed expectations in every aspect of service.
              </p>
              <p className={"text-center text-base "}>
                Equity - Ensuring fairness and inclusivity, providing equal
                opportunities for all children regardless of their background.
              </p>
              <p className={"text-center text-base "}>
                Empowerment - Creating curiosity and a desire to discover new
                places, ideas, and experience, knowledge, and confidence to take
                charge of their own learning and growth
              </p>{" "}
              <p className={"text-center text-base "}>
                Ethical - Conducting all activities with integrity, honesty, and
                respect for others, adhering to the highest moral standards.
              </p>
            </div>
          </div>
        </section>
        <section data-name={"service-offered"} className={"py-10"}>
          <h2
            className={
              "text-blue-500 font-bold text-center text-2xl md:text-3xl"
            }
          >
            Services Offered
          </h2>
          <div className={"pt-6 space-y-4"}>
            <div className={"flex flex-col gap-y-4  items-center"}>
              <h3 className={" font-medium text-xl md:text-2xl"}>
                Visa Applications
              </h3>
              <div className={"w-full space-y-4"}>
                <p className={"text-center text-base "}>
                  Assistance with the entire visa application process for
                  children traveling to Europe and other destinations. Guidance
                  on the required documentation and interviews, ensuring a
                  smooth and stress-free process.
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-y-4  items-center"}>
              <h3 className={" font-medium text-xl md:text-2xl"}>
                Hosting and Accommodation
              </h3>
              <div className={"w-full space-y-4"}>
                <p className={"text-center text-base "}>
                  We provide safe, comfortable, and well-supervised
                  accommodations for students during educational tours. Our
                  hosting includes full board, with meals and 24/7 staff
                  support. Students stay in secure, child-friendly environments,
                  with accommodations near educational and cultural landmarks.
                  Our team ensures a nurturing atmosphere, promoting learning
                  and cultural exchange throughout their stay.
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-y-4  items-center"}>
              <h3 className={" text-center font-medium text-xl md:text-2xl"}>
                Documenting the experience for memorabilia ( photographs )
              </h3>
              <div className={"w-full space-y-4"}>
                <p className={"text-center text-base "}>
                  We offer professional photography services during educational
                  tours, capturing key moments of students’ experiences. These
                  photos serve as lasting memories and educational
                  documentation, highlighting the cultural and learning
                  activities. Each student receives a curated collection of
                  photos, preserving the trip&apos;s highlights for both
                  personal reflection and sharing with family.
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-y-4  items-center"}>
              <h3 className={"text-center font-medium text-xl md:text-2xl"}>
                Exposure to experience educational facilities in different
                countries.
              </h3>
              <div className={"w-full space-y-4"}>
                <p className={"text-center text-base "}>
                  Our educational tours provide students with the unique
                  opportunity to visit renowned educational institutions abroad.
                  They experience different teaching styles, explore historic
                  universities, and engage with local students and educators.
                  This exposure broadens their understanding of global education
                  systems, fosters academic curiosity, and inspires future
                  learning goals.
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-y-4  items-center"}>
              <h3 className={"text-center font-medium text-xl md:text-2xl"}>
                Exposure to experience educational system.
              </h3>
              <div className={"w-full space-y-4"}>
                <p className={"text-center text-base "}>
                  UK qualified teachers to support the children on the trips
                  which will include educational insight into UK classroom.
                  Support on writing/blog evidence of the trip for all children
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-10 space-y-4"}>
          <h2
            className={
              "text-blue-500 font-bold text-center text-2xl md:text-3xl"
            }
          >
            Why choose us
          </h2>
          <div className={"w-full space-y-4"}>
            <p className={"text-center text-base "}>
              The Director and stakeholders of this company, although British,
              are of Ghanaian heritage and understands both the Ghana and the
              British culture.
            </p>
            <p className={"text-center text-base "}>
              Betty Johnson - A teacher in the Uk for 20years, during this
              period has served in different positions as Teaching and learning
              consultant for one of the biggest MAT in London, Vice Principal
              and Headteacher of an inner London Primary School. During this
              period, Betty has been dedicated to providing a safe environment
              where all children regardless of the background or ability thrive
              academically and socially. Safeguarding of children is a top
              priority and all KSCIE updates are fully obliged and enforced in
              the settings she has lead. As a educational practitioner who has a
              deeper understanding of the curriculum both in Ghana and in UK,
              she understands the relevance of enriching, broadening children’s
              understanding and knowledge outside of the curriculum building
              their cultural capital. Growing up in Ghana where sometimes
              children’s confidence could be overshadowed by cultural humility,
              it is my passion to give children the confidence the yneed to be
              bold, speak up and share their knowledge
            </p>
            <p className={"flex flex-col sm:items-center gap-y-2"}>
              <span className={"inline-block"}>
                Refer too the note book for the detail website setup.
              </span>
              <span className={"inline-block"}>
                Joey to do photographing to support.
              </span>
              <span className={"inline-block"}>
                Trip in October- in person meeting with parents. If possible.
                Travel with Kerry
              </span>
              <span className={"inline-block"}>
                Brochure of the visits to be printed for the session
              </span>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUsPage;
