import { userHandler } from './user';
import { verificationHandler } from './verification';

const mockHandlers = [...verificationHandler, ...userHandler];

export default mockHandlers;
