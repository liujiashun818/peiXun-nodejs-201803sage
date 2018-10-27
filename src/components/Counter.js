import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
class Counter extends Component{
	render() {
		return (
			<div>
				<p>{this.props.number}</p>
				<button onClick={this.props.add}>+</button>
			</div>
		)
	}
}
// {number:0}
export default connect(
	state => state,
	actions
)(Counter);