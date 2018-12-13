import React from 'react';


export default class Skills extends React.Component{
	render(){
		return(
			<div className="item">
				<h3 className="level-title">{this.props.item.name}</h3>
				<div className="level-bar">
					<div className="level-bar-inner" data-level={this.props.item.percent}>
					</div>                                      
				</div>                                
			</div>
		)	
	}
}