import { familyHandler } from './family';
import { verificationHandler } from './verification';

const mockHandlers = [...verificationHandler, ...familyHandler];

export default mockHandlers;
