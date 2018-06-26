import React from "react";
import "./Output.css";
const Output = props => {
  let output = {
    MTW: {
      totalHours: props.hours * 2 + props.lateHours,
      get payRate() { return (props.grossTips / this.totalHours).toFixed(2); },
      get earlyTips() { return (this.payRate * props.hours).toFixed(2); },
      get lateTips() { return (this.payRate * props.lateHours).toFixed(2); },
      get line1() {
        return `The 7:30 servers made $${ this.earlyTips }, and the 9:00 server made $${ this.lateTips }.`;
      },
      get line2() {
        return `The hourly rate was $${ this.payRate }.`;
      }
    },
    Thursday: {
      supportTips: props.grossTips * 0.1,
      get split() { return ( props.grossTips - this.supportTips ) / 3; },
      get line1() { 
        return `All three servers made $${ this.split.toFixed(2) }.`; 
      },
      get line2() { 
        return `The support staff made $${ this.supportTips.toFixed(2) }.`; 
      }
    },
    Friday: {
      supportTips: props.grossTips * 0.1,
      get split() { return ( props.grossTips - this.supportTips ) / 4; },
      get line1() {
        return `All four servers made $${ this.split.toFixed(2) }.`;
      },
      get line2() {
        return `The support staff made $${ this.supportTips.toFixed(2) }.`;
      }
    },
    Weekend: {
      serverNumber: props.patio ? 5 : 4,
      supportTips: props.grossTips * 0.15,
      get split() { return ( props.grossTips - this.supportTips - 65 ) / this.serverNumber;
      },
      get line1() {
        return `All ${ props.patio ? "five" : "four" } servers made $${ this.split.toFixed(2) }, and the support staff made $${ this.supportTips.toFixed(2) }.`;
      },
      line2: `This includes $25.00 for the silverware roller, and a minimum of $40.00 for the kitchen.`
    }
  };


  return (
    <div className="outputBlock">
      <hr/>
      <p>{output[props.day].line1}</p>
      <p>{output[props.day].line2}</p>
      <hr/>
    </div>
  );
};

export default Output;
