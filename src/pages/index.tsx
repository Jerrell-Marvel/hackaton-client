import contact from "@/assets/contact.svg";
import girlIcon from "@/assets/girl-contact-us.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    // <div className="w-full py-8 min-h-screen bg-slate-100 flex justify-center items-center ">
    <div className="min-h-screen bg-white min-w-sm ">
      <Navbar />
      <section className="px-3 max-w-screen-md mx-auto">
        <Carousel />
      </section>
      <section
        id="contact-us"
        className=" flex flex-row justify-around fixed bottom-0 left-0 right-0  w-full items-end  h-[127px] bg-gradient-to-t from-yellow from-10% to-light px-[30px] "
      >
        <div className="flex flex-col gap-[10px] h-[127px] justify-center ">
          <div className="text-primary text-xs font-normal">
            Ingin mengajukan sesuatu?
            <br />
            Hubungi kami
          </div>
          <Link
            href={
              "https://wa.me/+621234567890?text=Halo%20saya%20mau%20tanya%20mengenai%20TechnoBank"
            }
            className="text-primary text-xs font-semibold flex items-center gap-[10px]"
          >
            <Image src={contact} alt="contactUs" />
            1234567890
          </Link>
        </div>
        <Image src={girlIcon} alt="" />
      </section>
    </div>
    // </div>
  );
}
