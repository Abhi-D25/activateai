import { notFound } from 'next/navigation';
import { industryData } from '../data';
import IndustryTemplate from '@/components/demos/IndustryTemplate';

export function generateStaticParams() {
    return Object.keys(industryData).map((industry) => ({
        industry,
    }));
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
    const data = industryData[params.industry];

    if (!data) {
        notFound();
    }

    return <IndustryTemplate data={data} />;
}
