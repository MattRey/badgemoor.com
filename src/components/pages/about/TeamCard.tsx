import Image from 'next/image';
import { TeamMember } from '@/data/about';
import HorizontalRule from '../../HorizontalRule';

export default function TeamCard({ imageSrc, name, title, email, phone, text }: TeamMember) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <HorizontalRule />
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">
          <span className="text-[#d33520] pr-5">{"//"}</span>
          {name}
        </h3>
        <p className="text-2xl italic">{title}</p>
        {email && <p className="text-xl"><a href={`mailto:${email}`}>{email}</a></p>}
        {phone && <p className="text-xl"><a href={`tel:${phone}`}>{phone}</a></p>}
        <p className="text-xl mt-4">{text}</p>
      </div>
    </div>
  );
}