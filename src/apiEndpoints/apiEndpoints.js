const websiteApiURL =
  'https://us-central1-admindashboardapi.cloudfunctions.net/app/';
const serviceReqURL = `${websiteApiURL}serviceReq/`;
const contactedPer = `${websiteApiURL}contactedUsers/`;
const jobAppliers = `${websiteApiURL}jobAppliers/`;

export default {
  production: false,
  getServiceReq: `${serviceReqURL}getServiceRequest/`,
  getAllServiceReq: `${serviceReqURL}getServiceRequests`,
  getAllContactedPersons: `${contactedPer}getUsersDetails`,
  getAllJobAppliers: `${jobAppliers}getjobAppliersDetails`,
};
