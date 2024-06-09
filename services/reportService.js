const db = require('../db');

// Function to save a report
const saveReport = async (report) => {
  const { reportedUserId, reportingUserId, timestamp, reason } = report;
  try {
    const result = await db.query(
      'INSERT INTO reports (reported_user_id, reporting_user_id, timestamp, reason) VALUES ($1, $2, $3, $4) RETURNING *',
      [reportedUserId, reportingUserId, timestamp, reason]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error saving report:', error);
    throw error;
  }
};

module.exports = {
  saveReport,
};
