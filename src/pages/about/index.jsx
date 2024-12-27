import React from "react";
import Hero from "../../components/hero";
import image from "../../assests/bg/about-bg.jpg";

export default function About() {
  return (
    <section className="about">
      <Hero image={image} />
      <div className="about_txt">
        <div>
          <p>
            Dear travellers! First of all, we want sincerely thank all people
            who already travelled with our company and trusted us. We are now
            pleased to present our travel company «Samarcanda Discovery», which
            is a well known travel agency located in Tashkent, Uzbekistan, and
            which proposes trips in all central Asia, especially in Uzbekistan,
            Kirghizstan, Turkmenistan, Tajikistan, Kazakhstan, as well as China.
            <br />
            <br />
            <br />
            The «Samarcanda Discovery» team is truly motivated, always
            available, listening to your needs and really wants to guarantee
            efficient as well as quick solutions about the organization of your
            travel. We want to make you discover the history, the culture, the
            traditions and mores of Uzbekistan and Central Asia. We also want to
            show you great cities along silk road: Tashkent, Samarkand, Bukhara,
            Khiva, Ferghana, Shakhrisabz and Termez. At every step, we will take
            care of your safety and your comfort, in a friendly atmosphere. All
            the road-trips we can organize are not presented in this website.
            Whatever are your needs, your budget, the number of people, we can
            establish with you the exact road trip , every details and we can
            propose tailored road trips to many destinations, especially along
            caravan silk road.
            <br />
            <br />
            <br />
            Please remind that tailored road trips are one of our strong
            expertises. Feel free to ask everything you want to prepare your
            future travel along the Silk Road. We wish you a good looking at our
            website and a beautiful forthcoming travel with us!
          </p>
        </div>
      </div>
    </section>
  );
}
