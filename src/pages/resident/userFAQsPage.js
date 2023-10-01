import React, { useState } from "react";
import "../../css/tips.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import arrow from "../../assets/imgs/right-arrow.png";
import leftarrow from "../../assets/imgs/left-arrow.png";

const FAQsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-gray-200">
      <Sidebar className="left w-1/6" isSidebarOpen={isSidebarOpen} />
      <div className="right w-5/6">
        <Header />
        <div
          className={`hidden md:flex bg-gray-200 py-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 justify-center items-center hidden rounded-tr rounded-br ${
            isSidebarOpen ? "active" : ""
          }`}
        >
          <img
            className="h-4 w-4 object-contain"
            src={isSidebarOpen ? leftarrow : arrow} 
            alt="#"
            onClick={handleSidebarToggle}
          />
        </div>
        <div className="container mx-auto p-10 bg-white ">
          <h1 className="text-2xl font-bold mb-4">
            Frequently Asked Questions (FAQs) - Fire Safety and Prevention
          </h1>
          <p className="mb-6">
            Welcome to our Frequently Asked Questions (FAQs) section, where we
            address common queries related to fire safety and prevention. We
            believe that knowledge is an essential tool in safeguarding your
            home and family. If you have any questions not covered here, please
            don't hesitate to reach out to us.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              1. Why is fire safety important for residents?
            </h2>
            <p>
              Fire safety is crucial because it helps protect lives, property,
              and the environment. Preventing fires and knowing how to respond
              in case of an emergency can make a significant difference in
              reducing the impact of fires.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              2. How can I prevent fires in my home?
            </h2>
            <p>
              Preventing fires starts with awareness and responsible behavior.
              Some essential steps include:
            </p>
            <ul className="list-disc ml-6">
              <li>Regularly inspecting and maintaining electrical systems.</li>
              <li>Practicing safe cooking habits.</li>
              <li>Using heating appliances safely.</li>
              <li>Properly disposing of cigarettes and candles.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              3. What should I do if I discover a fire in my home?
            </h2>
            <p>
              Safety is the top priority. Evacuate immediately and call 911. If
              it's safe to do so, you can attempt to extinguish a small fire
              with a fire extinguisher following the PASS method: Pull, Aim,
              Squeeze, and Sweep. However, never put yourself at risk.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              4. How often should I test my smoke alarms?
            </h2>
            <p>
              Smoke alarms should be tested monthly by pressing the test button.
              Additionally, change the batteries at least once a year, and
              replace the entire smoke alarm every ten years.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              5. What should I include in a fire escape plan?
            </h2>
            <p>A fire escape plan should include:</p>
            <ul className="list-disc ml-6">
              <li>Two escape routes from every room.</li>
              <li>Safe meeting spots outside.</li>
              <li>Assigning responsibilities to family members.</li>
              <li>Practicing the plan regularly.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              6. Are there any fire safety tips for the holiday season?
            </h2>
            <p>
              During the holiday season, be cautious with decorations, candles,
              and lights. Keep Christmas trees well-watered and away from heat
              sources and turn off decorations when not in use.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              7. How can I childproof my home against fire hazards?
            </h2>
            <p>
              Childproofing your home involves securing electrical outlets,
              keeping matches and lighters out of reach, and educating children
              about fire safety.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              8. What are the most common causes of residential fires?
            </h2>
            <p>
              Common causes of residential fires include cooking accidents,
              heating equipment malfunctions, electrical faults, and open
              flames.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              9. How do I maintain my fire extinguisher?
            </h2>
            <p>
              Regular maintenance is essential for fire extinguishers. Ensure
              it’s visible and accessible, inspect it visually, and follow the
              manufacturer's guidelines for maintenance. Most importantly, make
              sure the pressure gauge is in the green zone.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              10. What should I do if my clothes catch fire?
            </h2>
            <p>
              If your clothes catch fire, remember to stop, drop, and roll.
              Cover your face with your hands to protect it and roll on the
              ground to smother the flames.
            </p>
          </div>

          <p>
            We hope these FAQs have provided valuable insights into fire safety
            and prevention. If you have more questions or need further
            information, don't hesitate to get in touch. Stay safe and be
            proactive in protecting your loved ones and your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
