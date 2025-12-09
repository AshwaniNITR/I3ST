// app/sitemap.js or app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://instcon2026.nitrkl.ac.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://instcon2026.nitrkl.ac.in/call-for-papers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
      {
      url: "https://instcon2026.nitrkl.ac.in/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://instcon2026.nitrkl.ac.in/advisory",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
     {
      url: "https://instcon2026.nitrkl.ac.in/Sponsorship",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://instcon2026.nitrkl.ac.in/commitee",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
  url: "https://instcon2026.nitrkl.ac.in/instcon2026",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
}


    
  ];
}
