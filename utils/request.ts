global.fetch = require("node-fetch");

import { GraphQLClient } from "graphql-request";
import { Story, Page } from "../types/travel";

const LUKACODE_API_URL = process.env.LUKACODE_API_URL;
const LUKACODE_API_KEY = process.env.LUKACODE_API_KEY;
const LUKATRAVELS_API_URL = process.env.LUKATRAVELS_API_URL;
const LUKATRAVELS_API_KEY = process.env.LUKATRAVELS_API_KEY;

export const lukacodeAPI = (() => {
  const lukacodeAPI = new GraphQLClient(LUKACODE_API_URL, {
    headers: {
      authorization: `Bearer ${LUKACODE_API_KEY}`,
    },
  });

  return {
    fetchPages: async () => {
      const query = `
        { 
          pages {
            id
            name
            description
          }
        }
      `;

      const { pages } = await lukacodeAPI.request(query);

      return pages;
    },
  };
})();

interface LukatravelsAPI {
  fetchPages: () => Promise<Page[]>;
  fetchStories: () => Promise<Story[]>;
}

export const lukatravelsAPI = ((): LukatravelsAPI => {
  const lukatravelsAPI = new GraphQLClient(LUKATRAVELS_API_URL, {
    headers: {
      authorization: `Bearer ${LUKATRAVELS_API_KEY}`,
    },
  });

  return {
    fetchPages: async () => {
      const query = `
      {
        pages {
          id
          publishedAt
          updatedAt
          slug
          heroText
          heroImage {
            id
            url
            fileName
            mimeType
            size
            handle
          }
        }
      }
      `;
      const { pages } = await lukatravelsAPI.request(query);

      return pages;
    },

    fetchStories: async () => {
      const query = `
      {
        stories{
          id
          publishedAt
          updatedAt
          title
          time
          content {
            markdown
          }
          youtubeUrl
          locations {
            latitude
            longitude
          }
          thumbnail {
            id
            url
            fileName
            mimeType
            size
            handle
          }
        }
      }`;

      const { stories } = await lukatravelsAPI.request(query);

      return stories;
    },
  };
})();
