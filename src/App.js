import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const rowData = [
    { ssn: 17553548, name: "Nguyễn Văn A", dob: "03/05/2000", gender: "male", hometown: "Thanh Hóa", perm_addr: "165 Tân Lập", temp_addr: "1 Phạm Văn Đồng", religion: null, edu_lv: "Đại học", job: "Sinh viên"},
    { ssn: 17667541, name: "Nguyễn Văn B", dob: "01/04/2003", gender: "male", hometown: "Hà Tĩnh", perm_addr: "25 Lê Hoàn", temp_addr: "1 Phạm Văn Đồng", religion: null, edu_lv: "Đại học", job: "Sinh viên"},
    { ssn: 17553002, name: "Nguyễn Văn C", dob: "03/05/1989", gender: "male", hometown: "Thanh Hóa", perm_addr: "155 Quang Trung", temp_addr: "1 Phạm Văn Đồng", religion: null, edu_lv: "Đại học", job: "Sinh viên"},
    { ssn: 17553531, name: "Nguyễn Văn D", dob: "22/05/2000", gender: "male", hometown: "Nghệ An", perm_addr: "35 Võ Nguyên Giáp", temp_addr: "1 Phạm Văn Đồng", religion: null, edu_lv: "Đại học", job: "Sinh viên"},
    // { make: "Toyota", model: "Celica", price: 35000 },
    // { make: "Ford", model: "Mondeo", price: 32000 },
    // { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "100vh", width: "100%" }}>
      <AgGridReact
        defaultColDef={{ resizable: true }}
        suppressRowClickSelection={true}
        sideBar={"filters"}
        rowSelection="multiple"
        rowData={rowData}
      >
        <AgGridColumn field="ssn" headerName="Số CMND/CCCD" checkboxSelection={true}></AgGridColumn>
        <AgGridColumn field="name" headerName="Họ tên" filter={true}></AgGridColumn>
        <AgGridColumn field="dob" headerName="Ngày sinh"></AgGridColumn>
        <AgGridColumn field="gender" headerName="Giới tính"></AgGridColumn>
        <AgGridColumn field="hometown" headerName="Quê quán"></AgGridColumn>
        <AgGridColumn field="perm_addr" headerName="Đ/c thường trú" filter={true}></AgGridColumn>
        <AgGridColumn field="temp_addr" headerName="Đ/c tạm trú" filter={true}></AgGridColumn>
        <AgGridColumn field="religion" headerName="Giới tính"></AgGridColumn>
        <AgGridColumn field="edu_lv" headerName="Trình độ văn hóa"></AgGridColumn>
        <AgGridColumn field="job" headerName="Nghề nghiệp"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default App;
