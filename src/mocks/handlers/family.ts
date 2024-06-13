import { http } from 'msw';

import { END_POINT } from '../../shared/constants/endPoint';
import { family } from '../resolvers/family';
import { baseURL } from '../../shared/lib/mswUtils';

export const familyHandler = [
  /** get family members */
  http.get(baseURL(END_POINT.FAMILY(':petId')), family.getFamilyMembers),

  /** get empty family members */
  http.get(
    baseURL(END_POINT.FAMILY(':petId') + '/empty'),
    family.getEmptyFamilyMembers
  ),

  /** invite member to family */
  http.post(
    baseURL(END_POINT.INVITE_MEMBER(':petId')),
    family.inviteMemberToFamily
  ),
];
