import * as React from 'react';

export interface ButtonProps {
	children?: any;
	className?: string;
	style?: React.CSSProperties;
	onClick?: (event: React.FormEvent) => void;
}

const Button = (props: ButtonProps) => {
	return (
		<button className={props.className} onClick={props.onClick} style={props.style}>
			{props.children}
		</button>
	);
};

export default Button;
