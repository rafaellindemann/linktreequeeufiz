import { motion } from "framer-motion";

const LinkItem = ({ name, link, color, icon }) => {
  return (
    <motion.div
      className="link-container"
      style={{ background: color }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon} {name}
      </a>
    </motion.div>
  );
};

export default LinkItem;