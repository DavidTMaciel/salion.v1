import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../../img/logo.png'
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function ComponentFooter() {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterBrand
                        src="../../img/logo.png"
                        alt=""
                        name=""
                    />
                    <FooterLinkGroup>
                        <FooterLink href="#">Politica de Privacidade</FooterLink>
                        <FooterLink href="#"><FaInstagram /></FooterLink>
                        <FooterLink href="#"><FaTiktok/></FooterLink>
                        <FooterLink href="#"><MdEmail/></FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright href="#" by="Salion™" year={2023} />
            </div>
        </Footer>
    )
}