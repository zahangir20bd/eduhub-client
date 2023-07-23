import SectionTitle from "../../../components/Common/SectionTitle/SectionTitle";
import img1 from "../../../assets/images/gallery/img1.jpg";
import img2 from "../../../assets/images/gallery/img2.jpg";
import img3 from "../../../assets/images/gallery/img3.jpg";
import img4 from "../../../assets/images/gallery/img4.jpg";
import img5 from "../../../assets/images/gallery/img5.jpg";
import img6 from "../../../assets/images/gallery/img6.jpg";
import img7 from "../../../assets/images/gallery/img7.jpg";
import img8 from "../../../assets/images/gallery/img8.jpg";
import img9 from "../../../assets/images/gallery/img9.jpg";
import img10 from "../../../assets/images/gallery/img10.jpg";
import img11 from "../../../assets/images/gallery/img11.jpg";
import img12 from "../../../assets/images/gallery/img12.jpg";

const Gallery = () => {
  return (
    <section className="w-full px-4">
      <SectionTitle section_title="Archive of Successful Graduates" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
