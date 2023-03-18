import { extendTheme } from '@chakra-ui/react';
import * as Variants from './Variants'

const theme = extendTheme({
  components: {
    // TODO: Default component themes go here
  },
  colors: {
    Brand: {
      Charcoal: '#2C2C2C',
      MetalBlue: '#3D5A80',
      PaleBlue: '#98C1D9',
      Cyan: '#E0FBFC',
      Sienna: '#EE6C4D',
      Gunmetal: '#293241'
    }
  }
});

export default theme;
