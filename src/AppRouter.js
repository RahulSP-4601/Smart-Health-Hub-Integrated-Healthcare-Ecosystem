// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Patient from './pages/dashboard/Patient';
import Administrator from './pages/dashboard/Administrator';
import HealthAdministrator from './pages/dashboard/HealthAdministrator';
import Pharmacist from './pages/dashboard/Phamacist';
import HealthProvider from './pages/dashboard/HealthProvider';
import ScheduleAppointmentPatient from './pages/patient/ScheduleAppointmentPatient';
import ViewHealthRecords from './pages/patient/ViewHealthRecords';
import SendMessage from './pages/patient/SendMessage';
import MedicationReminders from './pages/patient/MedicationReminders';
import SymptomChecker from './pages/patient/SymtomChecker';  
import PrescriptionManagement from './pages/patient/preScriptionManagement';
import UserManagement from './pages/administrator/UserManagement';
import AddUser from './pages/administrator/AddUser';
import HealthProviderManagement from './pages/administrator/HealthProviderManagement';
import AddHealthProvider from './pages/administrator/AddHealthcareProvider';
import SystemConfiguration from './pages/administrator/SystemConfiguration';
import DataOversite from './pages/administrator/DataOversite';
import ReportGeneration from './pages/administrator/ReportGeneration';
import FacilityManagement from './pages/administrator/FacilityManagement';
import ComplianceOversite from './pages/administrator/ComplianceOverSite';
import TaskManagement from './pages/administrator/TaskManagement';
import IncidentResponse from './pages/administrator/IncidentResponse';
import AddPrescription from './pages/patient/AddPrescription';
import BlogListing from './pages/blog/BlogListing';
import BlogCreation from './pages/blog/BlogCreation';
import BlogDetails from './pages/blog/BlogDetails';
import ListAdherenceMonitoring from './pages/pharmacist/ListAdherenceMonitoring';
import AdherenceMonitoring from './pages/pharmacist/AdherenceMonitoring';
import MedicationDispensation from './pages/pharmacist/MedicationDispensation';
import MedicationHistoryManagement from './pages/pharmacist/MedicationHistoryManagement';
import PatientConsultation from './pages/pharmacist/PatientConsultation';
import PrescriptionVerification from './pages/pharmacist/PrescriptionVerification';
import PatientEducation from './pages/pharmacist/PatientEducation';
import CollaborationWithProviders from './pages/pharmacist/CollaborationwithHealthcareProviders';
import MedicationManagementTechnologies from './pages/pharmacist/MedicationManagementTechnologies';
import AdverseEventReporting from './pages/pharmacist/AdverseEventReporting';
import SupportAndAssistance from './pages/administrator/SupportandAssistance';
import AccessToPatientHealthRecords from './pages/healthcare/AccesstoPatientHealthRecords';
import AnalyticsDashboard from './pages/healthcare/AnalyticsDashboard';
import AppointmentManagement from './pages/healthcare/AppointmentManagement';
import EPrescriptions from './pages/healthcare/E-Prescriptions';
import ProfessionalCollaboration from './pages/healthcare/ProfessionalCollaboration';
import SecureMessaging from './pages/healthcare/SecureMessaging';
import Register from './pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

         {/* Blog Routes */}

         <Route path='/blogs' element={<BlogListing />} />
         <Route path='/blog/create' element={<BlogCreation />} />
         <Route path='/blog/detail' element={<BlogDetails />} />

         {/* Dashboards Routes */}
        <Route path='/patient_dashboard' element={<Patient />} />
        <Route path='/administrator_dashboard' element={<Administrator />} />
        <Route path='/health_provider_dashboard' element={<HealthProvider/>} />
        <Route path='/health_administrator' element={<HealthAdministrator/>} />
        <Route path='/phamacist_dashboard' element={<Pharmacist />} /> 

        {/* Patient Routes */}
        <Route path='/schedule_appointment_patient' element={<ScheduleAppointmentPatient/>} /> 
        <Route path='/view_health_records' element={<ViewHealthRecords />} /> 
        <Route path='/send_message' element={<SendMessage />} /> 
        <Route path='/medication_reminders' element={<MedicationReminders />} /> 
        <Route path='/symtom_checker' element={<SymptomChecker />} /> 
        <Route path='/prescription_management' element={<PrescriptionManagement />} /> 
        <Route path='/create_prescription' element={<AddPrescription />} />  

        {/* Administrator Routes */}
        <Route path='/user_management' element={<UserManagement />} /> 
        <Route path='/create_user' element={<AddUser />} /> 
        <Route path='/healthcare_provider_management' element={<HealthProviderManagement />} />  
        <Route path='/create_healthcare_provider' element={<AddHealthProvider />} /> 
        <Route path='/system_configuration' element={<SystemConfiguration />} /> 
        <Route path='/data_oversite' element={<DataOversite />} /> 
        <Route path='/report_generation' element={<ReportGeneration />} /> 
        <Route path='/facility_management' element={<FacilityManagement />} /> 
        <Route path='/compliance_oversite' element={<ComplianceOversite />} /> 
        <Route path='/incidence_response' element={<IncidentResponse />} /> 
        <Route path='/task_management' element={<TaskManagement />} /> 
        <Route path='/support_and_assistance' element={<SupportAndAssistance />} /> 
 
        {/* Phamacist Routes */}
         <Route path='/adherence_monitoring' element={<ListAdherenceMonitoring />} /> 
        <Route path='/create_adherence_monitoring' element={<AdherenceMonitoring />} /> 
        <Route path='/medication_dispensation' element={<MedicationDispensation />} />  
        <Route path='/medication_history_management' element={<MedicationHistoryManagement />} /> 
        <Route path='/patient_consultation' element={<PatientConsultation />} />  
        <Route path='/prescription_verification' element={<PrescriptionVerification />} />  
        <Route path='/patient_education' element={<PatientEducation />} /> 
        <Route path='/collaboration_with_health_providers' element={<CollaborationWithProviders />} />  
        <Route path='/medication_management_technologies' element={<MedicationManagementTechnologies />} />  
        <Route path='/adverse_event_reporting' element={<AdverseEventReporting />} />

         {/* Healthcare Provider Routes */}   
         <Route path='/AccessToPatientHealthRecords' element={<AccessToPatientHealthRecords />} /> 
         <Route path='/AnalyticsDashboard' element={<AnalyticsDashboard />} /> 
         <Route path='/AppointmentManagement' element={<AppointmentManagement />} /> 
         <Route path='/EPrescriptions' element={<EPrescriptions />} /> 
         <Route path='/professional_collaboration' element={<ProfessionalCollaboration />} /> 
         <Route path='/secure_messaging' element={<SecureMessaging />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;
