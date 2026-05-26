import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Clock,
  ThumbsUp,
  Download,
  ArrowLeft,
  Calendar,
  Tag,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BlogAuthorCard from '@/components/blog/BlogAuthorCard';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogComments from '@/components/blog/BlogComments';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import Lightbox from '@/components/blog/Lightbox';
import { useContent } from '@/contexts/ContentContext';
import { IconWrapper } from '@/utils/iconMapper';

const BlogPost = () => {
  const { slug } = useParams();
  const [hasVoted, setHasVoted] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const { blogPosts, blogCategories } = useContent();

  const post = (blogPosts || []).find(p => p.slug === slug);

  // Helper to extract text from React children
  const extractText = (children) => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return children.toString();
    if (Array.isArray(children)) return children.map(extractText).join('');
    if (children?.props?.children) return extractText(children.props.children);
    return '';
  };

  // Helper to generate IDs for headings
  const generateSlug = (children) => {
    const text = extractText(children);
    return text
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };



  const handleVote = () => {
    setHasVoted(true);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Artikel nicht gefunden</h2>
          <Link to={createPageUrl('Blog')}>
            <Button>Zurück zur Übersicht</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryData = blogCategories.find(c => c.id === post.category);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image || post.image_url}
        article={true}
      />
      <ReadingProgress />

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a3a52] z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-[#1a3a52] to-[#00b050] opacity-90" />
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
          )}
          {/* Animated Mesh (Subtle) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00b050]/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to={createPageUrl('Blog')}
            className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Übersicht
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 text-base py-1.5 px-4 shadow-lg">
                <IconWrapper name={categoryData?.icon} className="w-4 h-4" /> <span className="ml-2">{categoryData?.name}</span>
              </Badge>
              {post.featured && (
                <Badge className="bg-[#ffd700]/20 text-[#ffd700] border-[#ffd700]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                  ⭐ Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm md:text-base bg-white/5 backdrop-blur-sm inline-flex px-6 py-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00b050]" />
                {new Date(post.created_date).toLocaleDateString('de-DE', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#00b050]" />
                {post.reading_time} Min. Lesezeit
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8 relative items-start">

          {/* ═══════════════════════════════════════════════════════════════════
              TABLE OF CONTENTS (Left - Desktop)
          ═══════════════════════════════════════════════════════════════════ */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32">
            <TableOfContents content={post.content} />
          </aside>

          {/* ═══════════════════════════════════════════════════════════════════
              MAIN CONTENT (Center)
          ═══════════════════════════════════════════════════════════════════ */}
          <main className="lg:col-span-9 xl:col-span-8">

            {/* Content Card */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-xl" />
              <div className="relative p-8 md:p-12">

                {/* Excerpt */}
                <p className="text-xl md:text-2xl text-[#1a3a52] font-medium leading-relaxed mb-12 border-l-4 border-[#00b050] pl-8 italic">
                  {post.excerpt}
                </p>

                {/* Markdown Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-[#1a3a52] prose-headings:scroll-mt-32 prose-p:text-[#2c3e50]/80 prose-a:text-[#00b050] prose-a:font-medium prose-strong:text-[#1a3a52] prose-li:text-[#2c3e50]/80">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ node, ...props }) => <h2 id={generateSlug(props.children)} className="text-3xl font-bold mt-16 mb-6" {...props} />,
                      h2: ({ node, ...props }) => <h2 id={generateSlug(props.children)} className="text-2xl font-bold mt-12 mb-5 pb-4 border-b border-gray-100" {...props} />,
                      h3: ({ node, ...props }) => <h3 id={generateSlug(props.children)} className="text-xl font-bold mt-10 mb-4 text-[#00b050]" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-[#00b050]" {...props} />,
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-[#00b050] marker:font-bold" {...props} />,
                      blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-[#00b050] bg-[#00b050]/5 pl-6 py-5 my-8 rounded-r-xl italic text-gray-700" {...props} />,
                      img: ({ node, ...props }) => (
                        <div
                          className="relative group cursor-zoom-in my-10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                          onClick={() => setLightboxImage({ src: props.src, alt: props.alt })}
                        >
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                          <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                          <img className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" {...props} />
                        </div>
                      ),
                      table: ({ node, ...props }) => (
                        <div className="my-10 overflow-x-auto rounded-3xl border border-white/50 shadow-2xl bg-white/40 backdrop-blur-md">
                          <table className="w-full border-collapse text-left" {...props} />
                        </div>
                      ),
                      thead: ({ node, ...props }) => (
                        <thead className="bg-[#1a3a52] text-white" {...props} />
                      ),
                      th: ({ node, ...props }) => (
                        <th className="px-6 py-5 font-bold uppercase tracking-wider text-sm border-b border-white/10" {...props} />
                      ),
                      td: ({ node, ...props }) => (
                        <td className="px-6 py-5 text-[#2c3e50] border-b border-gray-100/50 bg-white/20 backdrop-blur-sm" {...props} />
                      ),
                      tr: ({ node, ...props }) => (
                        <tr className="hover:bg-white/40 transition-colors duration-200" {...props} />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100 text-[#2c3e50] hover:bg-[#00b050] hover:text-white px-3 py-1 text-sm transition-colors cursor-pointer">
                          <Tag className="w-3 h-3 mr-2" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interaction & Share */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-[#1a3a52] font-medium">War dieser Artikel hilfreich?</span>
                    <Button
                      variant={hasVoted ? "default" : "outline"}
                      size="sm"
                      onClick={handleVote}
                      disabled={hasVoted}
                      className={`gap-2 ${hasVoted ? "bg-[#00b050] hover:bg-[#00b050]" : "hover:text-[#00b050] hover:border-[#00b050]"}`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${hasVoted ? 'fill-current' : ''}`} />
                      {post.helpful_count || 0}
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    <ShareButtons
                      title={post.title}
                      description={post.excerpt}
                    />
                  </div>
                </div>

                {/* PDF Download */}
                {post.download_url && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#00b050]/10 to-[#1a3a52]/5 rounded-2xl border border-[#00b050]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#00b050]">
                        <Download className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a3a52] text-lg">Zusatzmaterial</h4>
                        <p className="text-sm text-[#2c3e50]/70">Checkliste als PDF herunterladen</p>
                      </div>
                    </div>
                    <Button className="bg-[#00b050] hover:bg-[#009040] text-white shadow-lg shadow-[#00b050]/30 w-full sm:w-auto">
                      Download PDF
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Author */}
            <div className="mb-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Über den Autor</h3>
              <BlogAuthorCard author={post.author} />
            </div>

            {/* CTA */}
            {post.related_service && (
              <div className="mb-12 relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <div className="absolute inset-0 bg-[#1a3a52]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52] to-[#00b050] opacity-90" />
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

                <div className="relative p-10 md:p-14 text-center text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-6">
                    Benötigen Sie professionelle Hilfe?
                  </h3>
                  <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Unsere Experten für <strong className="text-white border-b border-[#00b050]">{post.related_service}</strong> stehen Ihnen für eine individuelle Beratung zur Verfügung.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to={createPageUrl('Contact')}>
                      <Button size="lg" className="bg-white text-[#1a3a52] hover:bg-white/90 min-w-[200px] h-14 text-lg shadow-xl">
                        Kontakt aufnehmen
                      </Button>
                    </Link>
                    <Link to={createPageUrl('Services')}>
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 min-w-[200px] h-14 text-lg backdrop-blur-sm">
                        Mehr erfahren
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Comments */}
            <div className="mb-12">
              <BlogComments
                comments={post.comments || []}
                postId={post.id}
              />
            </div>

            {/* Related Posts */}
            <div className="mb-12">
              <RelatedPosts
                currentPost={post}
                allPosts={blogPosts}
                categories={blogCategories}
              />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
