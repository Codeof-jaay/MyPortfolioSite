import React, { use, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contacts = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] =useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    // Function to show alert
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000); // Hide alert after 3 seconds
    };
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            //service_k0xftbm
            //template_7x6zvat

        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("form submitted:", formData);
        try {
            await emailjs.send('service_k0xftbm', 'template_7x6zvat', {
                From_name: formData.name,
                to_name: 'Jude',
                From_email: formData.email,
                to_email: 'anyanwujude435@gmail.com',
                message: formData.message,}, "q-0tjzeD_Ii9Nt1vW");
            setIsLoading(false);
            setFormData({
                name: "",
                email: "",
                message: ""
    
            });
            showAlertMessage("success", "Your message has been sent");
        } catch (error) {
            setIsLoading(false);
            console.error("Error sending email:", error);
            showAlertMessage("danger", "Failed to send message. Please try again.");
        }
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: ""

        });
    }
  return (
    <section id="contacts" className="relative flex items-center section-spacing c-space">
        {/* Debug: Show particles container */}
        ß<Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
        <div className="absolute top-4 left-4 text-white bg-blue-500 p-2 rounded text-xs">
          
        </div>
        
            {showAlert && <Alert type={alertType} text={alertMessage}/> }

            <div className="flex flex-col px-8 py-8 items-center justify-center max-w-md mx-auto border border-white/10 rounded-2xl bg-primary ">
                <div className="flex flex-col items-start gap-5 w-full mb-10">

                    <h2 className="font-bold text-2xl">
                        Let's Connect

                    </h2>
                    <p className="font-normal">
                        whether you have a question or just want to say hi,
                         my inbox is always open. 
                         I'll try my best to get back to you!
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit} >
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Full Name
                        </label>
                        <input type="text" id="name" name="name" className="cursor-pointer field-input field-input-focus" placeholder="John Doe" autoComplete="name" required value={formData.name} onChange={handleChange}/>
                        
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" className="field-input field-input-focus" placeholder="JohnDoe@email.com" autoComplete="email" required value={formData.email} onChange={handleChange}/>
                        
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Your Message
                        </label>
                        <textarea type="text" rows="4" id="message" name="message" className="field-input field-input-focus" placeholder="Hello Jude" required value={formData.message} onChange={handleChange}/>
                        
                    </div>
                    <button type="submit" className="w-full px-1 py-3 text-lg font-medium text-center cursor-pointer text-black transition-all bg-radial from-lavender to-royal hover-animation rounded-md hover:bg-transparent" disabled={isLoading}>
                       {!isLoading? "Send Message": "Sending..."}
                    </button>
                </form>
            </div>
    </section>
  )
}

export default Contacts