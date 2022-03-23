import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryVideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly videos?: (CategoryVideo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Video {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly durationInSecond?: number | null;
  readonly thumbnail?: string | null;
  readonly file?: string | null;
  readonly categories?: (CategoryVideo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

export declare class CategoryVideo {
  readonly id: string;
  readonly category: Category;
  readonly video: Video;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CategoryVideo, CategoryVideoMetaData>);
  static copyOf(source: CategoryVideo, mutator: (draft: MutableModel<CategoryVideo, CategoryVideoMetaData>) => MutableModel<CategoryVideo, CategoryVideoMetaData> | void): CategoryVideo;
}