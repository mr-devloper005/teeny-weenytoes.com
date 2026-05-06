import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { Globe } from "lucide-react";
import { ShareButton } from "./share-button";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const generateConsistentFollowerCount = (slug: string) => {
  // Generate a consistent number between 4-10 based on the slug
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % 7) + 4; // Range 4-10
};

const stripHtmlToParagraphs = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return [fallback];
  
  // If it contains HTML tags, strip them and split into paragraphs
  let text = source;
  if (/<[a-z][\s\S]*>/i.test(source)) {
    // Strip HTML tags
    text = source
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  
  // Split into paragraphs by newlines or sentences
  const paragraphs = text
    .split(/\n{2,}|(?<=[.!?])\s+(?=[A-Z])/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
    
  return paragraphs.length > 0 ? paragraphs : [text || fallback];
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionParagraphs = stripHtmlToParagraphs(description);
  const followerCount = generateConsistentFollowerCount(post.slug);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/profile/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <NavbarShell />
      <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Profile Card */}
        <section className="profile-card-container">
          <div className="profile-card-enhanced relative rounded-2xl bg-white shadow-xl">
            {/* Header/Banner with wavy pattern */}
            <div className="profile-banner-animated relative h-32 bg-gradient-to-r from-blue-200 to-blue-300">
              {/* Wavy pattern overlay */}
              <div className="absolute inset-0 opacity-30">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 Q25,5 50,20 T100,20 L100,100 L0,100 Z" fill="rgba(37, 99, 235, 0.3)" />
                  <path d="M0,40 Q25,25 50,40 T100,40 L100,100 L0,100 Z" fill="rgba(37, 99, 235, 0.2)" />
                  <circle cx="20" cy="20" r="2" fill="rgba(37, 99, 235, 0.4)" />
                  <circle cx="80" cy="30" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
                  <circle cx="60" cy="15" r="1" fill="rgba(37, 99, 235, 0.4)" />
                  <circle cx="30" cy="35" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
                </svg>
              </div>
              
              {/* Share Icon */}
              <div className="absolute top-4 right-4">
                <ShareButton />
              </div>
            </div>
            
            {/* Profile Picture/Logo - positioned relative to card */}
            <div className="relative -mt-16 flex justify-center">
              <div className="profile-avatar-glow relative h-32 w-32 overflow-hidden bg-white shadow-lg">
                {logoUrl ? (
                  <ContentImage src={logoUrl} alt={post.title} fill className="object-contain p-2" sizes="128px" intrinsicWidth={128} intrinsicHeight={128} />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-3xl font-bold text-white">
                    {post.title.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="px-6 pt-32 pb-8">
              {/* Profile Name */}
              <h1 className="profile-name-gradient text-center text-2xl font-bold sm:text-3xl">{brandName}</h1>
              
              {/* Description/Bio */}
              <div className="mt-4 text-center text-sm text-gray-600 space-y-2">
                {descriptionParagraphs.map((para, index) => (
                  <p key={index} className="profile-bio-text">{para}</p>
                ))}
              </div>
              
              {/* Profile Stats */}
              <div className="profile-stats-grid">
                <div className="profile-stat-item">
                  <div className="profile-stat-number">{followerCount}</div>
                  <div className="profile-stat-label">Followers</div>
                </div>
                <div className="profile-stat-item">
                  <div className="profile-stat-number">0</div>
                  <div className="profile-stat-label">Following</div>
                </div>
                <div className="profile-stat-item">
                  <div className="profile-stat-number">0</div>
                  <div className="profile-stat-label">Posts</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button asChild className="profile-follow-btn rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white">
                  <Link href="/login">Follow</Link>
                </Button>
                {website && (
                  <Button asChild variant="outline" className="profile-website-btn h-10 w-10 rounded-full border-gray-300 p-0">
                    <Link href={website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Globe className="h-4 w-4 text-gray-600" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {suggestedArticles.length ? (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Suggested articles</h2>
              <Link href="/articles" className="text-sm font-medium text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <TaskPostCard
                  key={article.id}
                  post={article}
                  href={buildPostUrl("article", article.slug)}
                  compact
                />
              ))}
            </div>
            <nav className="mt-6 rounded-2xl border border-border bg-card/60 p-4">
              <p className="text-sm font-semibold text-foreground">Related links</p>
              <ul className="mt-2 space-y-2 text-sm">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <li key={`related-${article.id}`}>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/profile" className="text-primary underline-offset-4 hover:underline">
                    Browse all profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
