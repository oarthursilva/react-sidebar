import LandingScreen from 'src/components/screens/LandingScreen';
import { appHOC } from 'src/wrapper/hoc';

export default appHOC(LandingScreen, {
  pageWrapperProps: {
    seoProps: {
      headerTitle: 'Landing',
    }
  }
})
