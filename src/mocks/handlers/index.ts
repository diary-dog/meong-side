import { familyHandler } from './family';
import { userHandler } from './user';
import { verificationHandler } from './verification';

const mockHandlers = [...userHandler, ...verificationHandler, ...familyHandler];

export default mockHandlers;
