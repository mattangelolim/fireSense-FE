import React from "react";
import "../css/tips.css";
import SidebarAdmin from "../components/AdminSidebar";
import Header from "../components/Header";

const AdminTipsPage = () => {
  return (
    <div className="flex bg-gray-200">
      <SidebarAdmin className="w-1/6" />
      <div className="w-5/6">
        <Header />
        <div className="container mx-auto p-8 bg-white">
          <h1 className="text-2xl font-bold mb-4">
            Fire Tips and Safety Knowledge
          </h1>
          <p className="mb-6">
            Welcome to our comprehensive guide on fire safety and prevention.
            Ensuring the safety of your home and loved ones is paramount, and
            understanding fire safety basics is a crucial part of this. In this
            section, we'll cover various aspects of fire safety, from prevention
            to emergency preparedness.
          </p>
          <h2 className="text-xl font-bold mb-2">1. Fire Safety Basics</h2>
          <p className="mb-4">
            Fire safety is all about taking proactive steps to prevent fires and
            knowing how to react if one occurs. Here are some fundamental
            principles:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Understanding the Risks: Recognize the common causes of fires in
              homes, including electrical faults, cooking accidents, and open
              flames.
            </li>
            <li>
              Importance of Prevention: Be aware that most fires can be
              prevented through responsible behavior and adequate safety
              measures.
            </li>
            <li>
              Stay Informed: Stay updated with the latest fire safety guidelines
              and local regulations. Knowledge is your best defense against fire
              hazards.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">2. Fire Prevention</h2>
          <p className="mb-4">
            A significant part of fire safety is identifying and mitigating
            potential hazards within your home:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Electrical Safety: Inspect electrical cords and outlets regularly.
              Avoid overloading circuits and replace damaged cords immediately.
            </li>
            <li>
              Cooking Safety: Stay attentive while cooking, especially when
              using stovetops or open flames. Keep flammable materials away from
              cooking appliances.
            </li>
            <li>
              Heating Safety: If you use space heaters, keep them away from
              flammable objects. Ensure proper ventilation when using
              wood-burning stoves or fireplaces.
            </li>
          </ul>

          <h3 className="text-lg font-bold mb-2">Smoking Safety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Smoke Outside: Avoid smoking indoors or near flammable materials.
            </li>
            <li>
              Use Ashtrays: Always use deep, sturdy ashtrays. Ensure cigarettes
              are fully extinguished before disposal.
            </li>
          </ul>

          <h3 className="text-lg font-bold mb-2">Candle Safety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Never Leave Candles Unattended: Blow out candles before leaving a
              room or going to sleep.
            </li>
            <li>
              Keep Away from Children and Pets: Place candles out of reach of
              curious hands or paws.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">3. Fire Preparedness</h2>
          <p className="mb-4">
            Smoke alarms are crucial for early fire detection:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Install Smoke Alarms: Install smoke alarms in every sleeping area
              and on each level of your home. Test them monthly and change the
              batteries annually.
            </li>
            <li>
              Interconnected Alarms: Consider interconnected alarms so that when
              one sounds, they all sound.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">
            4. What to Do in Case of a Fire
          </h2>
          <p className="mb-4">
            In case of a fire, remember these critical steps:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Evacuation: If you discover a fire, leave the building
              immediately. Crawl low if there's smoke, as cleaner air is near
              the floor.
            </li>
            <li>
              Call 911: Dial emergency services as soon as you're safe and
              provide your location.
            </li>
            <li>
              Fire Extinguishers: Use a fire extinguisher if it's safe to do so,
              following the PASS method: Pull, Aim, Squeeze, and Sweep.
            </li>
          </ul>

          <p>
            These are just the foundational elements of fire safety. Explore the
            rest of our website for in-depth information on smoke alarms,
            emergency contacts, seasonal fire safety, and more. Your safety and
            the safety of your loved ones is our top priorities.
          </p>

          <p className="font-bold mt-4">Stay safe and informed!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminTipsPage;
