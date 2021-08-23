/**
 * Created by InspireUI on 17/02/2017.
 *
 * @format
 */
//import reactotron from 'reactotron-react-native';
//import store from '@store/configureStore';
import Reactotron from 'reactotron-react-js'
import Constants from "./common/Constants";
// const { actions: SideMenuActions } = require('@redux/SideMenuRedux')
//export const Reactotron = reactotron;

const _log = (values) => Constants.dev_mode && Reactotron.log(values);
const _warn = (values) => Constants.dev_mode && Reactotron.warn(values);
const _error = (values) => Constants.dev_mode && Reactotron.error(values);
export function connectConsoleToReactotron() {
  // console.log = _log;
  // console.warn = _warn;
  // console.error = _error;
}
export const log = _log;
export const warn = _warn;
export const error = _error;
