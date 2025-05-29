import { motion } from "framer-motion";

interface Props {
  show: boolean;
  loading: boolean;
  message: React.ReactNode;
}

const Notification: React.FC<Props> = ({ show, loading, message }) => {
  return (
    <div>
      <motion.div
        className="message_sent_notification"
        initial={{ x: 10, opacity: 0 }}
        animate={show ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="message_sent_text">{message}</div>
        <div className="indicator_container">
          {loading && (
            <motion.div
              className="indicator"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Notification;
