import { Component } from './kreact/m-component';

class App extends Component {
    constructor(args) {
        super(args);
    }

    render() {
        return (
            <div>
                <h1>哈哈哈</h1>
                <input type='text' value={ this.props.value || "xiaoqu" }/>
            </div>
        )
    }
}

export default App;
