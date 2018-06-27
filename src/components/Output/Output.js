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
        return <p>The 7:30 servers made <span className="outputBlock__moneyValue">${ this.earlyTips }</span>, and the 9:00 server made <span className="outputBlock__moneyValue">${ this.lateTips }</span>.</p>;
      },
      get line2() {
        return <p>The hourly rate was <span className="outputBlock__moneyValue">${ this.payRate }</span>.</p>;
      }
    },
    Thursday: {
      supportTips: props.grossTips * 0.1,
      get split() { return ( props.grossTips - this.supportTips ) / 3; },
      get line1() { 
        return <p>Server tips: <span className="outputBlock__moneyValue">${ this.split.toFixed(2) }</span>.</p>; 
      },
      get line2() { 
        return <p>Support staff tips: <span className="outputBlock__moneyValue">${ this.supportTips.toFixed(2) }</span>.</p>; 
      }
    },
    Friday: {
      supportTips: props.grossTips * 0.1,
      get split() { return ( props.grossTips - this.supportTips ) / 4; },
      get line1() {
        return <p>Server tips: <span className="outputBlock__moneyValue">${ this.split.toFixed(2) }</span>.</p>;
      },
      get line2() {
        return <p>Support staff tips: <span className="outputBlock__moneyValue">${ this.supportTips.toFixed(2) }</span>.</p>;
      }
    },
    Weekend: {
      serverNumber: props.patio ? 5 : 4,
      supportTips: props.grossTips * 0.15,
      get split() { return ( props.grossTips - this.supportTips - 65 ) / this.serverNumber;
      },
      get line1() {
        return <p>All { props.patio ? "five" : "four" } servers made <span className="outputBlock__moneyValue">${ this.split.toFixed(2) }</span>, and the support staff made ${ this.supportTips.toFixed(2) }.</p>;
      },
      line2: (<p>(Includes <span className="outputBlock__moneyValue">$25.00</span> for a silverware roller, and minimum <span className="outputBlock__moneyValue">$40.00</span> for the kitchen.)</p>)
    }
  };


  return (
    <div className="outputBlock">
      
      {output[props.day].line1}
      {output[props.day].line2}
      
    </div>
  );
};

export default Output;
