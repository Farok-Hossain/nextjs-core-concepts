import Image from "next/image";
import myImage from "../../../public/image/myImage.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Image Optimizations</h1>
      <h2>Regular Image Tag</h2>
      <img src={myImage} alt="image" className="mx-auto" />
      <Image src={myImage} alt="image" width={500} className="mx-auto" />
      <Image
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw1KkvwiByhsFSwtIuxUqGZ9&ust=1719742740456000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC9iYzLgIcDFQAAAAAdAAAAABAE"
        alt="image"
        width={500}
        height={400}
        className="mx-auto mt-4"
      />
    </div>
  );
};

export default GalleryPage;
