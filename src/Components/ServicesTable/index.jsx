import "./style.scss";
// eslint-disable-next-line react/prop-types
function ServicesTable({ servicesPanel, handleDelete, handleEdit }) {
  return (
    <section id="news_table">
      <table className="news_table">
        <thead>
          <tr>
            <th>Filial</th>
            <th>Location</th>
            <th>Call</th>
            <th>Hours</th>
            <th>Delete &Update</th>
          </tr>
        </thead>
        <tbody>
          {servicesPanel.map((x) => (
            <tr key={x._id}>
              <td>{x.filial}</td>
              <td>{x.location}</td>
              <td>{x.call}</td>
              <td>
                <div className="content">
                  <span>Weekly:</span>
                  <p> {x.hours.weekly}</p>
                </div>
                <div className="content">
                  <span>Weekend:</span>
                  {x.hours.weekend}
                </div>
              </td>
              <td className="buttons">
                <div className="trash" onClick={() => handleDelete(x._id)}>
                  <i className="fa-solid fa-trash"></i>
                </div>
                <div>
                  <button className=" edit" onClick={() => handleEdit(x._id)}>
                    edit
                  </button>
                </div>
              </td>

              {/* <td>{x.location}</td>
              <td>{x.call}</td> */}
              {/* <td>{x.hours}</td> */}
            </tr>
          ))}
          {/* {servicesPanel.map((item) => (
            <tr key={item._id}>
              <td>{item.filial}</td>
              <td>{item.location}</td>
              <td>
                <span>Call:</span> <p>{item.content.call}</p>
              </td>
              <td>
                <div className="content">
                  <span>Weekly:</span>
                  <p> {item.hours.weekly}</p>
                </div>
                <div className="content">
                  <span>Weekend:</span>
                  {item.content.weekend}
                </div>
              </td>
              <td className="buttons">
                <div className="trash" onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                </div>
                <div>
                  <button
                    className=" edit"
                    onClick={() => handleEdit(item._id)}
                  >
                    edit
                  </button>
                </div>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </section>
  );
}

export default ServicesTable;
