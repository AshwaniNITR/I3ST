// app/sitemap.js or app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://i3-st.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://i3-st.vercel.app/call-for-papers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
      {
      url: "https://i3-st.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
      {
      url: "https://i3-st.vercel.app/advisory",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    
  ];
}
