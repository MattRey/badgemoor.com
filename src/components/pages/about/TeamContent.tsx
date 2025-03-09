import { teamMembers } from '@/data/about';
import TeamCard from './TeamCard';

interface TeamContentProps {
  id?: string;
}

export default function TeamContent({ id }: TeamContentProps) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-light mb-12">
        <span className="text-[#d33520] pr-5">{"//"}</span>
        Who We Are
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            {...member}
          />
        ))}
      </div>
    </div>
  );
} 