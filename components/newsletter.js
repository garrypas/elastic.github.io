import React, { Component } from 'react'


export default class Newsletter extends Component {
 

  render () {
    return (
	
	<div className="mui-container">

		<form action="//elastic.us16.list-manage.com/subscribe/post?u=68010a02c99a1f5e9898d06ce&amp;id=9ff3b965da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="mui-form-inline" target="_blank" >
			<input type="hidden" name="b_68010a02c99a1f5e9898d06ce_9ff3b965da" value="" />
			
			<div className="limitemaildiv">
			
				<div className="mui-btn mui-textfield limitemail">

					<input type="email" placeholder="subscribe to newsletter" name="EMAIL"  id="mce-EMAIL" />
					 
				</div>
				
				<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="mui-btn mui-btn--primary limitsubscribebtn" />
				 
				<div className="clear"></div>
			</div>
			
		</form>
		
	</div>

    )
  }
}
