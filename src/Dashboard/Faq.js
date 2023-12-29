import axios from "axios";
import { useEffect, useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [editedFaq, setEditedFaq] = useState(null);

  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/get`
      );
      setFaqs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFAQ = (faq) => {
    setEditedFaq({ ...faq });
  };

  const handleInputChange = (e, field) => {
    setEditedFaq({
      ...editedFaq,
      [field]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const updatefaq = {
        question: editedFaq.question,
        answer: editedFaq.answer,
      };

      const response = await axios.put(
        `${process.env.REACT_APP_URL}/api/update/${editedFaq._id}`,
        updatefaq
      );
      fetchFaq();
      setEditedFaq(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (faqId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL}/api/delete/${faqId}`
      );
      fetchFaq();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setEditedFaq(null);
  };

  return (
    <div>
      {faqs && faqs.length === 0 ? (
        <p>No Data available</p>
      ) : (
        faqs &&
        faqs.map((faq) => (
          <div key={faq._id}>
            <p>{faq.question}</p>
            <p>{faq.answer}</p>
            <div>
              <button onClick={() => handleEditFAQ(faq)}>Update</button>
              <button onClick={() => handleDelete(faq._id)}>Delete</button>
            </div>
          </div>
        ))
      )}
      {editedFaq && editedFaq._id ? (
        <div>
          <input
            type="text"
            value={editedFaq.question}
            onChange={(e) => handleInputChange(e, "question")}
          />
          <input
            type="text"
            value={editedFaq.answer}
            onChange={(e) => handleInputChange(e, "answer")}
          />
          <div>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Faq;
