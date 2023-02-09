import React from "react";
import classes from "./ProductGallery.module.css";
import SliderComp from "./SliderComp";
const ProductGallery = () => {
  return (
    <div className={classes.productGalleryContainer}>
      <div className={classes.galleryContainer}>
        <SliderComp>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1100"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/246491277_389374919442821_8733544438269193589_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9c4fTnBlWe0AX83Y0xf&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA-q0KFqJB7qMrNTVLG4wovwWnEetpUpkwOgs8vgMBH1w&oe=63E66E9C"
              alt="showcaseImage"
            />
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/250146035_553619912399699_8234484363111230588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=AO86-4JrHsUAX-TodE-&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD3efz_SK2pUEIxNLWbzPWm5xYzB86oX-UylUS3bbCk3g&oe=63E6F87A"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/248379096_120143407097832_8773041973930327222_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Q9pkxEbrzboAX-pzz_A&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCJGk_VEAO1ovT5ifDnNo9RLeDJvHdDCtNNr7nZrtDr9Q&oe=63E58AEC"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="800"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/272173690_984798762137066_4427291008372384569_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UKdHxQYb4SwAX-3oamX&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBJJPp45eJYU9KtNhwL21eNJkcEdGii81X6Gi75A7tTjw&oe=63E54A63"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="700"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/260351640_2135798426569465_6358651948514477673_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=boDUsQdeFPYAX8jGqmw&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBNTlbr_pSJK-HTAT5wX4NRhxJBfw-ZbLZ2_KMsgkF06g&oe=63E6B845"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="600"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/261920190_1329815384155979_6565877766872902449_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VE4N5iXjLdQAX_9fE-W&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDDZjAQfEaHjoZIWR7L-Lc94CctUhBUM5Hk4vrOQOvECA&oe=63E5D014"
              alt="showcaseImage"
            ></img>
          </div>
          <div
            className={classes.galleryImage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
          >
            <img
              src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/273201537_1102983487194641_8863397726974508657_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Z05PgJsrT4wAX9camVg&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDolY5WTK6EkkoFPZrtwppy5gmLDo5bTk64Ef9YZ0vIGA&oe=63E627F8"
              alt="showcaseImage"
            ></img>
          </div>
        </SliderComp>
      </div>
    </div>
  );
};

export default ProductGallery;
