import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import InstagramIcon from './icons/InstagramIcon';


const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-lg font-bold text-slate-800">
                        Advanteens
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                        <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
                        <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
                        <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
