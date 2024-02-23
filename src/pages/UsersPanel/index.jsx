import SectionHead from "../../Components/SectionHead";
import UsersTable from "../../Components/UsersTable";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";

function UsersPanel() {
  return (
    <div>
      <SectionHead
        bgImage={bgImage}
        ptext={"Userleri nezerden kecirin"}
        head={"Users Panel"}
      />
      <UsersTable />
    </div>
  );
}

export default UsersPanel;
