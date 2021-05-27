import { createStackNavigator } from 'react-navigation-stack';
import LearningCategories from '../Screens/LearningCategories';
import CategoryList from '../Screens/CategoryList';
import VideoScreen from '../Screens/VideoScreen';
import BuyCourse from '../Screens/BuyCourse';
import SelectPayment from '../Screens/SelectPayment';
import PaymentForm from '../Screens/PaymentForm';

const HomeNavigation = createStackNavigator(
  {
    LearningCategories: { screen: LearningCategories },
    CategoryList: { screen: CategoryList },
    VideoScreen: { screen: VideoScreen },
    BuyCourse: { screen: BuyCourse },
    SelectPayment: { screen: SelectPayment },
    PaymentForm: { screen: PaymentForm },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;
