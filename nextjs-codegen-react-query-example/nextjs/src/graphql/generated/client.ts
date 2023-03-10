import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    ...({"headers":{"content-type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean'];
  categories?: Maybe<CategoriesAccess>;
  media?: Maybe<MediaAccess>;
  posts?: Maybe<PostsAccess>;
  tags?: Maybe<TagsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Categories = {
  __typename?: 'Categories';
  docs?: Maybe<Array<Maybe<Category>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  name?: Maybe<CategoriesDocAccessFields_Name>;
};

export type CategoriesDocAccessFields_Name = {
  __typename?: 'CategoriesDocAccessFields_name';
  create?: Maybe<CategoriesDocAccessFields_Name_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Name_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Name_Read>;
  update?: Maybe<CategoriesDocAccessFields_Name_Update>;
};

export type CategoriesDocAccessFields_Name_Create = {
  __typename?: 'CategoriesDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Delete = {
  __typename?: 'CategoriesDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Read = {
  __typename?: 'CategoriesDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Update = {
  __typename?: 'CategoriesDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  name?: Maybe<CategoriesFields_Name>;
};

export type CategoriesFields_Name = {
  __typename?: 'CategoriesFields_name';
  create?: Maybe<CategoriesFields_Name_Create>;
  delete?: Maybe<CategoriesFields_Name_Delete>;
  read?: Maybe<CategoriesFields_Name_Read>;
  update?: Maybe<CategoriesFields_Name_Update>;
};

export type CategoriesFields_Name_Create = {
  __typename?: 'CategoriesFields_name_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Delete = {
  __typename?: 'CategoriesFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Read = {
  __typename?: 'CategoriesFields_name_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Update = {
  __typename?: 'CategoriesFields_name_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Category_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Category_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
};

export type Category_Where_And = {
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
};

export type Category_Where_Or = {
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
};

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaFields_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Delete>;
  fields?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Fields>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Fields = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename>;
  filesize?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize>;
  height?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height>;
  mimeType?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType>;
  url?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url>;
  width?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  sixteenByNineMedium?: Maybe<Media_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_SixteenByNineMedium = {
  __typename?: 'Media_Sizes_SixteenByNineMedium';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createMedia?: Maybe<Media>;
  createPost?: Maybe<Post>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteMedia?: Maybe<Media>;
  deletePost?: Maybe<Post>;
  deletePreference?: Maybe<Preference>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean'];
  updateCategory?: Maybe<Category>;
  updateMedia?: Maybe<Media>;
  updatePost?: Maybe<Post>;
  updatePreference?: Maybe<Preference>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePostArgs = {
  data: MutationPostInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeletePreferenceArgs = {
  key: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePreferenceArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  category?: Maybe<Category>;
  content?: Maybe<Scalars['JSON']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Post_Status>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type PostContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum PostUpdate_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Post_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Post_Category_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Post_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Post_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Post_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Post_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum Post_Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Post_Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Post_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Post_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Post_Status_Input>>>;
  equals?: InputMaybe<Post_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Post_Status_Input>>>;
  not_equals?: InputMaybe<Post_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Post_Status_Input>>>;
};

export type Post_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Post_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Post_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Post_Where = {
  AND?: InputMaybe<Array<InputMaybe<Post_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Where_Or>>>;
  author?: InputMaybe<Post_Author_Operator>;
  category?: InputMaybe<Post_Category_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  status?: InputMaybe<Post_Status_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_And = {
  author?: InputMaybe<Post_Author_Operator>;
  category?: InputMaybe<Post_Category_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  status?: InputMaybe<Post_Status_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_Or = {
  author?: InputMaybe<Post_Author_Operator>;
  category?: InputMaybe<Post_Category_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  status?: InputMaybe<Post_Status_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Posts = {
  __typename?: 'Posts';
  docs?: Maybe<Array<Maybe<Post>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PostsCreateAccess = {
  __typename?: 'PostsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsCreateDocAccess = {
  __typename?: 'PostsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsDeleteAccess = {
  __typename?: 'PostsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsDeleteDocAccess = {
  __typename?: 'PostsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsDocAccessFields = {
  __typename?: 'PostsDocAccessFields';
  author?: Maybe<PostsDocAccessFields_Author>;
  category?: Maybe<PostsDocAccessFields_Category>;
  content?: Maybe<PostsDocAccessFields_Content>;
  publishedDate?: Maybe<PostsDocAccessFields_PublishedDate>;
  status?: Maybe<PostsDocAccessFields_Status>;
  tags?: Maybe<PostsDocAccessFields_Tags>;
  title?: Maybe<PostsDocAccessFields_Title>;
};

export type PostsDocAccessFields_Author = {
  __typename?: 'PostsDocAccessFields_author';
  create?: Maybe<PostsDocAccessFields_Author_Create>;
  delete?: Maybe<PostsDocAccessFields_Author_Delete>;
  read?: Maybe<PostsDocAccessFields_Author_Read>;
  update?: Maybe<PostsDocAccessFields_Author_Update>;
};

export type PostsDocAccessFields_Author_Create = {
  __typename?: 'PostsDocAccessFields_author_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Author_Delete = {
  __typename?: 'PostsDocAccessFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Author_Read = {
  __typename?: 'PostsDocAccessFields_author_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Author_Update = {
  __typename?: 'PostsDocAccessFields_author_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Category = {
  __typename?: 'PostsDocAccessFields_category';
  create?: Maybe<PostsDocAccessFields_Category_Create>;
  delete?: Maybe<PostsDocAccessFields_Category_Delete>;
  read?: Maybe<PostsDocAccessFields_Category_Read>;
  update?: Maybe<PostsDocAccessFields_Category_Update>;
};

export type PostsDocAccessFields_Category_Create = {
  __typename?: 'PostsDocAccessFields_category_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Category_Delete = {
  __typename?: 'PostsDocAccessFields_category_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Category_Read = {
  __typename?: 'PostsDocAccessFields_category_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Category_Update = {
  __typename?: 'PostsDocAccessFields_category_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Content = {
  __typename?: 'PostsDocAccessFields_content';
  create?: Maybe<PostsDocAccessFields_Content_Create>;
  delete?: Maybe<PostsDocAccessFields_Content_Delete>;
  read?: Maybe<PostsDocAccessFields_Content_Read>;
  update?: Maybe<PostsDocAccessFields_Content_Update>;
};

export type PostsDocAccessFields_Content_Create = {
  __typename?: 'PostsDocAccessFields_content_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Content_Delete = {
  __typename?: 'PostsDocAccessFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Content_Read = {
  __typename?: 'PostsDocAccessFields_content_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Content_Update = {
  __typename?: 'PostsDocAccessFields_content_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_PublishedDate = {
  __typename?: 'PostsDocAccessFields_publishedDate';
  create?: Maybe<PostsDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<PostsDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<PostsDocAccessFields_PublishedDate_Read>;
  update?: Maybe<PostsDocAccessFields_PublishedDate_Update>;
};

export type PostsDocAccessFields_PublishedDate_Create = {
  __typename?: 'PostsDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_PublishedDate_Delete = {
  __typename?: 'PostsDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_PublishedDate_Read = {
  __typename?: 'PostsDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_PublishedDate_Update = {
  __typename?: 'PostsDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Status = {
  __typename?: 'PostsDocAccessFields_status';
  create?: Maybe<PostsDocAccessFields_Status_Create>;
  delete?: Maybe<PostsDocAccessFields_Status_Delete>;
  read?: Maybe<PostsDocAccessFields_Status_Read>;
  update?: Maybe<PostsDocAccessFields_Status_Update>;
};

export type PostsDocAccessFields_Status_Create = {
  __typename?: 'PostsDocAccessFields_status_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Status_Delete = {
  __typename?: 'PostsDocAccessFields_status_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Status_Read = {
  __typename?: 'PostsDocAccessFields_status_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Status_Update = {
  __typename?: 'PostsDocAccessFields_status_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Tags = {
  __typename?: 'PostsDocAccessFields_tags';
  create?: Maybe<PostsDocAccessFields_Tags_Create>;
  delete?: Maybe<PostsDocAccessFields_Tags_Delete>;
  read?: Maybe<PostsDocAccessFields_Tags_Read>;
  update?: Maybe<PostsDocAccessFields_Tags_Update>;
};

export type PostsDocAccessFields_Tags_Create = {
  __typename?: 'PostsDocAccessFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Tags_Delete = {
  __typename?: 'PostsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Tags_Read = {
  __typename?: 'PostsDocAccessFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Tags_Update = {
  __typename?: 'PostsDocAccessFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Title = {
  __typename?: 'PostsDocAccessFields_title';
  create?: Maybe<PostsDocAccessFields_Title_Create>;
  delete?: Maybe<PostsDocAccessFields_Title_Delete>;
  read?: Maybe<PostsDocAccessFields_Title_Read>;
  update?: Maybe<PostsDocAccessFields_Title_Update>;
};

export type PostsDocAccessFields_Title_Create = {
  __typename?: 'PostsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Title_Delete = {
  __typename?: 'PostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Title_Read = {
  __typename?: 'PostsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PostsDocAccessFields_Title_Update = {
  __typename?: 'PostsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields = {
  __typename?: 'PostsFields';
  author?: Maybe<PostsFields_Author>;
  category?: Maybe<PostsFields_Category>;
  content?: Maybe<PostsFields_Content>;
  publishedDate?: Maybe<PostsFields_PublishedDate>;
  status?: Maybe<PostsFields_Status>;
  tags?: Maybe<PostsFields_Tags>;
  title?: Maybe<PostsFields_Title>;
};

export type PostsFields_Author = {
  __typename?: 'PostsFields_author';
  create?: Maybe<PostsFields_Author_Create>;
  delete?: Maybe<PostsFields_Author_Delete>;
  read?: Maybe<PostsFields_Author_Read>;
  update?: Maybe<PostsFields_Author_Update>;
};

export type PostsFields_Author_Create = {
  __typename?: 'PostsFields_author_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Author_Delete = {
  __typename?: 'PostsFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Author_Read = {
  __typename?: 'PostsFields_author_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Author_Update = {
  __typename?: 'PostsFields_author_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_Category = {
  __typename?: 'PostsFields_category';
  create?: Maybe<PostsFields_Category_Create>;
  delete?: Maybe<PostsFields_Category_Delete>;
  read?: Maybe<PostsFields_Category_Read>;
  update?: Maybe<PostsFields_Category_Update>;
};

export type PostsFields_Category_Create = {
  __typename?: 'PostsFields_category_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Category_Delete = {
  __typename?: 'PostsFields_category_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Category_Read = {
  __typename?: 'PostsFields_category_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Category_Update = {
  __typename?: 'PostsFields_category_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_Content = {
  __typename?: 'PostsFields_content';
  create?: Maybe<PostsFields_Content_Create>;
  delete?: Maybe<PostsFields_Content_Delete>;
  read?: Maybe<PostsFields_Content_Read>;
  update?: Maybe<PostsFields_Content_Update>;
};

export type PostsFields_Content_Create = {
  __typename?: 'PostsFields_content_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Content_Delete = {
  __typename?: 'PostsFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Content_Read = {
  __typename?: 'PostsFields_content_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Content_Update = {
  __typename?: 'PostsFields_content_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_PublishedDate = {
  __typename?: 'PostsFields_publishedDate';
  create?: Maybe<PostsFields_PublishedDate_Create>;
  delete?: Maybe<PostsFields_PublishedDate_Delete>;
  read?: Maybe<PostsFields_PublishedDate_Read>;
  update?: Maybe<PostsFields_PublishedDate_Update>;
};

export type PostsFields_PublishedDate_Create = {
  __typename?: 'PostsFields_publishedDate_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_PublishedDate_Delete = {
  __typename?: 'PostsFields_publishedDate_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_PublishedDate_Read = {
  __typename?: 'PostsFields_publishedDate_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_PublishedDate_Update = {
  __typename?: 'PostsFields_publishedDate_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_Status = {
  __typename?: 'PostsFields_status';
  create?: Maybe<PostsFields_Status_Create>;
  delete?: Maybe<PostsFields_Status_Delete>;
  read?: Maybe<PostsFields_Status_Read>;
  update?: Maybe<PostsFields_Status_Update>;
};

export type PostsFields_Status_Create = {
  __typename?: 'PostsFields_status_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Status_Delete = {
  __typename?: 'PostsFields_status_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Status_Read = {
  __typename?: 'PostsFields_status_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Status_Update = {
  __typename?: 'PostsFields_status_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_Tags = {
  __typename?: 'PostsFields_tags';
  create?: Maybe<PostsFields_Tags_Create>;
  delete?: Maybe<PostsFields_Tags_Delete>;
  read?: Maybe<PostsFields_Tags_Read>;
  update?: Maybe<PostsFields_Tags_Update>;
};

export type PostsFields_Tags_Create = {
  __typename?: 'PostsFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Tags_Delete = {
  __typename?: 'PostsFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Tags_Read = {
  __typename?: 'PostsFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Tags_Update = {
  __typename?: 'PostsFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type PostsFields_Title = {
  __typename?: 'PostsFields_title';
  create?: Maybe<PostsFields_Title_Create>;
  delete?: Maybe<PostsFields_Title_Delete>;
  read?: Maybe<PostsFields_Title_Read>;
  update?: Maybe<PostsFields_Title_Update>;
};

export type PostsFields_Title_Create = {
  __typename?: 'PostsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PostsFields_Title_Delete = {
  __typename?: 'PostsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PostsFields_Title_Read = {
  __typename?: 'PostsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PostsFields_Title_Update = {
  __typename?: 'PostsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PostsReadAccess = {
  __typename?: 'PostsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsReadDocAccess = {
  __typename?: 'PostsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsUpdateAccess = {
  __typename?: 'PostsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PostsUpdateDocAccess = {
  __typename?: 'PostsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['JSON']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Media?: Maybe<Media>;
  Post?: Maybe<Post>;
  Posts?: Maybe<Posts>;
  Preference?: Maybe<Preference>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPost?: Maybe<PostsDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Post_Where>;
};


export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPostArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Tag_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Tag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
};

export type Tag_Where_And = {
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
};

export type Tag_Where_Or = {
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs?: Maybe<Array<Maybe<Tag>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  name?: Maybe<TagsDocAccessFields_Name>;
};

export type TagsDocAccessFields_Name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_Name_Create>;
  delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  read?: Maybe<TagsDocAccessFields_Name_Read>;
  update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  name?: Maybe<TagsFields_Name>;
};

export type TagsFields_Name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_Name_Create>;
  delete?: Maybe<TagsFields_Name_Delete>;
  read?: Maybe<TagsFields_Name_Read>;
  update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  email?: Maybe<UsersDocAccessFields_Email>;
  name?: Maybe<UsersDocAccessFields_Name>;
  password?: Maybe<UsersDocAccessFields_Password>;
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  email?: Maybe<UsersFields_Email>;
  name?: Maybe<UsersFields_Name>;
  password?: Maybe<UsersFields_Password>;
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type MutationCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type MutationMediaInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_SizesInput = {
  sixteenByNineMedium?: InputMaybe<MutationMediaUpdate_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_SixteenByNineMediumInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_SizesInput = {
  sixteenByNineMedium?: InputMaybe<MutationMedia_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_SixteenByNineMediumInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationPostInput = {
  author?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Post_Status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationPostUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostUpdate_Status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationTagInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type MutationTagUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type MutationUserInput = {
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
};

export type PostsAccess = {
  __typename?: 'postsAccess';
  create?: Maybe<PostsCreateAccess>;
  delete?: Maybe<PostsDeleteAccess>;
  fields?: Maybe<PostsFields>;
  read?: Maybe<PostsReadAccess>;
  update?: Maybe<PostsUpdateAccess>;
};

export type PostsDocAccess = {
  __typename?: 'postsDocAccess';
  create?: Maybe<PostsCreateDocAccess>;
  delete?: Maybe<PostsDeleteDocAccess>;
  fields?: Maybe<PostsDocAccessFields>;
  read?: Maybe<PostsReadDocAccess>;
  update?: Maybe<PostsUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AuthorFragment = { __typename?: 'User', name?: string | null };

export type CategoryFragment = { __typename?: 'Category', name?: string | null };

export type PostFragment = { __typename?: 'Post', title?: string | null, content?: any | null, tags?: Array<{ __typename?: 'Tag', name?: string | null }> | null, category?: { __typename?: 'Category', name?: string | null } | null, author?: { __typename?: 'User', name?: string | null } | null };

export type TagFragment = { __typename?: 'Tag', name?: string | null };

export type AllPostsQueryVariables = Exact<{
  where?: InputMaybe<Post_Where>;
}>;


export type AllPostsQuery = { __typename?: 'Query', Posts?: { __typename?: 'Posts', totalDocs?: number | null, docs?: Array<{ __typename?: 'Post', title?: string | null, content?: any | null, tags?: Array<{ __typename?: 'Tag', name?: string | null }> | null, category?: { __typename?: 'Category', name?: string | null } | null, author?: { __typename?: 'User', name?: string | null } | null } | null> | null } | null };

export const TagFragmentDoc = `
    fragment Tag on Tag {
  name
}
    `;
export const CategoryFragmentDoc = `
    fragment Category on Category {
  name
}
    `;
export const AuthorFragmentDoc = `
    fragment Author on User {
  name
}
    `;
export const PostFragmentDoc = `
    fragment Post on Post {
  title
  content
  tags {
    ...Tag
  }
  category {
    ...Category
  }
  author {
    ...Author
  }
}
    `;
export const AllPostsDocument = `
    query AllPosts($where: Post_where) {
  Posts(where: $where) {
    docs {
      ...Post
    }
    totalDocs
  }
}
    ${PostFragmentDoc}
${TagFragmentDoc}
${CategoryFragmentDoc}
${AuthorFragmentDoc}`;
export const useAllPostsQuery = <
      TData = AllPostsQuery,
      TError = unknown
    >(
      variables?: AllPostsQueryVariables,
      options?: UseQueryOptions<AllPostsQuery, TError, TData>
    ) =>
    useQuery<AllPostsQuery, TError, TData>(
      variables === undefined ? ['AllPosts'] : ['AllPosts', variables],
      fetcher<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, variables),
      options
    );

useAllPostsQuery.getKey = (variables?: AllPostsQueryVariables) => variables === undefined ? ['AllPosts'] : ['AllPosts', variables];
;

useAllPostsQuery.fetcher = (variables?: AllPostsQueryVariables) => fetcher<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, variables);