import { resultTableCalculator, formatter } from "./investment"

export default function Results({inputValues}){

    const investmentResults = resultTableCalculator(inputValues);
    
    return (
        <table id="result" className="center">
            <thead>
                <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map( (result, index) => 
                    <tr key={index}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.investmentValue)}</td>
                        <td>{formatter.format(result.interestOfYear)}</td>
                        <td>{formatter.format(result.totalInterest)}</td>
                        <td>{formatter.format(result.investedCapital)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}