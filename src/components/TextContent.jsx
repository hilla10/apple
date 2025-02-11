import { motion } from 'framer-motion';

const TextContent = ({ isActive, title, text }) => {
  return (
    <motion.div
      className='text-content'
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: 'easeInOut' }}>
      <div
        href='#'
        className='btn-light px-[15px] py-[7px] lg:px-[21px] lg:py-[8px] !mt-0  border border-transparent rounded-[980px] text-[14px] lg:text-[17px] cursor-pointer lg:w-[152px]'>
        Stream now
      </div>
      <p className='text-para shadow'>
        <span className='font-bold block md:inline'>{title}</span>{' '}
        <span className='font-bold   hidden md:inline'> · </span> {text}
      </p>
    </motion.div>
  );
};

export default TextContent;
