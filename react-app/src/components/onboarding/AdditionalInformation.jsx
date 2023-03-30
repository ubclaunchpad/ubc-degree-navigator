import React, { useState } from "react";
import theme from "../../theme";
import { FormControl, FormLabel, InputLabel, Select, MenuItem } from '@mui/material';


const AdditionalInformation = () => {

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
					<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
					<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
					<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
							<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
							<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
							<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
							<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
							<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
							<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
					<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
					<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
					<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
							<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
							<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
							<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
							<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
							<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
							<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
					<MenuItem value={10} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Ten</MenuItem>
					<MenuItem value={20} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Twenty</MenuItem>
					<MenuItem value={30} sx = {{ fontSize: '18px', fontFamily: 'Inter' }}>Thirty</MenuItem>
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
