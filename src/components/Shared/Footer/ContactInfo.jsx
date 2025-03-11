import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="">
      <div className="mb-10">
        <Link href="/">
          <span className="text-4xl font-bold text-primary">Viscart</span>
        </Link>
      </div>
      <h3 className="text-lg font-bold mb-6">Contact Us</h3>
      <Link
        href={
          "https://www.google.com/maps/place/Vitasoft+Solutions/@23.7025149,90.4366896,17z/data=!3m1!4b1!4m6!3m5!1s0x4a175d275fafac69:0xd871af27aa650ae7!8m2!3d23.70251!4d90.4392645!16s%2Fg%2F11vzs8pm_b?coh=219816&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
        }
        target="_blank"
        className="flex items-center gap-2 -mt-2"
      >
        <FaLocationDot className="text-primary text-2xl" />
        <p className="text-grey-400">
          <span className="font-semibold">Address: </span>
          Corporate office 677, Brothers Tower, East Dholaipar, Kadamtoli,
          Dhaka-1236
        </p>
      </Link>
      <Link href="tel:+8801623653505" className="flex items-center gap-2 mt-2">
        <FaPhone className="text-primary" />
        <p className="text-grey-400">
          <span className="font-semibold">Phone:</span> +880 1623-653505
        </p>
      </Link>
      <Link
        href="mailto:vitasoftsolution@gmail.com"
        className="flex items-center gap-2 mt-2"
      >
        <MdEmail className="text-primary" />
        <p className="text-grey-400">
          <span className="font-semibold">Email:</span>{" "}
          vitasoftsolution@gmail.com
        </p>
      </Link>
    </div>
  );
};

export default ContactInfo;
