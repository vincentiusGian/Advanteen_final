import React from 'react';
import ProjectInfoCard from '../components/ProjectInfoCard';
import CertificateDownloader from '../components/CertificateDownloader';

const projectData = {
    img: 'https://images.unsplash.com/photo-1542835435-4388cb37a44f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: "Indonesia's Cultural Heritage Campaign",
    organizer: "Indonesia'sl Heritage Society",
    tags: ['Online', 'Offline', 'Arts/Culture'],
    prizes: {
        gems: 20,
        coins: 100,
        collectible: '1X Random Collectible'
    }
};

const ProjectCompletionPage: React.FC = () => {
    return (
        <div className="flex-grow flex items-center py-12 lg:py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row gap-6 items-stretch w-full">
                    <div className="w-[40%]">
                        <ProjectInfoCard project={projectData} />
                    </div>
                    <div className="w-[60%]">
                        <CertificateDownloader />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCompletionPage;
