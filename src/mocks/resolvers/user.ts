import { HttpResponse, delay } from 'msw';

import { familyEmptyMembersData, familyMembersData } from '../datas/user';
import { MSWResolvers } from '../../utils/mswUtils';

export const user = {
  getFamilyMembers: async () => {
    await delay();
    return HttpResponse.json(familyMembersData);
  },

  getEmptyFamilyMembers: async () => {
    await delay();
    return HttpResponse.json(familyEmptyMembersData);
  },

  inviteMemberToFamily: async ({ request }) => {
    const email = await request.json();
    await delay();
    return HttpResponse.json({ email });
  },
} satisfies MSWResolvers;
