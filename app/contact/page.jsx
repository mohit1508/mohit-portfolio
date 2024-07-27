"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, 
    SelectCOntent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue,
} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectContent } from "@radix-ui/react-select";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 551-359-9513",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "mohitkhandelwal1997@yahoo.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Location",
        description: "United States",
    },
];

const Contact = () => {
    const { pending } = useFormStatus();

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNo, setPhoneNo] = useState("");
    const[message, setMessage] = useState("");

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: {delay: 2.4, duration: 0.4, ease:"easeIn"} }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form 
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            action={async (formData) => {
                                const { data, error } = await sendEmail(formData);
                                setFirstName("");
                                setLastName("");
                                setEmail("");
                                setPhoneNo("");
                                setMessage("");
                       
                                if (error) {
                                  toast.error(error);
                                  return;
                                }
                       
                                toast.success("Email sent successfully!");
                            }}
                            >
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">Feel free to reach out for collaboration opportunities, project inquiries, or just to chat about the latest in technology. I look forward to connecting with you!</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="senderFirstName" type="firstname" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <Input name="senderLastName" type="lastname" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                <Input name="senderEmail" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <Input name="senderPhoneNo" type="phone" placeholder="Phone number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                            </div>
                            {/* select
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}
                            {/* textarea */}
                            <Textarea 
                                name="message" 
                                className="h-[200px]"
                                placeholder="Type your message here."
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            {/* button */}
                            <Button 
                                type="submit" 
                                size="md" 
                                className="max-w-40"
                                disabled={pending}
                            >
                            {pending ? (
                                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                            ) : (
                                <>
                                    Send message
                                </>
                            )}
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div>{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
