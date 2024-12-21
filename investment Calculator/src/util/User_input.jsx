export default function User_input({setInputValues, inputValues}){

    function changeHandler(e){
        const { name, value } = e.target ;
        inputValues[name] = value;

        setInputValues(preValues => ({
            ...preValues,
            [name]: value
        }));

    }
    return (
        <div id="user-input" className="input-group">
            <div>
                <label>Initial investment</label>
                <input type="number" name ="initialInvestment" value={inputValues.initialInvestment} onChange={changeHandler}/>
                <label>Annual investment</label>
                <input type="number" name ="annualInvestment" value={inputValues.annualInvestment} onChange={changeHandler}/>
            </div>
            <div>
                <label>Expected return</label>
                <input type="number" name ="expectedReturn" value={inputValues.expectedReturn} onChange={changeHandler}/>
                <label>Duration</label>
                <input type="number" name ="duration" value={inputValues.duration} onChange={changeHandler}/>
            </div>
        </div>
    )
}