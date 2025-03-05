import { FaExternalLinkAlt } from "react-icons/fa";
import { FaIconName } from 'react-icons/fa';


const SectionCard = ({ title, description, bgColor, textColor, links, className }) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
        {title}
      </h2>

      {/* Optional Description */}
      {description && <p className="text-gray-400 text-sm mb-3">{description}</p>}

      {/* Link List */}
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition flex items-center space-x-2"
            >
              <span>{link.name}</span>
              <FaExternalLinkAlt className="text-xs opacity-70" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionCard;
