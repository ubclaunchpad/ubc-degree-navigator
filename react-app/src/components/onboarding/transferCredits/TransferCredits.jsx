import React, { useState } from "react";
import theme from "../../../theme";
import { container, header, title, subTitle, text } from "./TransferCreditsStyles";

const TransferCredits = ({
	hasTransferCredit,
	setHasTransferCredit,
	setEnableButton,
}) => {
	const useHover = () => {
		const [isHover, setIsHover] = useState(false);

		const handleMouseEnter = () => {
			setIsHover(true);
		};

		const handleMouseLeave = () => {
			setIsHover(false);
		};

		return [isHover, handleMouseEnter, handleMouseLeave];
	};

	const [isHover1, handleMouseEnter1, handleMouseLeave1] = useHover();
	const [isHover2, handleMouseEnter2, handleMouseLeave2] = useHover();

	const option = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 24,
		padding: 39,
		borderRadius: 10,
		borderColor: theme.colors.primaryDark,
		width: "50%",
	};

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Add your transfer credits
				</h1>
				<p className="subTitle" style={subTitle}>
					Do you have any Transfer credits from high school (AP, IB, or A-level
					courses) or another post-secondary institution, including studying
					aboard?
				</p>
			</div>

			<div
				className="option"
				style={{
					...option,
					...{
						backgroundColor:
							hasTransferCredit === "yes" || isHover1
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover1 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter1}
				onMouseLeave={handleMouseLeave1}
				onClick={() => {
					setHasTransferCredit("yes");
					setEnableButton(true);
				}}
			>
				<p style={text}>Yes</p>
			</div>

			<div
				className="option"
				style={{
					...option,
					...{
						backgroundColor:
							hasTransferCredit === "no" || isHover2
								? "#EBF2FF"
								: theme.colors.primaryLightBackground,
						borderWidth: isHover2 ? 1 : 0,
					},
				}}
				onMouseEnter={handleMouseEnter2}
				onMouseLeave={handleMouseLeave2}
				onClick={() => {
					setHasTransferCredit("no");
					setEnableButton(true);
				}}
			>
				<p style={text}>No</p>
			</div>
		</div>
	);
};

export default TransferCredits;
