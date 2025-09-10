import { json, type MetaFunction } from "@remix-run/cloudflare";
import { ClientOnly } from "remix-utils/client-only";
import { BaseChat } from "~/components/chat/BaseChat";
import { Chat } from "~/components/chat/Chat.client";
import { Header } from "~/components/header/Header";
import BackgroundRays from "~/components/ui/BackgroundRays";

export const meta: MetaFunction = () => {
    return [{ title: "Gible" }, { name: "description", content: "Talk with Gible, an AI assistant" }];
};

export const loader = () => json({});

/**
 * Landing page component for Bolt
 * Note: Settings functionality should ONLY be accessed through the sidebar menu.
 * Do not add settings button/panel to this landing page as it was intentionally removed
 * to keep the UI clean and consistent with the design system.
 */
export default function Index() {
    return (
        <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1 bg-gradient-to-rb from-[#2C5FD0] via-[#BFDCFD] to-[#ffffff]  dark:bg-gradient-to-rb dark:from-[#2460E0] dark:via-[#0b2152] dark:to-[#080E1F]">
            {/* <BackgroundRays /> */}
            <Header />
            <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
        </div>
    );
}
