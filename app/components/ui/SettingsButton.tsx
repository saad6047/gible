import { memo } from "react";
import { IconButton } from "~/components/ui/IconButton";
interface SettingsButtonProps {
    onClick: () => void;
}

export const SettingsButton = memo(({ onClick }: SettingsButtonProps) => {
    return (
        <div className="w-full text-[#666] w-full !bg-[#324154] flex items-center justify-center py-1.5 hover:text-bolt-elements-textPrimary hover:bg-bolt-elements-item-backgroundActive/10 transition-colors cursor-pointer">
            <IconButton onClick={onClick} className="text-white" icon="i-ph:gear" size="xl" title="Settings" data-testid="settings-button" />

            <span className="text-sm text-white font-medium ml-3">Settings</span>
        </div>
    );
});
