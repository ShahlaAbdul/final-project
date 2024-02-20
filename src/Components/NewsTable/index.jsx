import "./style.scss";
// eslint-disable-next-line react/prop-types
function NewsTable({ newsPanel, handleDelete,handleEdit }) {

  return (
    <section id="news_table">
      <table className="news_table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Head</th>
            <th>Date</th>
            <th>Content</th>
            <th>Delete &Edit</th>
          </tr>
        </thead>
        <tbody>
          {newsPanel.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.image}
                  alt={item.head}
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </td>
              <td>{item.head}</td>
              <td>{item.date}</td>
              <td>
                <div className="content">
                  <span>Title:</span>
                  <p> {item.content.title}</p>
                </div>
                <div className="content">
                  <span>Ending:</span>
                  {item.content.ending}
                </div>
                <div className="content">
                  <span>Call:</span> <p>{item.content.call}</p>
                </div>
                <div className="content">
                  <span>Hashtag:</span> <p>{item.content.hashtag}</p>
                </div>
              </td>
              <td className="buttons">
                <div className="trash" onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                </div>
                <div>
                  <button className=" edit" onClick={()=>handleEdit(item._id)}>edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default NewsTable;
