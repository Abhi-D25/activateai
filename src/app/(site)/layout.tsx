import MobileLayout from "@/app/components/MobileLayout";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MobileLayout>
            {children}
        </MobileLayout>
    );
}
