import * as React from 'react';
import Item from './item';
import {NameItem} from 'tools/generator';

export interface ItemListPropsInterface {
	items: Array<NameItem>;
};

export default class ItemsList extends React.Component<ItemListPropsInterface, {}> {
	render () {
		const items: Array<React.ReactElement<NameItem>> = this.props.items.map((item) => {
			return (
				<Item name={item.name} job={item.job} key={item.id} id={item.id}></Item>
			);
		});

		return (
			<ul className='items-list'>
				{items}
			</ul>
		);
	}
};
