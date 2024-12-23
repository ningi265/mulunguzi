'use client';

import { useState, useEffect, useCallback } from 'react';
import { BookOpen, FileText, Video, Download, ExternalLink, Search } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'quiz' | 'exam' | 'note' | 'video' | 'other';
  link: string;
}

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'quiz' | 'exam' | 'note' | 'video' | 'other'>('all');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const data: Resource[] = [
      { id: '1', title: 'Grammar Quiz', type: 'quiz', link: '/resources/physics-quiz' },
      { id: '2', title: 'English Paper II Past Papers', type: 'exam', link: '/resources/math-past-papers' },
      { id: '3', title: 'English Paper I Past Papers', type: 'exam', link: '/resources/math-past-papers' },
      { id: '4', title: 'English Paper III Past Papers', type: 'exam', link: '/resources/math-past-papers' },
      { id: '5', title: 'Note Making Assistant Tool', type: 'note', link: '/resources/note-making-tool' },
      { id: '6', title: 'Chichewa Video Lecture', type: 'video', link: '/resources/physics-video-lecture' },
      { id: '7', title: 'General Study Resources', type: 'other', link: '/resources/general-study' },
      { id: '8', title: 'Chichewa Paper I Past Papers', type: 'exam', link: '/resources/chichewa-paper-i' },
      { id: '9', title: 'Chichewa Paper II Past Papers', type: 'exam', link: '/resources/chichewa-paper-ii' },
      { id: '10', title: 'Chichewa Paper III Past Papers', type: 'exam', link: '/resources/chichewa-paper-iii' },
      { id: '11', title: 'French Past Papers', type: 'exam', link: '/resources/chichewa-paper-iii' }
    ];
    setResources(data);
  };

  const filterResources = useCallback(() => {
    const filtered = resources.filter((resource) => {
      const matchesSearchTerm = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      return matchesSearchTerm && matchesType;
    });
    setFilteredResources(filtered);
  }, [resources, searchTerm, selectedType]);

  useEffect(() => {
    filterResources();
  }, [filterResources]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'quiz':
        return BookOpen;
      case 'exam':
        return FileText;
      case 'note':
        return FileText;
      case 'video':
        return Video;
      default:
        return Download;
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value as 'all' | 'quiz' | 'exam' | 'note' | 'video' | 'other');
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-r from-indigo-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-900 tracking-wide">Learning Resources</h2>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-lg transition duration-200"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500" />
          </div>
        </div>

        {/* Filter by Resource Type */}
        <div className="mb-8 text-center">
          <label className="mr-4 text-xl font-semibold text-indigo-800">Filter by Type:</label>
          <select
            className="border-2 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-lg"
            value={selectedType}
            onChange={handleSelectChange}
          >
            <option value="all">All Resources</option>
            <option value="quiz">Quizzes</option>
            <option value="exam">Exams (Past Papers)</option>
            <option value="note">Note Making Assistant</option>
            <option value="video">Videos</option>
            <option value="other">Other Resources</option>
          </select>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredResources.map((resource) => {
            const Icon = getIcon(resource.type);
            return (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  <Icon className="w-16 h-16 mb-4 text-indigo-600 mx-auto" />
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2 text-center">{resource.title}</h3>
                  <div className="mt-4 text-center">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
                    >
                      Access Resource <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
