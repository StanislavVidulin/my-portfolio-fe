import { InfoItemProps } from "./types";

export default function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-start space-x-4 text-gray-300 text-lg font-montserrat">
      <div className="text-white-400 text-2xl mt-1">{icon}</div>
      <div className="flex-shrink-0 w-36 text-white font-semibold">
        {label}:
      </div>
      <div className="flex-grow whitespace-normal break-words">{value}</div>
    </div>
  );
}