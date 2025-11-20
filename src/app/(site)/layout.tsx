import MobileLayout from "../components/MobileLayout";

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
