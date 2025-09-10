import { useStore } from "@nanostores/react";
import { memo, useEffect, useState } from "react";
import { themeStore, toggleTheme } from "~/lib/stores/theme";
import { IconButton } from "./IconButton";

interface ThemeSwitchProps {
    className?: string;
}

export const ThemeSwitch = memo(({ className }: ThemeSwitchProps) => {
    const theme = useStore(themeStore);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        domLoaded && (
            <div className={className} onClick={toggleTheme}>
                <IconButton
                    icon={theme === "dark" ? "i-ph-sun-dim-duotone" : "i-ph-moon-stars-duotone"}
                    className="text-white"
                    size="xl"
                    title="Toggle Theme"
                />

                {theme === "dark" ? (
                    <span className={`text-sm text-white font-medium ml-3`}>Dark</span>
                ) : (
                    <span className={`text-sm text-white font-medium ml-3`}>Light</span>
                )}
            </div>
        )
    );
});
