import React, { useEffect, useState } from "react";
import theme from "../../theme";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Results = () => {
	const [totalCreditsTaken, setTotalCredits] = useState(0);
	const [artsReq, setArtsReq] = useState(0);
	const [breadthReq, setBreadthReq] = useState(0);
	const [commReq, setCommReq] = useState(0);
	const [lowerReq, setLowerReq] = useState(0);

	useEffect(() => {
		getResults();
	}, []);

	const getResults = async () => {
		try {
			const response = await fetch("http://localhost:8080/api/user/results", {
				mode: "cors",
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("Failed to send file");
			}
			let res = await response.json();
			setTotalCredits(res.TotalCreditsTaken);
			setArtsReq(res.Faculty.arts);
			setBreadthReq(res.Faculty.breadth);
			setCommReq(res.Faculty.comm);
			setLowerReq(res.Faculty.lower);
			console.log(res);
			return res;
		} catch (erorr) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Congrats on your work so far!
				</h1>
			</div>
			<div style={graphs}>
				<div style={graph}>
					<ThemeProvider theme={chartTheme}>
						<div style={pieChart}>
							<Box sx={{ position: "relative", display: "inline-flex" }}>
								<CircularProgress
									color="incomplete"
									thickness={5}
									variant="determinate"
									value={100}
									style={{ height: "140px", width: "140px" }}
								/>
								<Box
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: "absolute",
									}}
								>
									<CircularProgress
										color="incompleteDarker"
										thickness={5}
										variant="determinate"
										value={totalCreditsTaken / 1.2}
										style={{ height: "140px", width: "140px" }}
									/>
								</Box>
								<Box
									sx={{
										top: 0,
										left: 5,
										bottom: 0,
										right: 0,
										position: "absolute",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<p style={{ ...graphText, color: "#E66D57" }}>
										{totalCreditsTaken}/120
									</p>
								</Box>
							</Box>
						</div>
					</ThemeProvider>
					<div style={description}>
						<p style={descTitle}>Your Degree Credits</p>
						<p style={descBody}>
							You have <b>{120 - totalCreditsTaken} credits left</b> in your
							degree.{" "}
						</p>
					</div>
				</div>

				<div style={{ marginLeft: "30px", marginBottom: "50px" }}>
					<div style={graph}>
						<ThemeProvider theme={chartTheme}>
							<div style={pieChart}>
								<Box sx={{ position: "relative", display: "inline-flex" }}>
									<CircularProgress
										color="complete"
										thickness={5}
										variant="determinate"
										value={(artsReq * 100) / 6}
										style={{ height: "80px", width: "80px" }}
									/>
									<Box
										sx={{
											top: 0,
											left: 0,
											bottom: 0,
											right: 0,
											position: "absolute",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<p style={{ ...graphText, color: "#64663E" }}>
											{artsReq}/6
										</p>
									</Box>
								</Box>
							</div>
						</ThemeProvider>

						<div style={description}>
							<p style={descBody}>
								You have <b>{6 - artsReq} credits left</b> in Arts Requirement.{" "}
							</p>
						</div>
					</div>

					<div style={graph}>
						<ThemeProvider theme={chartTheme}>
							<div style={pieChart}>
								<Box sx={{ position: "relative", display: "inline-flex" }}>
									<CircularProgress
										color="complete"
										thickness={5}
										variant="determinate"
										value={(breadthReq * 100) / 6}
										style={{ height: "80px", width: "80px" }}
									/>
									<Box
										sx={{
											top: 0,
											left: 0,
											bottom: 0,
											right: 0,
											position: "absolute",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<p style={{ ...graphText, color: "#64663E" }}>
											{breadthReq}/6
										</p>
									</Box>
								</Box>
							</div>
						</ThemeProvider>

						<div style={description}>
							<p style={descBody}>
								You have <b>{6 - breadthReq} credits left</b> in Science Breadth
								Requirement.{" "}
							</p>
						</div>
					</div>

					<div style={graph}>
						<ThemeProvider theme={chartTheme}>
							<div style={pieChart}>
								<Box sx={{ position: "relative", display: "inline-flex" }}>
									<CircularProgress
										color="complete"
										thickness={5}
										variant="determinate"
										value={(commReq * 100) / 6}
										style={{ height: "80px", width: "80px" }}
									/>
									<Box
										sx={{
											top: 0,
											left: 0,
											bottom: 0,
											right: 0,
											position: "absolute",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<p style={{ ...graphText, color: "#64663E" }}>
											{commReq}/6
										</p>
									</Box>
								</Box>
							</div>
						</ThemeProvider>

						<div style={description}>
							<p style={descBody}>
								You have <b>{6 - commReq} credits left</b> in Communication
								Requirement.{" "}
							</p>
						</div>
					</div>

					<div style={graph}>
						<ThemeProvider theme={chartTheme}>
							<div style={pieChart}>
								<Box sx={{ position: "relative", display: "inline-flex" }}>
									<CircularProgress
										color="complete"
										thickness={5}
										variant="determinate"
										value={(lowerReq * 100) / 6}
										style={{ height: "80px", width: "80px" }}
									/>
									<Box
										sx={{
											top: 0,
											left: 0,
											bottom: 0,
											right: 0,
											position: "absolute",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<p style={{ ...graphText, color: "#64663E" }}>
											{lowerReq}/6
										</p>
									</Box>
								</Box>
							</div>
						</ThemeProvider>

						<div style={description}>
							<p style={descBody}>
								You have <b>{6 - lowerReq} credits left</b> in Lower Level
								Requirement.{" "}
							</p>
						</div>
					</div>
				</div>

				{/* 
          <div style={recommCourses}>
					<div style={recommTitle}>
						<p>Term 1</p>
						<div style={recomm}>
							<p style={chip}>CPSC 310</p>
							<p style={chip}>CPSC 313</p>
							<p style={chip}>CPSC 310</p>
							<p style={chip}>Elective</p>
						</div>
					</div>

					<div style={recommTitle}>
						<p>Term 2</p>
						<div style={recomm}>
							<p style={chip}>CPSC 320</p>
							<p style={chip}>CPSC 3**</p>
							<p style={chip}>Elective</p>
							<p style={chip}>Elective</p>
						</div>
					</div>
				</div>
          */}
			</div>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 24,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};

const graphs = {};

const graph = {
	display: "flex",
	flexDirection: "row",
	marginBottom: 16,
};

const pieChart = {
	marginRight: "32px",
};

const graphText = {
	fontFamily: theme.fonts.headerOne,
	fontWeight: 800,
	fontSize: 28,
	marginBottom: 0,
};

const description = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
};

const descTitle = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 24,
	marginBottom: 20,
};

const descBody = {
	fontFamily: theme.fonts.headerTwo,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerTwo,
	fontSize: 20,
	marginBottom: 0,
};

const recommCourses = {
	display: "flex",
	flexDirection: "column",
};

const recommTitle = {
	marginTop: "22px",
	marginBottom: "22px",
	fontFamily: theme.fonts.headerFour,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerFour,
	fontSize: 16,
};

const recomm = {
	display: "flex",
	flexDirection: "row",
	gap: "20px",
	fontFamily: theme.fonts.buttons,
	color: "#0671E0",
	fontWeight: theme.fonts.buttons,
	fontSize: 14,
};

const chip = {
	backgroundColor: theme.colors.primaryLightBackground,
	borderRadius: 4,
	padding: "8px 20px",
};

const chartTheme = createTheme({
	palette: {
		complete: {
			main: "#8A8D56",
		},
		incomplete: {
			main: "#F2B5AA",
		},
		incompleteDarker: {
			main: "#E66D57",
		},
	},
});

export default Results;
