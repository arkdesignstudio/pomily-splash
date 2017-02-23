
import React from 'react';

import Input from './Input';

function SignupForm(props) {

  var color = props.color;
  var zIndex;
  if (props.slide == 1 && props.id == "top"){
    color = "#FFFFFF";
  }


	return (
				<Input color = {color} zIndex = '3'/>
	);
}

export default SignupForm;
