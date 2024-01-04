import "../style/SubHeader.css";

const SubHeader = () => {
  return (
    <div className="container">
      <div className="sub_flex">
        <div className="sub_contant">
          <h1 className="sub_title"> PsycheCraftery</h1>
          <p className="content">
            Welcome to our sanctuary for mental wellness—a haven of
            transformative growth. Explore intricate craftsmanship fostering
            resilience and mastering psychology. Discover tools tailored to
            nurture your psyche, empowering you to navigate life's complexities
            with confidence. Join us in honing skills that elevate your entire
            being through psychology's landscape
          </p>
          <div className="btn">
            <button className="sub_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>
              <div class="text"> Try Now </div>
            </button>
            <p className="btn_content">
              Empower Yourself: Embrace Mental Health Support
            </p>
          </div>
          
        </div>
        <div className="sub_image">
          <img src="../images/subimage.png" alt="sub header" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
