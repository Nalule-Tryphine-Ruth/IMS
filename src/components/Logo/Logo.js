// material-ui
// import { useTheme } from '@mui/material/styles';

// if you want to use image instead of <svg> uncomment following.

import logo from 'assets/images/ucu-logo.webp';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
    // if you want to use image instead of svg uncomment following, and comment out <svg> element.

    <img src={logo} alt="UCU" width="200" />
  );
};

export default Logo;
