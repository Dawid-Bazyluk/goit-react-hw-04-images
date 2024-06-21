import { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "./Loader";
import styles from "./Aplication.module.scss";
import "../index.module.scss"

const API_KEY = "3738917-e2fd90131b33d81f7486a9a18";

export default class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImageUrl: "",
  };

  handleSearch = (query) => {
    this.setState({ query, page: 1, images: [] }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ isLoading: true });

    axios
      .get(url)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.error("Error fetching data: ", error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  openModal = (largeImageURL) => {
    this.setState({ showModal: true, modalImageUrl: largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImageUrl: "" });
  };

  render() {
    const { images, isLoading, showModal, modalImageUrl } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(image.largeImageURL)}
            />
          ))}
        </ImageGallery>

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} disabled={isLoading} />
        )}

        {showModal && (
          <Modal
            src={modalImageUrl}
            alt="Modal Image"
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
