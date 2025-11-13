import type { Route } from './+types/page';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { source } from '@/lib/source';
import type * as PageTree from 'fumadocs-core/page-tree';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { docs } from '@/.source';
import { toClientRenderer } from 'fumadocs-mdx/runtime/vite';
import { baseOptions } from '@/lib/layout.shared';
import { Calendar, Clock, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// Enhanced MDX components with better styling
const enhancedMdxComponents = {
  ...defaultMdxComponents,
  h1: (props: any) => (
    <h1 
      className="group flex items-center gap-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-800"
      {...props}
    >
      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 
      className="group flex items-center gap-3 text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-12 mb-6 pb-3 border-b border-gray-100 dark:border-gray-800"
      {...props}
    >
      <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 
      className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 flex items-center gap-2"
      {...props}
    >
      <div className="w-1 h-4 bg-blue-300 rounded-full" />
      {props.children}
    </h3>
  ),
  p: (props: any) => (
    <p 
      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg"
      {...props}
    />
  ),
  a: (props: any) => (
    <a 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-colors duration-200 font-medium"
      {...props}
    />
  ),
  code: (props: any) => (
    <code 
      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-mono text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  pre: (props: any) => (
    <div className="relative group my-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
      <pre 
        className="relative bg-gray-900 dark:bg-gray-950 border border-gray-700 rounded-xl p-4 overflow-x-auto text-gray-100 font-mono text-sm shadow-2xl"
        {...props}
      />
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 pl-6 py-4 my-6 rounded-r-xl italic text-gray-700 dark:text-gray-300 relative overflow-hidden"
      {...props}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500" />
      {props.children}
    </blockquote>
  ),
  ul: (props: any) => (
    <ul 
      className="space-y-2 my-4 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  li: (props: any) => (
    <li 
      className="flex items-start gap-3"
      {...props}
    >
      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 flex-shrink-0" />
      {props.children}
    </li>
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <table 
        className="w-full text-sm text-left text-gray-700 dark:text-gray-300"
        {...props}
      />
    </div>
  ),
  th: (props: any) => (
    <th 
      className="px-4 py-3 bg-gray-100 dark:bg-gray-800 font-semibold border-b border-gray-200 dark:border-gray-700"
      {...props}
    />
  ),
  td: (props: any) => (
    <td 
      className="px-4 py-3 border-b border-gray-100 dark:border-gray-800"
      {...props}
    />
  ),
};

function PageHeader({ frontmatter }: { frontmatter: any }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 border border-blue-200 dark:border-blue-800 p-8 mb-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 dark:bg-blue-600/10 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-200/20 dark:bg-cyan-600/10 rounded-full translate-y-12 -translate-x-12" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-700">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Documentation</span>
          </div>
          
          {frontmatter.lastUpdated && (
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
              <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Updated {frontmatter.lastUpdated}
              </span>
            </div>
          )}
        </div>

        <DocsTitle>
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-500" />
            {frontmatter.title}
          </div>
        </DocsTitle>
        
        <DocsDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {frontmatter.description}
        </DocsDescription>

        {(frontmatter.author || frontmatter.readTime) && (
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-600 dark:text-gray-400">
            {frontmatter.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{frontmatter.author}</span>
              </div>
            )}
            {frontmatter.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{frontmatter.readTime} read</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'].split('/').filter((v) => v.length > 0);
  const page = source.getPage(slugs);
  if (!page) throw new Response('Not found', { status: 404 });

  return {
    path: page.path,
    tree: source.getPageTree(),
  };
}

const renderer = toClientRenderer(
  docs.doc,
  ({ toc, default: Mdx, frontmatter }) => {
    return (
      <DocsPage toc={toc}>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        
        <PageHeader frontmatter={frontmatter} />
        
        <DocsBody>
          <div className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-semibold
            prose-h1:border-none
            prose-h2:border-none
            prose-a:no-underline prose-a:border-b prose-a:border-blue-300 hover:prose-a:border-blue-500
            prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-blue-500
            prose-ul:list-none prose-ul:pl-0
            prose-li:pl-0">
            <Mdx components={enhancedMdxComponents} />
          </div>
        </DocsBody>

        {/* Enhanced footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Need help with this topic? 
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium">
                <span>Next Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </DocsPage>
    );
  },
);

export default function Page({ loaderData }: Route.ComponentProps) {
  const { tree, path } = loaderData;
  const Content = renderer[path];

  return (
    <DocsLayout 
      {...baseOptions()} 
      tree={tree as PageTree.Root}
      // Enhanced sidebar styling
      sidebar={{
        className: 'border-r border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm',
      }}
    >
      <Content />
    </DocsLayout>
  );
}