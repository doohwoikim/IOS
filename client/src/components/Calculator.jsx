import React, { useState } from 'react';
import '../index.css';
import HomeButton from './HomeButton';
import Top from './Top';

function Calculator() {
    const [output, setOutput] = useState('');

    const handleButtonClick = (e) => {
        const value = e.target.value;
        switch (value) {
            case 'C':
                setOutput('');
                break;
            case '=':
                try {
                    // eslint-disable-next-line no-eval
                    setOutput(eval(output) || '');
                } catch (error) {
                    setOutput('Error');
                }
                break;
            default:
                setOutput(output + value);
                break;
        }
    };

    return (
        <div>
            <Top/>
            <div className="calculator">
                <form name="forms">
                    <input type="text" name="output" value={output} readOnly />
                    <input type="button" className="clear" value="C" onClick={handleButtonClick} />
                    <input type="button" className="operator" value="÷" onClick={handleButtonClick} />
                    <input type="button" value="1" onClick={handleButtonClick} />
                    <input type="button" value="2" onClick={handleButtonClick} />
                    <input type="button" value="3" onClick={handleButtonClick} />
                    <input type="button" className="operator" value="*" onClick={handleButtonClick} />
                    <input type="button" value="4" onClick={handleButtonClick} />
                    <input type="button" value="5" onClick={handleButtonClick} />
                    <input type="button" value="6" onClick={handleButtonClick} />
                    <input type="button" className="operator" value="+" onClick={handleButtonClick} />
                    <input type="button" value="7" onClick={handleButtonClick} />
                    <input type="button" value="8" onClick={handleButtonClick} />
                    <input type="button" value="9" onClick={handleButtonClick} />
                    <input type="button" className="operator" value="-" onClick={handleButtonClick} />
                    <input type="button" className="dot" value="." onClick={handleButtonClick} />
                    <input type="button" className="operator result" value="=" onClick={handleButtonClick} />
                </form>
            </div>
            <HomeButton/>
        </div>
    );
}

export default Calculator;
