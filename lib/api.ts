// import { CgLink } from "react-icons/cg";

export type contactInfo={

    agree: boolean;
    company: string;
    email: string;
    message: string;
    name: string;
    telephone: string;

  
}
export const sendContactForm = async (data:contactInfo) =>{
// console.log(data)
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
      // console.log(res)
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });}