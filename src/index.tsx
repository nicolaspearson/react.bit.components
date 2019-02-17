import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '@components/Button';

export class Main extends React.Component {
	public render() {
		return (
			<div>
				<Button />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root') as HTMLElement);
