export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList
  };

  const reportObject = {
    allEmployees,
    getNumberOfDepartments: function() {
      return Object.keys(employeesList).length;
    }
  };

  return reportObject;
}
