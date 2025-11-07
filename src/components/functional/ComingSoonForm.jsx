import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ComingSoonForm({ formData, web3AccessKey }) {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formParams = new URLSearchParams();
    formParams.append("email", email);
    formParams.append("access_key", web3AccessKey);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formParams,
        mode: "no-cors",
      });
      toast.success("Form Submitted Succesfully");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="relative flex items-center justify-end">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-[50px] border border-ColorMidnightMoss px-6 py-2 pr-20 outline-none focus:border-ColorCaribbeanGreen"
          placeholder={formData.placeholder}
          value={email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          aria-label="button"
          className="absolute mr-[5px] flex h-10 w-[60px] items-center justify-center rounded-[50px] bg-ColorCaribbeanGreen"
        >
          {formData.buttonText}
          <i class="fa fa-arrow-right text-2xl leading-none"></i>
        </button>
      </div>
    </form>
  );
}

export default ComingSoonForm;
