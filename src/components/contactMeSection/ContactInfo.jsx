import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="onedriveworld@icloud.com" Image={HiOutlineMail} />
      <SingleInfo text="+923354883737" Image={FiPhone} />
      <SingleInfo text="Alexandria, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
