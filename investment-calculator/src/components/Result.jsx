
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInputProp }) {
  // console.log(userInputProp);
  const resultData = calculateInvestmentResults(userInputProp);
  const InitialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  // console.log(resultData);

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest (Yearly)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((YearData) => {
            const totalInterest =
              YearData.valueEndOfYear -
              YearData.annualInvestment * YearData.year -
              InitialInvestment;

            const totAmtInvested = YearData.valueEndOfYear - totalInterest;
            return (
              <tr key={YearData.Year}>
                <td>{YearData.year}</td>
                <td>{formatter.format(YearData.valueEndOfYear)}</td>
                <td>{formatter.format(YearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totAmtInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
