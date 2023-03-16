import React from 'react';

import './Custom-button.styles.scss';
import { CustomButtonContainer } from './Costom-button.styles';

const CustomButton = ({children,...props}) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;