export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubCategory {
  id: number;
  name: string;
  description: string;
  tools: number;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  category: Category;
}

export interface Tag {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Count {
  bookmark: number;
}

export interface AITool {
  id: number;
  name: string;
  body: string;
  imgurl: string | null;
  topic: string;
  views: number;
  published: boolean;
  featured: boolean;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  tagId: number;
  bookmarked: boolean;
  subCategoryId: number;
  _count: Count;
  tag: Tag;
  subCategory: SubCategory;
}

export interface User {
  id: number;
  name: string;
  email: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  passwordResetToken: string | null;
  passwordResetTokenExpiry: string | null;
  passwordResetAt: string | null;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  body: string;
  imgurl: string;
  topic: string;
  views: number;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  author: User;
}
