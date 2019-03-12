import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const testHooks = () => {
	const [ value, setValue ] = useState(0);

	useEffect(() => {
		// 이 함수는 render 가 마치고 난 다음에 실행됩니다!
		console.log('rendered:');
	});

	console.log('rendering: ');
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit">
						sdasdfafd
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default testHooks;
