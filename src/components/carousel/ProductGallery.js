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
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/260351094_140829874968735_563816007845591529_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xoNOJOC5mPwAX9yxleH&_nc_ht=scontent-bom1-1.xx&oh=00_AfAMO83UPnxJ4tceTYwj2KblsJf11YWcvKJ80jZH-RohKw&oe=63EC217B"
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
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/260839733_141069491611440_5704158963527122051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_S3E2l9EO0AAX826BLn&_nc_ht=scontent-bom1-2.xx&oh=00_AfBYUUQap33Qoz8WPyuBIjR6pUelmWWG1ifdi47NoUuPiQ&oe=63ED1555"
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
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/252151984_135243825527340_6459359270637997639_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fXowA80ofhMAX9qHn6H&_nc_ht=scontent-bom1-1.xx&oh=00_AfD_ip5pMe3KyQeZihVvYyX8x7KVjOdLB8N8H4UvewFbSg&oe=63EC8453"
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
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/246997600_132938569091199_438140995233464125_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3qv9O-by0EMAX8qflmB&tn=SNQPH4sHG68zaSrx&_nc_ht=scontent-bom1-1.xx&oh=00_AfD3VY4inkJZvLK90Nwk92uDk86iNPY0MB8TR7wBGjULNg&oe=63ED2236"
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
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/241270351_132509802467409_8049047370692858997_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0lGo0WSYaM4AX8hjsk5&_nc_ht=scontent-bom1-1.xx&oh=00_AfCwhrjUiC14O5L5KFSk788fOFDZ8osnyRp5GqtTrEqpGA&oe=63ECA88A"
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
              src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/247685535_134625232255866_5244764122685490935_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=plbgcYEWMTAAX-pcdFz&_nc_ht=scontent-bom1-2.xx&oh=00_AfDqR8fmb_hIoDGfDYlHLD7wwn10b7zTmgIsaggRxFTXog&oe=63EC2241"
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
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/246762921_133835459001510_1510687425552552780_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dZZK1_dwWGEAX_o6J-d&tn=SNQPH4sHG68zaSrx&_nc_ht=scontent-bom1-1.xx&oh=00_AfAmwAd2wfFg6UbZQ3lcNptTSNDopMdvZgGA9asT5_ZKSQ&oe=63ECF66E"
              alt="showcaseImage"
            ></img>
          </div>
        </SliderComp>
      </div>
    </div>
  );
};

export default ProductGallery;
