import * as React from 'react';
import {NameItem} from 'tools/generator';

export default class Item extends React.Component<NameItem, {}> {
	render () {
		return (
			<div className='item'>
				<li className="item__text">
					{this.props.name} <i>{this.props.job}</i>
				</li>
			</div>
		);
	}
};
