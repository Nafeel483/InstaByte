import { createStackNavigator } from 'react-navigation-stack';
import LearningCategories from '../Screens/LearningCategories';
import CategoryList from '../Screens/CategoryList';
import VideoScreen from '../Screens/VideoScreen';
import BuyCourse from '../Screens/BuyCourse';
import SelectPayment from '../Screens/SelectPayment';
import PaymentForm from '../Screens/PaymentForm';
import Gratitude from '../Screens/Gratitude';
import Settings from '../Screens/Settings';
import ViewProfile from '../Screens/ViewProfile';
import ProfileScreen from '../Screens/Profile';
import Notifications from '../Screens/Notifications';
import Favourites from '../Screens/Favourites';
import Subscription from '../Screens/Subscription';
import ContactUs from '../Screens/ContactUs';
import ChangePassword from '../Screens/ChangePassword';
import HomeScreen from '../Screens/HomeScreen';

const HomeNavigation = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LearningCategories: { screen: LearningCategories },
    CategoryList: { screen: CategoryList },
    VideoScreen: { screen: VideoScreen },
    BuyCourse: { screen: BuyCourse },
    SelectPayment: { screen: SelectPayment },
    PaymentForm: { screen: PaymentForm },
    Gratitude: { screen: Gratitude },
    Settings: { screen: Settings },
    ViewProfile: { screen: ViewProfile },
    ProfileScreen: { screen: ProfileScreen },
    Notifications: { screen: Notifications },
    Favourites: { screen: Favourites },
    Subscription: { screen: Subscription },
    ContactUs: { screen: ContactUs },
    ChangePassword: { screen: ChangePassword },
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
