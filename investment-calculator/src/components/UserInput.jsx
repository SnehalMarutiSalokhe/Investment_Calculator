/* eslint-disable react/prop-types */

export default function UserInput({ onChange, userInputProp }) {
  return (
    <div>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label> Initial Investment</label>
            <input
              type="number"
              required
              value={userInputProp.initialInvestment}
              onChange={(e) => onChange("initialInvestment", e.target.value)}
            />
          </p>

          <p>
            <label> Annual Investment</label>
            <input
              type="number"
              required
              value={userInputProp.annualInvestment}
              onChange={(e) => onChange("annualInvestment", e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return (Rate of interest) </label>
            <input
              type="number"
              required
              value={userInputProp.expectedReturn}
              onChange={(e) => onChange("expectedReturn", e.target.value)}
            />
          </p>
          <p>
            <label>Duration (Year)</label>
            <input
              type="number"
              required
              value={userInputProp.duration}
              onChange={(e) => onChange("duration", e.target.value)}
            />
          </p>
        </div>
      </section>
    </div>
  );
}
