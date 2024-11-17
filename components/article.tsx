import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { articles } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  articleUrl: string;
  tags: string[];
};

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  description, 
  image, 
  readTime,
  date,
  articleUrl, 
  tags 
}) => (
  <div className="w-full mb-16 relative">
    <div className="group relative">
      <div className="absolute inset-0 backdrop-blur-md rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg opacity-20" />

      <div className="relative border border-white/10 rounded-lg shadow-lg overflow-hidden 
                      hover:shadow-xl transition-all duration-300">
        <div className="relative w-full h-64">
          <Image 
            src={image} 
            alt={`${title} Preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-6 backdrop-blur-sm bg-transparent">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
            <span>{date}</span>
            <span>·</span>
            <span>{readTime} min read</span>
          </div>
          <p className="text-white mb-4">{description}</p>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 
                           rounded-full border border-purple-600/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href={articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2 bg-purple-600/80 hover:bg-purple-600 
                        text-white font-semibold rounded-lg shadow-md 
                        backdrop-blur-sm transition-all duration-300
                        hover:shadow-purple-500/20 hover:shadow-lg
                        text-center"
            >
              Read Article
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Article() {
  const articlesList = [
    {
      title: "Getting Started with AI Development",
      description: "A comprehensive guide to building AI applications with modern tools and frameworks.",
      image: "/images/ai-dev-preview.jpg",
      readTime: "5",
      date: "2024-03-15",
      articleUrl: "https://yourblog.com/ai-development",
      tags: ["AI", "Development", "Programming", "Machine Learning"]
    },
    {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies in web development.",
      image: "/api/placeholder/800/400",
      readTime: "7",
      date: "2024-03-10",
      articleUrl: "https://yourblog.com/future-web-dev",
      tags: ["Web Development", "JavaScript", "Trends"]
    },
  ];

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-11 relative">
        <SubHeading dark align={Align.Left}>
          articles
        </SubHeading>

        <div className="w-full space-y-8">
          {articlesList.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
      <Float config={articles} />
    </SectionLayout>
  );
}