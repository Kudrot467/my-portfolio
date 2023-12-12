import { FaEnvelopeOpenText } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const Connect = () => {
    const form=useRef();
    const sendEmail = (e) => {
       
        e.preventDefault();
        const formData=e.target;
    
        emailjs.sendForm('service_98ew5zo', 'template_j7i5ldx', form.current, 'flcuzvwI7-vLwFJxf')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                title: "Thank You!",
                text: "Your message sent successfully!",
                icon: "success"
              });
              formData.reset();
          }, (error) => {
              console.log(error.text);
          });}
  return (
    <div className="bg-[#fff3f3] flex justify-around">
      <div className="hero min-h-screen bg-[#fff3f3]">
   
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
              <div className="flex items-center">
              <img className="h-[150px]" src="https://i.ibb.co/WFrD3Kn/developer.png" alt="" />
              <img
                    className="w-[150px] h-[120px] rounded-lg"
                    alt="Tailwind CSS Navbar component"
                    src="https://i.ibb.co/FDZGnQS/resume-image.png"
                  />
                       
              </div>
            <h1 className="text-5xl font-bold">Lets Connect!</h1>
            <p className="py-6 text-2xl">
              {" "}
              Please fill out the form on this section to contact with me
            </p>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
            
              <p className=" flex items-center gap-2 text-[#fd670a] p-3 text-xl font-bold">
               <FaEnvelopeOpenText/> Lets Message me. Right Now.
              </p>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  name="from_email"
                  className="input input-bordered border-2 border-[#fd670a]"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="input input-bordered border-2 border-[#fd670a]"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  className="border-2 border-[#fd670a]"
                  name="message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#fd670a] text-white text-lg hover:text-[#fd670a] hover:text-xl hover:bg-white"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
