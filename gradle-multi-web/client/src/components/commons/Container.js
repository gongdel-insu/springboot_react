import React, { Component } from 'react';
import {
	Grid,
	AppBar,
	Toolbar,
	Typography,
	withStyles,
	IconButton,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper
} from '@material-ui/core';

class Container extends Component {
	render() {
		const { Title, LeftContent, RightContent, Footer } = this.props;
		console.log('1');
		return (
			<Grid
				container
				direction="column"
				style={{ flexWrap: 'nowrap', width: '100%', minHeight: '100%' }}
				spacing={0}
			>
				<Grid item style={{ background: 'yellow' }}>
					{Title ? <Title /> : 123}
				</Grid>
				<Grid container direction="row" justify="center" style={{ height: '100%', background: 'silver' }}>
					<Grid item xs={6} sm={3} style={{ minHeight: '100%' }}>
						{Footer ? <Footer /> : 123}
					</Grid>
					<Grid item xs={6} sm={3} style={{ minHeight: '100%' }}>
						{Footer ? <Footer /> : 123}
					</Grid>
				</Grid>
				<Grid item>{Footer ? <Footer /> : 123}</Grid>
			</Grid>
		);
	}
}

export default Container;
