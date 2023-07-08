import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	text: {
		fontSize: theme.fontSizes.body,
		color: theme.colors.textPrimary,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeigths.normal,
	},
	bold: {
		fontWeight: theme.fontWeigths.bold,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorSecondary: {
		color: theme.colors.textSecondary,
	},

	subheading: {
		fontSize: theme.fontSizes.subheading,
	},
	textAlignCenter: {
		textAlign: 'center',
	},
});

export default function StyledText({
	children,
	align,
	color,
	fontSize,
	fontWeight,
	style,
	...restOfProps
}) {
	const textStyles = [
		styles.text,
		align === 'center' && styles.textAlignCenter,
		color === 'primary' && styles.colorPrimary,
		color === 'secondary' && styles.colorSecondary,
		fontSize === 'subheading' && styles.subheading,
		fontWeight === 'bold' && styles.bold,
	];
	return (
		<Text style={textStyles} {...restOfProps}>
			{children}
		</Text>
	);
}
