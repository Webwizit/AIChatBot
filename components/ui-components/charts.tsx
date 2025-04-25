'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ResumeDashboardCharts = () => {
  // Line Chart - Resume Analysis Trends
  const resumeAnalysisOptions = {
    chart: { id: 'resume-analysis' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
    stroke: { curve: 'smooth' },
    markers: { size: 5 },
  };

  const resumeAnalysisSeries = [
    {
      name: 'Resumes',
      data: [20, 35, 28, 45, 38, 55, 60, 70],
    },
  ];

  // Bar Chart - Skill Distribution
  const skillOptions = {
    chart: { id: 'skill-distribution' },
    xaxis: {
      categories: ['Python', 'TensorFlow', 'NLP', 'AWS', 'SQL'],
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 5,
      },
    },
    colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'],
  };

  const skillSeries = [
    {
      name: 'Candidates',
      data: [90, 75, 70, 65, 60],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Resume Line Chart */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="text-lg font-semibold mb-1">Resume Analysis Trends</h2>
        <p className="text-sm text-gray-500 mb-3">Monthly resume processing volume</p>
        <Chart
          options={resumeAnalysisOptions}
          series={resumeAnalysisSeries}
          type="line"
          height={250}
        />
      </div>

      {/* Skills Bar Chart */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="text-lg font-semibold mb-1">Skill Distribution</h2>
        <p className="text-sm text-gray-500 mb-3">Most common skills across candidates</p>
        <Chart
          options={skillOptions}
          series={skillSeries}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
};

export default ResumeDashboardCharts;
