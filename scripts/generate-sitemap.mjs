import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import allBlogs from "../src/data/allBlogs.json" with { type: "json" };
import allWorks from "../src/data/allWorks.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const outputPath = path.join(publicDir, "sitemap.xml");

const siteUrl = "https://www.aliahhmad.com";
const lastmod = new Date().toISOString().split("T")[0];

const staticRoutes = ["/", "/work", "/blog"];
const workRoutes = allWorks.map((work) => `/work/${work.id}`);
const blogRoutes = allBlogs.map((blog) => `/blog/${blog.id}`);

const allRoutes = [...new Set([...staticRoutes, ...workRoutes, ...blogRoutes])];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(outputPath, xml, "utf8");

console.log(`Generated sitemap with ${allRoutes.length} URLs at ${outputPath}`);
