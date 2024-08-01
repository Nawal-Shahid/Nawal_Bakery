import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Note: It's FaLinkedin, not FaLinkedIn
import FooterBg from "../../assets/back.jpg";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    }
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className="text-white">
            <div className="bg-black/40 min-h-[400px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company Details */}
                    <div className="py-8 px-4">
                        <a
                            href="#"
                            className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
                        >
                            Nawal's Bakery
                        </a>
                        <p className="pt-4">
                        Step into our bakery and be transported to a world of sweet delights, where every morsel is a labor of love and every bite is a delight. Let us tempt your taste buds and satisfy your cravings.
                        </p>
                        <a
                            href="https://github.com/Nawal-Shahid"
                            target="_blank"
                            className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
                        >
                            View more Projects
                        </a>
                    </div>
                    {/* Footer Links */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <div className="text-xl sm:text-left mb-3">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">
                                Important Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="inline-block hover:scale-105 duration-200"
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Company Address */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-semibold sm:text-left mb-3">
                            Address
                        </h1>
                        <div>
                            <p className="mb-3">Karachi, Pakistan</p>
                            <p>+92 -------</p>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-blue-600">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-pink-500">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/nawal-shahid-015529263" aria-label="LinkedIn" className="hover:text-blue-700">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
