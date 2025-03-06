import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 }, // Subtle scale and slide up
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.1)", transition: { duration: 0.3 } }, // Smooth scale-up & shadow effect
};

const SectionCard = ({ title, description, bgColor, textColor, links, className }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`p-6 shadow-md transition-transform ${className}`}
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
            <motion.a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition flex items-center space-x-2"
              whileHover={{ x: 5, transition: { duration: 0.2 } }} // Subtle slide effect on hover
            >
              <span>{link.name}</span>
              <FaExternalLinkAlt className="text-xs opacity-70" />
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SectionCard;
