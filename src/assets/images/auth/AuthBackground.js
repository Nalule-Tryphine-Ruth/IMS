import { Box, Link } from '@mui/material';
import './background.webp';
// ...

const AuthBackground = () => {
  return (
    <Box
      component={Link}
      to="/src/pages/components-overview/background.webp"
      sx={{
        position: 'absolute',
        backgroundImage: 'url(src/assets/images/auth/background.webp)',
        backgroundSize: 'cover',
        zIndex: -1,
        bottom: 0
      }}
    />
  );
};

export default AuthBackground;
