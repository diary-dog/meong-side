import { http } from 'msw';
import { baseURL } from '../../utils/mswUtils';
import { END_POINT } from '../../constants/endPoint';
import { user } from '../resolvers/user';

export const userHandler = [
  /** get family members */
  http.get(baseURL(END_POINT.FAMILY(':petId')), user.getFamilyMembers),

  /** get empty family members */
  http.get(
    baseURL(END_POINT.FAMILY(':petId') + '/empty'),
    user.getEmptyFamilyMembers
  ),

  /** invite member to family */
  http.post(
    baseURL(END_POINT.INVITE_MEMBER(':petId')),
    user.inviteMemberToFamily
  ),
];
