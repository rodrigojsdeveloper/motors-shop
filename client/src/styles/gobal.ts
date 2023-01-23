import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Lexend', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
		// Brand
		--brand1: #4529E6;
		--brand2: #5126EA;
		--brand3: #B0A6F0;
		--brand4: #EDEAFD;
		--brand5: #B0A6F0;

		// Grey Scale
		--black-fixed: #000000;
		--grey0: #0B0D0D;
		--grey1: #212529;
		--grey2: #495057;
		--grey3: #868E96;
		--grey4: #ADB5BD;
		--grey5: #CED4DA;
		--grey6: #DEE2E6;
		--grey7: #E9ECEF;
		--grey8: #F1F3F5;
		--grey9: #F8F9FA;
		--grey10: #FDFDFD;
		--white-fixed: #FFFFFF;

		// FeedBack
		--alert1: #CD2B31;
		--alert2: #FDD8D8;
		--alert3: #FFE5E5;
		--sucess1: #18794E;
		--sucess2: #CCEBD7;
		--sucess3: #DDF3E4;

		// Colors Random Profile
		--random1: #E34D8C;
		--random2: #C04277;
		--random3: #7D2A4D;
		--random4: #7000FF;
		--random5: #6200E3;
		--random6: #36007D;
		--random7: #349974;
		--random8: #2A7D5F;
		--random9: #153D2E;
		--random10: #6100FF;
		--random11: #5700E3;
		--random12: #30007D;

		// Shadow
		--shadow1: rgba(0, 0, 0, 0.1);
		--shadow2: rgba(0, 0, 0, 0.09);
		--shadow3: rgba(0, 0, 0, 0.15);
		--shadow4: rgba(0, 0, 0, 0.25);
		--shadow5: rgba(0, 0, 0, 0.65);
		--shadow6: rgba(0, 0, 0, 1);
		--shadow7: rgba(255, 255, 255, 0.1);
		--shadow8: rgba(0, 0, 0, 0.5);
		--shadow9: rgba(0, 0, 0, 0.71);
	}

	body {
		background: var(--white-fixed);
		color: var(--grey0);
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	
	input[type=number] {
		-moz-appearance:textfield;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;
