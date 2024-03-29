/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    categories: Category;
    posts: Post;
    tags: Tag;
    users: User;
    media: Media;
  };
  globals: {};
}
export interface Category {
  id: string;
  name?: string;
}
export interface Post {
  id: string;
  title?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  name?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    sixteenByNineMedium?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
