// Server Component — can safely export generateStaticParams
import { projects } from '@/lib/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  return {
    title: project ? `${project.title} | Toufiq Alahe` : 'Project | Toufiq Alahe',
    description: project?.description ?? '',
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
