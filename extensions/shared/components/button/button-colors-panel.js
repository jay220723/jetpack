/* eslint-disable wpcalypso/import-docblock */
/**
 * WordPress dependencies
 */
import {
	ContrastChecker,
	PanelColorSettings,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const isGradientAvailable = !! PanelColorGradientSettings;

export default function ButtonColorsPanel( {
	buttonBackgroundColor,
	buttonFallbackBackgroundColor,
	buttonFallbackTextColor,
	buttonGradientValue,
	buttonTextColor,
	setButtonBackgroundColor,
	setButtonGradient,
	setButtonTextColor,
} ) {
	const ButtonContrastChecker = (
		<ContrastChecker
			{ ...{
				// Text is considered large if font size is greater or equal to 18pt or 24px,
				// currently that's not the case for button.
				backgroundColor: buttonBackgroundColor.color,
				fallbackBackgroundColor: buttonFallbackBackgroundColor,
				fallbackTextColor: buttonFallbackTextColor,
				isLargeText: false,
				textColor: buttonTextColor.color,
			} }
		/>
	);

	if ( isGradientAvailable ) {
		return (
			<PanelColorGradientSettings
				settings={ [
					{
						colorValue: buttonTextColor.color,
						label: __( 'Text Color', 'jetpack' ),
						onColorChange: setButtonTextColor,
					},
					{
						colorValue: buttonBackgroundColor.color,
						gradientValue: buttonGradientValue,
						label: __( 'Background', 'jetpack' ),
						onColorChange: setButtonBackgroundColor,
						onGradientChange: setButtonGradient,
					},
				] }
				title={ __( 'Button Background & Text Color', 'jetpack' ) }
			>
				{ ButtonContrastChecker }
			</PanelColorGradientSettings>
		);
	}

	return (
		<PanelColorSettings
			colorSettings={ [
				{
					value: buttonTextColor.color,
					onChange: setButtonTextColor,
					label: __( 'Text Color', 'jetpack' ),
				},
				{
					value: buttonBackgroundColor.color,
					onChange: setButtonBackgroundColor,
					label: __( 'Background', 'jetpack' ),
				},
			] }
			title={ __( 'Button Background & Text Color', 'jetpack' ) }
		>
			{ ButtonContrastChecker }
		</PanelColorSettings>
	);
}