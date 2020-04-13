import React from "react";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          onClick={() => props.setHomeScore(props.homeScore + 7)}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={() => props.setHomeScore(props.homeScore + 3)}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => props.setAwayScore(props.awayScore + 7)}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => props.setAwayScore(props.awayScore + 3)}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
