import { useEffect, useState } from "react";

import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";
import styles from "./Aplication.module.scss";
import "../index.module.scss";

const API_KEY = "3738917-e2fd90131b33d81f7486a9a18";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  useEffect(() => {
    if (query) {
      setImages([])
      fetchImages();
    }
  }, [query]);

  const fetchImages = () => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setImages((prevImg) => [...prevImg, ...response.data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.error("Error fetching data: ", error))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };
  const openModal = (largeImageURL) => {
    setShowModal(true);
    setModalImageUrl(largeImageURL);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalImageUrl("");
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => openModal(image.largeImageURL)}
          />
        ))}
      </ImageGallery>

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && (
        <Button onClick={fetchImages} disabled={isLoading} />
      )}

      {showModal && (
        <Modal src={modalImageUrl} alt="Modal Image" onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
