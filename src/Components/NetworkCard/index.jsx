import React from 'react';

function NetworkCard() {
  
  return (
    <div>
      <div className="faqs_content">
        {filteredDat.map((x, index) => (
          <div className="faq_card" key={x.key}>
            <div
              className=" question"
              onClick={() => setShow(show === index ? null : index)}
            >
              <span
                style={
                  show === index
                    ? { backgroundColor: "#df1119", color: "white" }
                    : {}
                }
              >
                {index + 1}
              </span>
              <p style={{ color: `${show === index ? "#df1119" : ""}` }}>
                {x.question}
              </p>
              <i
                className={`fa-solid ${
                  show === index ? " fa-chevron-down" : "fa-chevron-right"
                } `}
              ></i>
            </div>
            {show === index && (
              <p className="answer"> {x.answer.slice(0, 500)} </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NetworkCard;
