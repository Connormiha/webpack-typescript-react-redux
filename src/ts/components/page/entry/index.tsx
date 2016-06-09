import * as React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {generateClick, changeCount} from 'flux/people';
import ItemsList from 'components/common/ItemsList';

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

class GeneratorAppClass extends React.Component<any, {}> {

	handleGenerateClick() {
		this.props.onClickGenerate();
	}

	handleChangeCount(e) {
		let {value} = e.target;

		this.props.onChangeCount(parseInt(value, 10) || 0);
		this.props.onClickGenerate();
	}

	render () {
		let {people} = this.props;
		let list = people.get('list');
		let count = people.get('count');

		return (
			<section id="generator-app">
				<div>
					<label>
						Items count
						<input type="number" value={count || ''} max="50" onChange={this.handleChangeCount.bind(this)} />
					</label>
				</div>
				<section id="content">
					<ItemsList items={list} />
				</section>
				<div id="buttons">
					<BtnGenerate
						value='Regenerate list'
						onClick={this.handleGenerateClick.bind(this)}
						 />
				</div>
				<Link to="/about">About this project</Link>
			</section>
		);
	}
};

// Todo. Refactoring to decarator after fix redux-react typings
export let GeneratorApp = connect(
	({people}) => ({people}),
	dispatch => {
		return {
			onChangeCount: (count: number) => dispatch(changeCount(count)),
			onClickGenerate: () => dispatch(generateClick())
		};
	}
)(GeneratorAppClass);

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
