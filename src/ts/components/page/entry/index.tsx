import * as React from 'react';
import {Link, IndexLink}from 'react-router';
import {connect} from 'react-redux';
import {generateClick} from 'flux/people';
import {NameItem} from 'tools/generator';

export interface ItemListPropsInterface {
	items: Array<NameItem>;
};

export class ItemsList extends React.Component<ItemListPropsInterface, {}> {
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

export class Item extends React.Component<NameItem, {}> {
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

export class AppName extends React.Component<any, {}> {
	render() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
};

export class BtnGenerate extends React.Component<any, {}> {
	render () {
		return (
			<input type='button' value={this.props.value} onClick={this.props.onClick} />
		);
	}
};

@connect(
	({people}) => ({people}),
	dispatch => {
		return {
			onClickGenerate: (count: number) => dispatch(generateClick(count))
		};
	}
)
export class GeneratorApp extends React.Component<any, {}> {

	onGenerateClick() {
		this.props.onClickGenerate(5);
	}

	render () {
		return (
			<section id="generator-app">
				<section id="content">
					<ItemsList items={this.props.people} />
				</section>
				<div id="buttons">
					<BtnGenerate
						value='Regenerate list'
						onClick={this.onGenerateClick.bind(this)}
						 />
				</div>
				<Link to="/about">About this project</Link>
			</section>
		);
	}
};

export class App extends React.Component<any, any> {
	render () {
		return (
			<div id="app">
				<div id="app-name">
					<AppName name='Empty Typescript+React project' />
				</div>
				{this.props.children}
			</div>
		);
	}
};
