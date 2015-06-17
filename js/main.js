
var React = require('react');


require('../css/style.css'); 

var HelloComponent = require('./components/hello');

console.log('-react ------- 主程序 starting ...');
var wording = '我是传奇';

var MainComponent = React.createClass({
    render: function () {
        return (
            <div className="component-hello">
                <HelloComponent name={wording} />
            </div>
        )
    }
});

React.render(<MainComponent/>, document.getElementById('component'));