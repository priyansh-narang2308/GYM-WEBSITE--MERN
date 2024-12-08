import React from "react";

const WorkOutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          accusamus autem ex, neque id quisquam?
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          repudiandae iure aliquid veniam?
        </p>
        <div className="bootcamps">
          <div>
            <h1>Strength and Conditioning Bootcamp</h1>
            <p>
              Push your limits with our Strength and Conditioning Bootcamp!
              Designed to build muscle, improve endurance, and enhance your
              overall fitness level, this program is perfect for all fitness
              enthusiasts.
            </p>
          </div>

          <div>
            <h1>HIIT Fat Burn Bootcamp</h1>
            <p>
              Get ready to sweat and torch calories! Our High-Intensity Interval
              Training (HIIT) bootcamp is the ultimate workout to burn fat,
              boost metabolism, and improve cardiovascular fitness in a short
              time.
            </p>
          </div>

          <div>
            <h1>Yoga and Flexibility Bootcamp</h1>
            <p>
              Find your inner peace and increase flexibility in our Yoga and
              Flexibility Bootcamp. Perfect for beginners and advanced
              practitioners, this session combines stretching, balance, and
              mindfulness.
            </p>
          </div>
          <div>
            <h1>Outdoor Adventure Bootcamp</h1>
            <p>
              Step out of the gym and into the great outdoors! Join our Outdoor
              Adventure Bootcamp for a mix of trail running, bodyweight
              exercises, and team challenges that make fitness fun and exciting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutSessions;
