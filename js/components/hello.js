
var React = require('react');

class HelloComponent extends React.Component {
	constructor(props) {
		super (props);
		this.state = {
			wording: '欢迎： '
		};
	}
	render () {
		return (<div>{this.state.wording}  <span className='hello-name'>{this.props.name}</span></div>);
	}
}

module.exports = HelloComponent;