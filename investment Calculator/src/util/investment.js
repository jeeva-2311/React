export function resultTableCalculator({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];

  // Ensure initialInvestment and annualInvestment are numbers
  const _initialInvestment = parseFloat(initialInvestment);
  const _annualInvestment = parseFloat(annualInvestment);
  const _expectedReturn = parseFloat(expectedReturn);

  const _interest = _initialInvestment * (_expectedReturn / 100);
  const _investedCapital = _initialInvestment + _annualInvestment;

  annualData.push({
    year: 1, 
    interestOfYear: _interest,
    totalInterest: _interest,
    investedCapital: _investedCapital,
    investmentValue: _investedCapital + _interest, 
  });

  if (duration > 1) 
    for (let i = 1; i < duration; i++) {

      const previous_year = annualData[i - 1];
      const _tempInterest = previous_year.investmentValue * (_expectedReturn / 100);
      const previous_year_invesetment_capital = previous_year.investedCapital;

      annualData.push({
        year: i + 1, 
        interestOfYear: _tempInterest,
        totalInterest: _tempInterest + previous_year.totalInterest,
        investedCapital: previous_year_invesetment_capital + _annualInvestment,
        investmentValue: previous_year.totalInterest + previous_year_invesetment_capital + _annualInvestment + _tempInterest,
      });
    }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
