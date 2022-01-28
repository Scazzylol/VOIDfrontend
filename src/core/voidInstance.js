import web3 from './web3';
import { VOID_ADDRESS, VOID_ABI } from '../config/config';

const voidInstance = new web3.eth.Contract(VOID_ABI, VOID_ADDRESS);

export default voidInstance;