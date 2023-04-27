import { useState } from "react";
import { modalData } from "../interfaces/modalData";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import {motion} from 'framer-motion'
import { Text } from 'react-native'

function ImageModal({ data }: { data: modalData }) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <motion.div
        className={styles.previewContainer}
        onClick={openModal}
        whileHover={{
          scale: 1.05,
          height: "25em",
        }}
        transition={{ duration: 0.4 }}
      >
        <h3>{data.title}</h3>
        <img src={data.image} alt="" />
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:.5}}
        className={styles.hiddenText}>{data.description.split(",", 1)}</motion.p>
      </motion.div>
      <Modal
        className={styles.modalContainer}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1>{data.title}</h1>
        <img src={data.image} alt="test" />
        <p>{data.description}</p>
      </Modal>
    </>
  );
}

export default ImageModal;
