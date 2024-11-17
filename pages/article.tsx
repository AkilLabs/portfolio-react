import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionLayout } from "@/components/Layout";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  tags?: string[];
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="w-full mb-16 relative">
    <div className="group relative">
      <div className="absolute inset-0 backdrop-blur-md rounded-lg bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black rounded-lg opacity-20" />

      <div className="relative border border-white/10 rounded-lg shadow-lg overflow-hidden 
                    hover:shadow-xl transition-all duration-300 bg-black">
        <div className="relative w-full h-64">
          <Image
            src={article.image}
            alt={article.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-6 backdrop-blur-sm bg-black">
          <h3 className="text-white text-xl font-semibold mb-2">{article.title}</h3>
          <p className="text-white mb-4">{article.excerpt}</p>
          
          {article.tags && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-[#DE5055]/20 text-[#DE5055] 
                             rounded-full border border-[#DE5055]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2 bg-[#DE5055]/80 hover:bg-[#DE5055] 
                      text-white font-semibold rounded-lg shadow-md 
                      backdrop-blur-sm transition-all duration-300
                      hover:shadow-[#DE5055]/20 hover:shadow-lg
                      text-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="w-full mt-16 border-t border-white/10 bg-black">
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

const sampleArticles: Article[] = [
  {
    title: "Inspiring Journeys in AI and Data: Insights from Industry Leaders",
    excerpt: "Inspired by Vidya Kanagarajan and Rahul Dey's insights on resilience and real-world problem-solving in AI and data.",
    image: "/images/post1.jpg",
    url: "https://www.linkedin.com/posts/akil-a-_microsoft-deloitte-artificialintelligence-activity-7261275380836106241-HsJ3",

  },
];

export default function Articles() {
  return (
    <div className="w-full min-h-screen bg-black">
      <SectionLayout className="w-full items-center relative bg-black">
        <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11 bg-black">
          <div className="w-full">
            <h2 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">
              articles
            </h2>
          </div>

          <div className="w-full max-w-4xl space-y-8">
            {sampleArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <Footer />
        </div>
      </SectionLayout>
    </div>
  );
}