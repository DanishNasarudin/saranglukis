import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://saranglukis.netlify.app",
      lastModified: new Date(),
    },
  ];
}
