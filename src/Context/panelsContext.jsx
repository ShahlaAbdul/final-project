// import { createContext, useEffect, useState } from "react";

// export const PanelsContext = createContext();

// function PanelsProvider({ childen }) {
//   const [newsPanel, setNewsPanel] = useState([]);
//   const [servicesPanel, setServicesPanel] = useState([]);
//   const [storesPanel, setStoresPanel] = useState([]);
//     const [type, setType] = useState("");
//     usets

//   useEffect(() => {
//     getAll(type);
//   }, [type]);

//     const getAll = async (panelType) => {
//         const res = await fetch(`http://localhost:3200/${panelType}/`)
//         const data = await res.json()
//         setType(data)

//   };

//   const handleAdd = async (formData, panelType) => {
//     try {
//       const res = await fetch(`http://localhost:3200/${panelType}/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       switch (panelType) {
//         case "news":
//           setNewsPanel([...newsPanel, data]);
//           break;
//         case "services":
//           setServicesPanel([...servicesPanel, data]);
//           break;
//         //   case "stores":
//         //     break;
//         default:
//           break;
//       }
//       console.log("data  sent to server", data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const handleDelete = async (formData, panelType, id) => {
//     try {
//       const res = await fetch(`http://localhost:3200/${panelType}/` + id, {
//         method: "DELETE",
//       });
//       const data = await res.json();
//       switch (panelType) {
//         case "news":
//           setNewsPanel(data);
//           break;
//         case "services":
//           setServicesPanel(data);
//           break;
//         //   case "stores":
//         //     break;
//         default:
//           break;
//       }
//       console.log("data  sent to server", data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const hadleEdit = async(id, paneltype);
//   //   function handleDelete(id) {
//   //     fetch("http://localhost:3200/news/" + id, { method: "DELETE" })
//   //       .then((res) => res.json())
//   //       .then(() => {
//   //         getAll();
//   //       });
//   //   }
//   //   function handleEdit(id) {
//   //     navigate(`/news_panel/edit/${id}`);
//   //   }

//   const data = {
//     newsPanel,
//     servicesPanel,
//     storesPanel,
//     handleAdd,
//   };

//   return (
//     <PanelsContext.Provider value={data}>{childen}</PanelsContext.Provider>
//   );
// }

// export default PanelsProvider;
