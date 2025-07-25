import { db } from '@/lib/firebase/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export interface UserPublishedCase {
  id: string;
  title: string;
  description: string;
  author: string;
  link: string;
  publishedAt: string;
}

export async function getUserPublishedCases(): Promise<UserPublishedCase[]> {
  try {
    const galleryRef = collection(db, 'gallery');
    const q = query(galleryRef, orderBy('publishedAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const cases: UserPublishedCase[] = [];
    querySnapshot.forEach((doc) => {
      cases.push({
        id: doc.id,
        ...(doc.data() as Omit<UserPublishedCase, 'id'>)
      });
    });

    return cases;
  } catch (error) {
    console.error('Error fetching user published cases:', error);
    return [];
  }
} 