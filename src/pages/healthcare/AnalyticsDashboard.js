import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

const AnalyticsDashboard = () => {
    // Dummy analytics data
    const analyticsData = {
        totalPatients: 1000,
        appointmentsToday: 150,
        medicationsDispensed: 500,
        consultationsThisMonth: 300,
        revenueThisQuarter: "$50,000",
    };

    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container">
                    <h2>Analytics Dashboard</h2>
                    <div className="analytics">
                        <div className="analytics-item">
                            <h3>Total Patients</h3>
                            <p>{analyticsData.totalPatients}</p>
                        </div>
                        <div className="analytics-item">
                            <h3>Appointments Today</h3>
                            <p>{analyticsData.appointmentsToday}</p>
                        </div>
                        <div className="analytics-item">
                            <h3>Medications Dispensed</h3>
                            <p>{analyticsData.medicationsDispensed}</p>
                        </div>
                        <div className="analytics-item">
                            <h3>Consultations This Month</h3>
                            <p>{analyticsData.consultationsThisMonth}</p>
                        </div>
                        <div className="analytics-item">
                            <h3>Revenue This Quarter</h3>
                            <p>{analyticsData.revenueThisQuarter}</p>
                        </div>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default AnalyticsDashboard;
