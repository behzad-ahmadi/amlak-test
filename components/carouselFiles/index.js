import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const width = 300;
const height = 230;

const CarouselFile = props => {
  const { images } = props;

  return (
    <Carousel interval={null} indicators={false}>
      {images &&
        images.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <div
                style={{
                  width: `100%`,
                  height: `${height}px`,
                  position: 'relative',
                }}
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  style={{
                    filter: 'brightness(55%)',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CarouselFile;
