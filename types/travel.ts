interface StoryLocation {
  latitude: number;
  longitude: number;
}

export interface Page {
  id: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
  heroImage: {
    id: string;
    url: string;
    fileName: string;
    mimeType: string;
    size: string;
    handle: string;
  };
  heroText: string;
}

export interface Story {
  id: string;
  publishedAt: string;
  updatedAt: string;
  title: string;
  time: string;
  content: {
    markdown: string;
  };
  youtubeUrl: string | undefined;
  locations: StoryLocation[] | undefined;
  thumbnail: {
    id: string;
    url: string;
    fileName: string;
    mimeType: string;
    size: string;
    handle: string;
  };
}
