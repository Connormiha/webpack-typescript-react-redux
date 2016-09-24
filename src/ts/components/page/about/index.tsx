import * as React from 'react';
import {IndexLink} from 'react-router';

export default class About extends React.PureComponent<any, {}> {
	render () {
		return (
			<div>
				<p>This is Started development kit for Single Page Application.</p>
				<p>Using stack technologies:</p>
				<ul className='list'>
					<li>React</li>
					<li>React-router</li>
                    <li>Redux</li>
					<li>Typescript</li>
					<li>Webpack</li>
					<li>Stylus</li>
				</ul>
				<IndexLink to="/">To main page</IndexLink>
			</div>
		);
	}
};
