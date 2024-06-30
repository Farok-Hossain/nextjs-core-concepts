import Image from "next/image";
import myImage from "../../../public/image/myImage.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Image Optimizations</h1>

      <Image src={myImage} alt="image" width={500} className="mx-auto" />
      <Image
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
        width={500}
        height={400}
        className="mx-auto mt-6 mb-10"
      />
    </div>
  );
};

export default GalleryPage;
