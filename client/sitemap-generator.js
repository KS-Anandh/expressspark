import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { SitemapStream, streamToPromise } from "sitemap";
import path from "path";

// Fix `__dirname` in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your website URL
const websiteUrl = "https://expressspark.in";

// Define your routes manually (since react-router-sitemap is broken)
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/afterSchoolProgram", changefreq: "weekly", priority: 0.8 },
  { url: "/forSchool", changefreq: "weekly", priority: 0.8 },
  { url: "/contactUs", changefreq: "weekly", priority: 0.7 },
  { url: "/aboutUs", changefreq: "weekly", priority: 0.6 },
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: websiteUrl });

  routes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");

  createWriteStream(sitemapPath).write(sitemap);
  console.log("✅ Sitemap successfully generated at:", sitemapPath);
};

generateSitemap();
