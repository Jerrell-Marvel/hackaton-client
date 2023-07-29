import contact from "@/assets/contact.svg";
import girlIcon from "@/assets/girl-contact-us.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    // <div className="w-full py-8 min-h-screen bg-slate-100 flex justify-center items-center ">
    <div className="min-w-sm min-h-screen bg-white ">
      <Navbar />
      <section className="mx-auto max-w-screen-md px-3">
        <Carousel />
      </section>
      <section
        id="contact-us"
        className=" fixed bottom-0 left-0 right-0 flex h-[127px] w-full  flex-row items-end  justify-around bg-gradient-to-t from-yellow from-10% to-light px-[30px] "
      >
        <div className="flex h-[127px] flex-col justify-center gap-[10px] ">
          <div className="text-xs font-normal text-primary">
            Ingin mengajukan sesuatu?
            <br />
            Hubungi kami
          </div>
          <Link
            href={
              "https://wa.me/+621234567890?text=Halo%20saya%20mau%20tanya%20mengenai%20TechnoBank"
            }
            className="flex items-center gap-[10px] text-xs font-semibold text-primary"
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
