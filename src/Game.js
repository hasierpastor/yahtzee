import React, { Component } from 'react';
import Dice from './Dice';
import Scoring from './Scoring';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;
let STARTING_DICE = createStartingDice();

function createStartingDice() {
  let dice = [];
  for (let i = 0; i < NUM_DICE; i++) {
    let randNum = Math.ceil(Math.random() * 6);
    dice.push(randNum);
  }
  return dice;
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: STARTING_DICE,
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      ruleSelected: false
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map(
        // Check if its locked, if so, keep the number, if not, roll it
        (d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))
      ),
      // If you have remaining rolls, keep the locked state, otherwise lock all of them
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      //subtrack 1 roll for every time you roll
      rollsLeft: st.rollsLeft - 1,
      ruleSelected: false
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }

  async doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    await this.setState(st => ({
      //Update the score for this rule based off of the rule's method of scoring
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      //^should this be minus 1
      //Unlock all dice
      locked: Array(NUM_DICE).fill(false)
    }));
    //is this a bug?
    this.roll();
    await this.setState(st => ({
      ruleSelected: true
    }));
  }

  render() {
    return (
      <section>
        <Dice
          dice={this.state.dice}
          locked={this.state.locked}
          handleClick={this.toggleLocked}
        />
        <button
          className="Game-reroll"
          disabled={this.state.locked.every(x => x)}
          onClick={this.roll}
        >
          {this.state.rollsLeft} Rerolls Left
        </button>
        <Scoring
          doScore={this.doScore}
          scores={this.state.scores}
          ruleSelected={this.state.ruleSelected}
        />
      </section>
    );
  }
}

export default Game;
