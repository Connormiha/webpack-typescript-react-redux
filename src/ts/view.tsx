'use strict';

import * as React from 'react';
import * as Store from './store';
import {Link, IndexLink}from 'react-router';
import { connect } from 'react-redux';
import { generateClick } from './actions';
import {NameItem} from './generator';

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

export class About extends React.Component<any, {}> {
	render () {
		return (
			<div>
				<p>This is Started development kit for Single Page Application.</p>
				<p>Using stack technologies:</p>
				<ul className='list'>
					<li>React</li>
					<li>React-router</li>
					<li>Typescript</li>
					<li>Webpack</li>
					<li>Stylus</li>
				</ul>
				<IndexLink to="/">To main page</IndexLink>
			</div>
		);
	}
};

@connect(
	state => ({people: state.people}),
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
