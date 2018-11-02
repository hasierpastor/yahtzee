import React, { Component } from 'react';
import Rule from './Rule';
import './Scoring.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from './Rules';

class Scoring extends Component {
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="Scoring">
        <section className="Scoring-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <Rule
                name="Ones"
                ruleSelected={this.props.ruleSelected}
                score={scores.ones}
                doScore={evt => doScore('ones', ones.evalRoll)}
              />
              <Rule
                name="Twos"
                ruleSelected={this.props.ruleSelected}
                score={scores.twos}
                doScore={evt => doScore('twos', twos.evalRoll)}
              />
              <Rule
                name="Threes"
                ruleSelected={this.props.ruleSelected}
                score={scores.threes}
                doScore={evt => doScore('threes', threes.evalRoll)}
              />
              <Rule
                name="Fours"
                ruleSelected={this.props.ruleSelected}
                score={scores.fours}
                doScore={evt => doScore('fours', fours.evalRoll)}
              />
              <Rule
                name="Fives"
                ruleSelected={this.props.ruleSelected}
                score={scores.fives}
                doScore={evt => doScore('fives', fives.evalRoll)}
              />
              <Rule
                name="Sixes"
                ruleSelected={this.props.ruleSelected}
                score={scores.sixes}
                doScore={evt => doScore('sixes', sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className="Scoring-section Scoring-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <Rule
                name="Three of Kind"
                ruleSelected={this.props.ruleSelected}
                score={scores.threeOfKind}
                doScore={evt => doScore('threeOfKind', threeOfKind.evalRoll)}
              />
              <Rule
                name="Four of Kind"
                ruleSelected={this.props.ruleSelected}
                score={scores.fourOfKind}
                doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
              />
              <Rule
                name="Full House"
                ruleSelected={this.props.ruleSelected}
                score={scores.fullHouse}
                doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
              />
              <Rule
                name="Small Straight"
                ruleSelected={this.props.ruleSelected}
                score={scores.smallStraight}
                doScore={evt =>
                  doScore('smallStraight', smallStraight.evalRoll)
                }
              />
              <Rule
                name="Large Straight"
                ruleSelected={this.props.ruleSelected}
                score={scores.largeStraight}
                doScore={evt =>
                  doScore('largeStraight', largeStraight.evalRoll)
                }
              />
              <Rule
                name="Yahtzee"
                ruleSelected={this.props.ruleSelected}
                score={scores.yahtzee}
                doScore={evt => doScore('yahtzee', yahtzee.evalRoll)}
              />
              <Rule
                name="Chance"
                ruleSelected={this.props.ruleSelected}
                score={scores.chance}
                doScore={evt => doScore('chance', chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default Scoring;
