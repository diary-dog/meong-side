import { VerificationCategoryType } from '../constants/verification';
import { User } from './user';

export interface OptionWithValue {
  label?: string;
  value?: number;
}
export interface UploadVerificationContents {
  petId: number;
  category: VerificationCategoryType;
  comment: string;
  verificationDetail: number;
  image: File | null;
}

export interface WalkDetail {
  hours: number;
  minutes: number;
}

export interface DefaultOption {
  verificationDetail: number;
  comment: string;
  image: File | null;
}

export interface UploadVerificationForm {
  category: VerificationCategoryType;
  verificationDetail?: number;
  walkDetail?: WalkDetail;
  comment: string;
  image: FileList;
}

export interface VerificationsForCalendar {
  year: number;
  month: number;
  dates: DateBasedVerification[];
}

interface DateBasedVerification {
  date: string;
  verifications: VerificationByDate[];
}
export interface VerificationByDate {
  category: VerificationCategoryType;
  verificationCount: number;
  verificationDetails: VerificationResponse[];
}
export interface VerificationResponse {
  id: string;
  createdAt: string;
  category: VerificationCategoryType;
  imageUrl: string;
  verificationDetail?: number;
  comment: string;
  author: User;
}

export interface VerificationForSlide {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  items: VerificationResponse[];
}

export interface VerificationsFroGrid {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  items: VerificationForGridResponse[];
}
export interface VerificationForGridResponse {
  id: string;
  createdAt: string;
  imageUrl: string;
  author: User;
}

export type GridType = 'all' | 'uploader';
export type SortType = 'ascending' | 'descending';

export interface VerificationsForGridByUploader {
  items: Array<{
    id: string;
    createdAt: string;
    imageUrl: string;
  }>;
  author: User;
}
