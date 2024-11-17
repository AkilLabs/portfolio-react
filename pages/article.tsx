import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionLayout } from "@/components/Layout";

interface Article {
  title: string;
  excerpt: string;
  image?: string;
}

interface LinkedInPostType {
  id: number;
  content: string;
  article?: Article;
  image?: string;
  url?: string;
}

interface LinkedInPostProps {
  post: LinkedInPostType;
}

const LinkedInPost: React.FC<LinkedInPostProps> = ({ post }) => (
  <article className="w-full max-w-3xl mx-auto p-6 rounded-lg bg-black/40 border border-[#DE5055]/20 hover:border-[#DE5055]/40 transition-all duration-300 backdrop-blur-sm">
    <div className="space-y-4">
      {post.article && (
        <div className="border border-[#DE5055]/20 rounded-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/images/post1.jpg"
              alt="Akil A Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="p-4 bg-black/50">
            <h4 className="font-semibold text-white">{post.article.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{post.article.excerpt}</p>
            <a 
              href={post.url || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-4 px-4 py-2 bg-[#DE5055] hover:bg-[#DE5055]/90 text-white rounded-lg transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      )}
      
      {post.image && !post.article && (
        <div className="space-y-4">
          <div className="relative w-full h-64">
            <Image
              src={post.image}
              alt="Post content"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="text-white">{post.content}</p>
          <a 
            href={post.url || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-4 py-2 bg-[#DE5055] hover:bg-[#DE5055]/90 text-white rounded-lg transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      )}
    </div>
  </article>
);

const Footer: React.FC = () => (
  <div className="w-full mt-16 border-t border-white/10">
    <div className="py-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white text-lg font-semibold mb-4">Let&apos;s Connect</h3>
       
        <div className="flex space-x-6">
          <a
            href="https://github.com/AkilLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
         
          <a
            href="https://linkedin.com/in/akil-a-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
         
          <a
            href="mailto:akilaskarali@gmail.com"
            className="text-white/70 hover:text-[#DE5055] transition-colors duration-300 flex items-center space-x-2 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
       
        <p className="text-white/50 text-sm text-center mt-4">
          © {new Date().getFullYear()} Akil A. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

const sampleLinkedInPosts: LinkedInPostType[] = [
  {
    id: 1,
    content: "Excited to share my latest article on React performance optimization! Check out the complete guide below 🚀",
    article: {
      title: "Inspiring Journeys in AI and Data: Insights from Industry Leaders",
      excerpt: "Inspired by Vidya Kanagarajan and Rahul Dey's insights on resilience and real-world problem-solving in AI and data.",
      image: "/api/placeholder/600/300"
    },
    url: "https://www.linkedin.com/posts/akil-a-_microsoft-deloitte-artificialintelligence-activity-7261275380836106241-HsJ3?utm_source=share&utm_medium=member_desktop"
  },
];

const ArticlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black via-[#DE5055]/10 to-black text-white">
      <SectionLayout>
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#DE5055] to-[#DE5055]/80 bg-clip-text text-transparent mb-12 text-center">
            Featured Article
          </h1>
          
          <div className="space-y-8">
            {sampleLinkedInPosts.map((post) => (
              <LinkedInPost key={post.id} post={post} />
            ))}
          </div>
          
          <Footer />
        </div>
      </SectionLayout>
    </div>
  );
};

export default ArticlePage;