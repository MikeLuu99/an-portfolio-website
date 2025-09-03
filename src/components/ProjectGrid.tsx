import React, { useState } from "react";
import { DestinationCard } from "./ui/card";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());

  const handleLike = (projectTitle: string) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle);
      } else {
        newSet.add(projectTitle);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {projects.map((project) => (
        <div key={project.title} className="h-[400px]">
          <DestinationCard
            imageUrl={project.image}
            category={project.category}
            title={project.title}
            isLiked={likedProjects.has(project.title)}
            onLike={() => handleLike(project.title)}
          />
        </div>
      ))}
    </div>
  );
}