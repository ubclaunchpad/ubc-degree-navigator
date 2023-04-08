import React, { useState, useEffect } from "react";
import theme from "../../theme";
import { FormControl, FormLabel, Select, MenuItem } from '@mui/material';

const AdditionalInformation = ({ data, setData, setEnableButton }) => {

  useEffect(() => {
		setEnableButton(true);
	});
  
	const initialFormData = Object.freeze({
        program: "",
        primary: "",
		secondary: "",
		minor: "",
        primary_s: "",
        secondary_s: "",
        concentration: "",
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const programs = [
		{
			key: "BASC",
			name: "Applied Science"
		},
		{
			key: "BA",
			name: "Arts"
		},
		{
			key: "BCOM",
			name: "Commerce"
		},
		{
			key: "BCS",
			name: "Computer Science"
		},
		{
			key: "BDSC",
			name: "Dental Science"
		},
	]

	const majors = [
		{
			key: "CHEM",
			name: "Chemistry"
		},
		{
			key: "CMS",
			name: "Combined Major in Science"
		},
		{
			key: "CS",
			name: "Computer Science"
		},
		{
			key: "MATH",
			name: "Mathematics"
		}
	]

	const minors = [
		{
			key: "CS",
			name: "Computer Science"
		},
		{
			key: "DS",
			name: "Data Science"
		},
		{
			key: "STAT",
			name: "Statistics"
		}
	]

	const specializations = [
		{
			key: "ACC",
			name: "Accounting"
		},
		{
			key: "BUCS",
			name: "Business and Computer Science"
		},
		{
			key: "BTM",
			name: "Business Technology Management"
		},
		{
			key: "ENT",
			name: "Entrepreneurship"
		},
		{
			key: "FIN",
			name: "Finance"
		},
		{
			key: "GBM",
			name: "General Business Management"
		},
		{
			key: "GSC",
			name: "Global Supply Chain and Logistics Management"
		},
		{
			key: "MAR",
			name: "Marketing"
		},
		{
			key: "OL",
			name: "Operations and Logistics"
		},
		{
			key: "OBHR",
			name: "Organizational Behaviour and Human Resources"
		},
		{
			key: "RE",
			name: "Real Estate"
		},
	]

	const concentrations = [
		{
			key: "BuA",
			name: "Business Analytics"
		},
		{
			key: "BL",
			name: "Business Law"
		},
		{
			key: "SSI",
			name: "Sustainability and Social Impact"
		},
		{
			key: "IB",
			name: "International Business"
		}
	]

	const listPrograms = programs.map((program) =>
		<MenuItem value={program.key} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Bachelor of {program.name}</MenuItem>
	);

	const listMajors = majors.map((major) =>
		<MenuItem value={major.key} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>{major.name}</MenuItem>
	);

	const listMinors = majors.map((minor) =>
		<MenuItem value={minor.key} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>{minor.name}</MenuItem>
	);

	const listSpecializations = specializations.map((specialization) =>
		<MenuItem value={specialization.key} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>{specialization.name}</MenuItem>
	);

	const listConcentrations = concentrations.map((concentration) =>
		<MenuItem value={concentration.key} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>{concentration.name}</MenuItem>
	);

	return (
		<div className="container" style={container}>
			<div className="header" style={header}>
				<h1 className="title" style={title}>
					Add your degree information
				</h1>
				<p className="subTitle" style={subTitle}>
				Please provide additional information on your (intended) program, major(s), minor(s), specialization(s), and concentration(s).
				</p>
			</div>
			<FormControl>
				<FormLabel
				sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black', fontWeight: 500 }}
				>Program*</FormLabel>
				<Select
					required
					name="program" 
                    id="program" 
                    labelId="program" 
					label="Select your program here"
					value={formData.program}
					onChange={handleChange}
					sx = {{ width: 800, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
					"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
				>
					{listPrograms}
				</Select>
				<FormLabel
				sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black', fontWeight: 500, marginTop: '24px' }}
				>Major*</FormLabel>
				<div className="flexbox" style={flexbox}>
					<div className="flex" style={flex}>
						<FormLabel
						sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black' }}
						>Primary*</FormLabel>
						<Select
							required
							name="primary" 
							id="primary" 
							labelId="primary" 
							label="Select your major here"
							value={formData.primary}
							onChange={handleChange}
							sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
						>
							{listMajors}
						</Select>
					</div>
					<div className="flex" style={flex}>
					<FormLabel
						sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black' }}
						>Secondary</FormLabel>
						<Select
							name="secondary" 
							id="secondary" 
							labelId="secondary" 
							label="Optional"
							value={formData.secondary}
							onChange={handleChange}
							sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
						>
							{listMajors}
						</Select>
					</div>
				</div>
				<FormLabel
				sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black', marginTop: '24px' }}
				>Minor</FormLabel>
				<Select
					name="minor" 
					id="minor" 
					labelId="minor" 
					label="Optional"
					value={formData.minor}
					onChange={handleChange}
					sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
					"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
				>
					{listMinors}
				</Select>
				<FormLabel
				sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black', fontWeight: 500, marginTop: '24px' }}
				>Specialization</FormLabel>
				<div className="flexbox" style={flexbox}>
					<div className="flex" style={flex}>
						<FormLabel
						sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black' }}
						>Primary</FormLabel>
						<Select
							name="primary_s"
							id="primary_s" 
							labelId="primary_s" 
							label="Optional"
							value={formData.primary_s}
							onChange={handleChange}
							sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
						>
							{listSpecializations}
						</Select>
					</div>
					<div className="flex" style={flex}>
					<FormLabel
						sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black' }}
						>Secondary</FormLabel>
						<Select
							name="secondary_s" 
							id="secondary_s" 
							labelId="secondary_s" 
							label="Optional"
							value={formData.secondary_s}
							onChange={handleChange}
							sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 } }}
						>
							{listSpecializations}
						</Select>
					</div>
				</div>
				<FormLabel
				sx = {{ fontSize: '18px', fontFamily: 'Inter', color: 'black', marginTop: '24px' }}
				>Concentration</FormLabel>
				<Select
					name="concentration" 
					id="concentration" 
					labelId="concentration" 
					label="Optional"
					value={formData.concentration}
					onChange={handleChange}
					sx = {{ width: 376, backgroundColor: 'white', fontSize: '18px', fontFamily: 'Inter', color: 'black', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, 
					"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 }, marginBottom: '32px' }}
				>
					{listConcentrations}
				</Select>
			</FormControl>
		</div>
	);
};

const container = {
	display: "flex",
	flexDirection: "column",
};

const header = {
	marginBottom: 50,
};

const title = {
	fontFamily: theme.fonts.headerOne,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerOne,
	fontSize: 32,
	paddingBottom: 16,
};

const subTitle = {
	fontFamily: theme.fonts.headerThreeMedium,
	color: theme.colors.textDark,
	fontWeight: theme.fonts.headerThreeMedium,
	fontSize: 18,
};

const flex = {
	display: 'flex',
	flexDirection: 'column',
	marginRight: 48
}

const flexbox = {
	display: 'flex',
}

export default AdditionalInformation;
