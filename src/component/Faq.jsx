import axios from "axios";
import { useEffect, useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);


  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/getFaq`
      );
      setFaqs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {faqs && faqs.length === 0 ? (
        <p>No Data available</p>
      ) : (
        faqs &&
        faqs.map((faq) => (
          <div key={faq._id}>
            <p>{faq.question}</p>
            <p>{faq.answer}</p>
          </div>
        ))
      )}
     
    </div>
  );
};

export default Faq;
