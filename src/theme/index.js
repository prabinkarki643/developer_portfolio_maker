import { createMuiTheme,responsiveFontSizes } from '@material-ui/core';
import palette from './palette';
import overrides from './overrides';

const app_theme = createMuiTheme({
  palette:palette,
  overrides
});

export default responsiveFontSizes(app_theme);