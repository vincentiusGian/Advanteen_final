import React, { useState } from 'react';
import ProjectInfoCard from '../components/ProjectInfoCard';
// import ProjectTrackSelector from './ProjectTrackSelector';
// import ProjectSubmission from './ProjectSubmission';

const projectData = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlDojpGdd3VqgD8CWj9AlhiPWK3XIJev2Cw&s',
    title: "Indonesia's Cultural Heritage Campaign",
    organizer: "Indonesia'sl Heritage Society",
    tags: ['Online', 'Offline', 'Arts/Culture'],
    prizes: {
        gems: 20,
        coins: 100,
        collectible: '1X Random Collectible'
    }
};

const ProjectRegistrationPage: React.FC = () => {
    const [activeTrack, setActiveTrack] = useState<'online' | 'offline'>('online');

    return (
        <div className="pt-32 pb-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-8 gap-8">
                    <div className="lg:col-span-1 xl:col-span-2">
                        <ProjectInfoCard project={projectData} />
                    </div>
                    <div className="lg:col-span-1 xl:col-span-3">
                        {/* <ProjectTrackSelector activeTrack={activeTrack} setActiveTrack={setActiveTrack} /> */}
                    </div>
                    <div className="lg:col-span-1 xl:col-span-3">
                        {/* <ProjectSubmission /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectRegistrationPage;