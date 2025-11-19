import { useState } from "react";
import { Calendar as CalendarIcon, Book, Users, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const courses = [
  { id: "bca", name: "BCA - Bachelor of Computer Applications" },
  { id: "btech", name: "B.Tech Computer Science & Engineering" },
];

const bcaSchedule = {
  "Semester 1": {
    "Section A1": [
      { day: "Monday", slots: [] },
      { day: "Tuesday", slots: [] },
      { day: "Wednesday", slots: ["TBC103 CR 103", "TBC101 CR 103", "TBC104 CR 103", "TBC102 CR 103"] },
      { day: "Thursday", slots: ["TBC101", "TBC104", "TBC103", "TBC102"] },
      { day: "Friday", slots: ["TBC101", "TBC103", "TBC102", "TBC102"] },
      { day: "Saturday", slots: ["PBC 101 LAB 8", "PBC 102 LAB 8"] },
    ],
    subjects: [
      { code: "TBC101", name: "Computational Thinking and Fundamentals of IT", faculty: "Ms. Pooja" },
      { code: "TBC102", name: "Foundations of Computer Programming", faculty: "Mr. Chetan Pandey" },
      { code: "TBC103", name: "Mathematical Foundation of Computer Science", faculty: "Dr. Shubham Kumar" },
      { code: "TBC104", name: "Professional Communication", faculty: "Ms. Shivani Monga" },
      { code: "PBC101", name: "Digital Productivity Tools Lab", faculty: "Ms. Pooja" },
      { code: "PBC102", name: "Computer Programming Laboratory", faculty: "Mr. Chetan Pandey" },
    ]
  }
};

const btechSchedule = {
  "Semester 1": {
    "Section A": [
      { day: "Monday", slots: ["CS101", "MA101", "PH101"] },
      { day: "Tuesday", slots: ["CS102", "MA101", "PH101"] },
      { day: "Wednesday", slots: ["CS101", "EE101", "PH101"] },
      { day: "Thursday", slots: ["CS102", "MA101", "EE101"] },
      { day: "Friday", slots: ["CS101", "PH102 LAB", "CS LAB"] },
      { day: "Saturday", slots: ["MA101", "EE LAB", "PH LAB"] },
    ],
    subjects: [
      { code: "CS101", name: "Programming Fundamentals", faculty: "Dr. A. Kumar" },
      { code: "CS102", name: "Data Structures", faculty: "Prof. R. Sharma" },
      { code: "MA101", name: "Engineering Mathematics I", faculty: "Dr. S. Verma" },
      { code: "PH101", name: "Engineering Physics", faculty: "Dr. M. Singh" },
      { code: "EE101", name: "Basic Electrical Engineering", faculty: "Prof. P. Gupta" },
    ]
  }
};

const timeSlots = ["08:00-08:55", "08:55-09:50", "10:10-11:05", "11:05-12:00", "12:00-12:55", "12:55-01:50", "02:10-03:05", "03:05-04:00"];

const Timetable = () => {
  const [selectedCourse, setSelectedCourse] = useState("bca");
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [selectedSection, setSelectedSection] = useState("Section A1");

  const schedule = selectedCourse === "bca" ? bcaSchedule : btechSchedule;
  const currentSchedule = schedule[selectedSemester]?.[selectedSection] || [];
  const subjects = schedule[selectedSemester]?.subjects || [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarIcon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Timetable</h1>
            <p className="text-muted-foreground mt-2">View class schedules for BCA and B.Tech programs</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="text-sm font-medium mb-2 block">Select Course</label>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Select Semester</label>
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Semester 1">Semester 1</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Select Section</label>
          <Select value={selectedSection} onValueChange={setSelectedSection}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Section A1">Section A1</SelectItem>
              <SelectItem value="Section A">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Course</p>
              <p className="font-semibold">{courses.find(c => c.id === selectedCourse)?.name}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Semester</p>
              <p className="font-semibold">{selectedSemester}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Section</p>
              <p className="font-semibold">{selectedSection}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Day
                  </div>
                </th>
                {timeSlots.map((slot) => (
                  <th key={slot} className="p-3 text-center text-sm font-medium">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentSchedule.map((daySchedule, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-muted/50" : ""}>
                  <td className="p-4 font-medium border-r border-border">{daySchedule.day}</td>
                  {daySchedule.slots.map((slot, slotIdx) => (
                    <td key={slotIdx} className="p-2 text-center border-r border-border">
                      {slot && (
                        <div className="bg-primary/10 text-primary rounded px-2 py-1 text-sm font-medium">
                          {slot}
                        </div>
                      )}
                    </td>
                  ))}
                  {Array(timeSlots.length - daySchedule.slots.length).fill(null).map((_, i) => (
                    <td key={`empty-${i}`} className="p-2 border-r border-border"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          Subject Details
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <Card key={subject.code} className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                    <p className="font-semibold">{subject.code}: {subject.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{subject.faculty}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
