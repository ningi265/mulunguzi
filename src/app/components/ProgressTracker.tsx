'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const englishDepartmentPerformance = {
  years: [2020, 2021, 2022, 2023],
  data: [
    { year: 2020, performance: 75 },
    { year: 2021, performance: 80 },
    { year: 2022, performance: 90 },
    { year: 2023, performance: 85 },
  ],
}

const msceResults = {
  subjects: ['English', 'Chichewa', 'French'],
  years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  results: [
    { year: 2013, english: 70, chichewa: 80, french: 65 },
    { year: 2014, english: 72, chichewa: 82, french: 68 },
    { year: 2015, english: 75, chichewa: 78, french: 70 },
    { year: 2016, english: 80, chichewa: 85, french: 72 },
    { year: 2017, english: 77, chichewa: 80, french: 74 },
    { year: 2018, english: 82, chichewa: 88, french: 76 },
    { year: 2019, english: 85, chichewa: 90, french: 80 },
    { year: 2020, english: 88, chichewa: 92, french: 82 },
    { year: 2021, english: 90, chichewa: 93, french: 85 },
    { year: 2022, english: 92, chichewa: 94, french: 87 },
    { year: 2023, english: 95, chichewa: 96, french: 90 },
  ],
}

export default function ProgressTracker() {
  const [activeTab, setActiveTab] = useState('performance')

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">English Department Performance Tracker</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>English Department Academic Progress</CardTitle>
            <CardDescription>Track the performance of the English department over the years</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="performance">Department Performance</TabsTrigger>
                <TabsTrigger value="msce-results">MSCE Results</TabsTrigger>
              </TabsList>

              {/* Department Performance Tab */}
              <TabsContent value="performance">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-center mb-4">English Department Performance Over the Years</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={englishDepartmentPerformance.data}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="performance" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              {/* MSCE Results Tab */}
              <TabsContent value="msce-results">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-center mb-4">MSCE Results for the Past 10 Years</h3>
                  {/* MSCE Results Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Year</th>
                          <th className="border border-gray-300 px-4 py-2">English</th>
                          <th className="border border-gray-300 px-4 py-2">Chichewa</th>
                          <th className="border border-gray-300 px-4 py-2">French</th>
                        </tr>
                      </thead>
                      <tbody>
                        {msceResults.results.map((result, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 text-center">{result.year}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{result.english}%</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{result.chichewa}%</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{result.french}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* MSCE Results Bar Chart */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-center mb-4">Performance Comparison Across Subjects</h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={msceResults.results}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="english" fill="#82ca9d" />
                      <Bar dataKey="chichewa" fill="#8884d8" />
                      <Bar dataKey="french" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
