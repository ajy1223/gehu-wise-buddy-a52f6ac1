import { useState } from "react";
import { Users, Mail, BookOpen, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const facultyData = [
  {
    name: "Ms. Pooja",
    initials: "MP",
    subjects: ["Computational Thinking and Fundamentals of IT", "Digital Productivity Tools Lab"],
    department: "BCA"
  },
  {
    name: "Mr. Chetan Pandey",
    initials: "MC",
    subjects: ["Foundations of Computer Programming", "Computer Programming Laboratory"],
    department: "BCA"
  },
  {
    name: "Dr. Shubham Kumar",
    initials: "DS",
    subjects: ["Mathematical Foundation of Computer Science", "Mathematical Foundation of AI"],
    department: "BCA"
  },
  {
    name: "Ms. Shivani Monga",
    initials: "MS",
    subjects: ["Professional Communication"],
    department: "BCA"
  },
  {
    name: "Mr. Mohit",
    initials: "MM",
    subjects: ["Computational Thinking and Fundamentals of IT"],
    department: "BCA"
  },
  {
    name: "Mr. Madhur Thapliyal",
    initials: "MM",
    subjects: ["Foundations of Computer Programming", "Introduction to Dot Net Programming"],
    department: "BCA"
  },
  {
    name: "Dr. A. Kumar",
    initials: "AK",
    subjects: ["Programming Fundamentals", "Advanced Programming"],
    department: "B.Tech"
  },
  {
    name: "Prof. R. Sharma",
    initials: "RS",
    subjects: ["Data Structures", "Algorithms"],
    department: "B.Tech"
  },
  {
    name: "Dr. S. Verma",
    initials: "SV",
    subjects: ["Engineering Mathematics I", "Engineering Mathematics II"],
    department: "B.Tech"
  },
  {
    name: "Dr. M. Singh",
    initials: "MS",
    subjects: ["Engineering Physics", "Applied Physics"],
    department: "B.Tech"
  },
];

const FacultyDirectory = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesCourse = selectedCourse === "all" || faculty.department === selectedCourse;
    const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCourse && matchesSearch;
  });

  const bcaCount = facultyData.filter(f => f.department === "BCA").length;
  const btechCount = facultyData.filter(f => f.department === "B.Tech").length;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Faculty Directory</h1>
            <p className="text-muted-foreground mt-2">Meet our experienced faculty members</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{facultyData.length}</p>
              <p className="text-sm text-muted-foreground">Total Faculty</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Department</p>
              <p className="font-bold">BCA</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Course Name</p>
              <p className="font-bold text-sm">Bachelor of Computer Applications (BCA)</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="w-[250px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="BCA">BCA - Bachelor of Computer Applications</SelectItem>
            <SelectItem value="B.Tech">B.Tech Computer Science & Engineering</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty, idx) => (
          <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">{faculty.initials}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
              <Badge variant="secondary" className="mb-3">Faculty Member</Badge>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <p className="font-semibold text-sm">Subjects:</p>
              </div>
              <ul className="space-y-1">
                {faculty.subjects.map((subject, subIdx) => (
                  <li key={subIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" className="w-full gap-2">
              <Mail className="w-4 h-4" />
              Contact Faculty
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacultyDirectory;
