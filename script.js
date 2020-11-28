const App = () => {
    return (
        <div className="App">
            <Calculator />
        </div>
    );
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currValue: '',
            result: '',
        };

        this.calculateExpression = this.calculateExpression.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    calculateExpression = () => {
        this.setState({
            result: String(Number(eval(this.state.currValue).toFixed(10))),
            currValue: this.state.currValue + '=' + String(Number(eval(this.state.currValue).toFixed(10)))
        });
    };

    handleButton(e) {
        let value = e.target.textContent;
        switch (value) {
            case '=':
                this.calculateExpression();
                break;
            default:
                let reg = /[+-/*.]/;
                if (!(reg.test(value) && reg.test(this.state.currValue[this.state.currValue.length - 1]))) {
                    if (this.state.result) {
                        this.setState({
                            currValue: this.state.result + value,
                            result: ''
                        });
                    } else {
                        this.setState({
                            currValue: this.state.currValue + value
                        });
                    }
                }
                break;
        }
    };

    clearDisplay() {
        this.setState({
            currValue: '',
            result: ''
        });
    };

    render() {
        return (
             <div className="calc">
                 <div className="display">
                     <div className="display__input" >{this.state.currValue}</div>
                     <div className="display__value">{this.state.result}</div>
                 </div>
                 <div className="buttons">
                     <button onClick={this.clearDisplay} id="clear-btn" className="action-btn">AC</button>
                     <button onClick={this.handleButton} className="action-btn">*</button>
                    
                     <button onClick={this.handleButton} className="action-btn">7</button>
                     <button onClick={this.handleButton} className="action-btn">8</button>
                     <button onClick={this.handleButton} className="action-btn">9</button>
                     <button onClick={this.handleButton} className="action-btn">/</button>

                     <button onClick={this.handleButton} className="action-btn">4</button>
                     <button onClick={this.handleButton} className="action-btn">5</button>
                     <button onClick={this.handleButton} className="action-btn">6</button>
                     <button onClick={this.handleButton} className="action-btn">-</button>

                     <button onClick={this.handleButton} className="action-btn">1</button>
                     <button onClick={this.handleButton} className="action-btn">2</button>
                     <button onClick={this.handleButton} className="action-btn">3</button>
                     <button onClick={this.handleButton} className="action-btn">+</button>
 
                     <button onClick={this.handleButton} className="action-btn">0</button>
                     <button onClick={this.handleButton} className="action-btn">.</button>
                     <button onClick={this.handleButton} id="equal-btn" className="action-btn">=</button>
                 </div>
                 <div>
                     <h2 className="author">Created and Designed By Almardan Isaev</h2>
                 </div>
             </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));