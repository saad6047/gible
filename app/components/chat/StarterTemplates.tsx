import React from "react";
import type { Template } from "~/types/template";
import { STARTER_TEMPLATES } from "~/utils/constants";

interface FrameworkLinkProps {
    template: Template;
}

const FrameworkLink: React.FC<FrameworkLinkProps> = ({ template }) => (
    <a
        href={`/git?url=https://github.com/${template.githubRepo}.git`}
        data-state="closed"
        data-discover="true"
        className="items-center justify-center"
    >
        <div
            className="flex items-center justify-center w-14 h-14 bg-[#1E293B] border border-[#353F4F] rounded-lg transition-theme transition-all"
            title={template.label}
        >
            <div className={`${template.icon} w-6 h-6 text-white`} />
        </div>
    </a>
);

const StarterTemplates: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-gray-500">or start a blank app with your favorite stack</span>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center items-center gap-4 max-w-sm">
                    {STARTER_TEMPLATES.map((template) => (
                        <FrameworkLink key={template.name} template={template} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarterTemplates;
