import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";

const gradePoints = {
    "A+": 4.0,
    A: 3.75,
    "A-": 3.5,
    "B+": 3.25,
    B: 3.0,
    "B-": 2.75,
    "C+": 2.5,
    C: 2.25,
    "C-": 2,
    "D+": 1.75,
    D: 1.5,
    F: 0.0,
};

export default function GPACalculatorPage() {
    const [courses, setCourses] = useState([{ id: "1", name: "", hours: "", grade: "" }]);

    const [gpa, setGpa] = useState(null);

    // Add a new course
    const addCourse = () => {
        const newId = String(Date.now());
        setCourses([...courses, { id: newId, name: "", hours: "", grade: "" }]);
    };

    // Remove a course
    const removeCourse = (id) => {
        if (courses.length > 1) {
            setCourses(courses.filter((course) => course.id !== id));
        }
    };

    // Update course details
    const updateCourse = (id, field, value) => {
        setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)));
    };

    // Calculate GPA
    const calculateGPA = () => {
        let totalPoints = 0;
        let totalHours = 0;

        for (const course of courses) {
            if (course.hours && course.grade) {
                const hours = Number.parseFloat(course.hours);
                const gradePoint = gradePoints[course.grade] || 0;

                if (!isNaN(hours)) {
                    totalPoints += hours * gradePoint;
                    totalHours += hours;
                }
            }
        }

        if (totalHours > 0) {
            setGpa(Number.parseFloat((totalPoints / totalHours).toFixed(2)));
        } else {
            setGpa(null);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">GPA Calculator</CardTitle>
                    <CardDescription>Add your courses, hours, and grades to calculate your GPA</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <div
                                key={course.id}
                                className="grid grid-cols-12 gap-4 items-end"
                            >
                                <div className="grid gap-y-2 col-span-12 sm:col-span-5">
                                    <Label htmlFor={`course-${course.id}`}>Course {index + 1}</Label>
                                    <Input
                                        id={`course-${course.id}`}
                                        placeholder="Course name"
                                        value={course.name}
                                        onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-y-2 col-span-5 sm:col-span-2">
                                    <Label htmlFor={`hours-${course.id}`}>Hours</Label>
                                    <Input
                                        id={`hours-${course.id}`}
                                        placeholder="hours"
                                        type="number"
                                        min="0"
                                        step="1"
                                        value={course.hours}
                                        onChange={(e) => updateCourse(course.id, "hours", e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-y-2 col-span-5 sm:col-span-3">
                                    <Label htmlFor={`grade-${course.id}`}>Grade</Label>
                                    <Select
                                        value={course.grade}
                                        onValueChange={(value) => updateCourse(course.id, "grade", value)}
                                    >
                                        <SelectTrigger id={`grade-${course.id}`}>
                                            <SelectValue placeholder="Select grade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(gradePoints).map((grade) => (
                                                <SelectItem
                                                    key={grade}
                                                    value={grade}
                                                >
                                                    {grade}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="col-span-2 sm:col-span-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeCourse(course.id)}
                                        disabled={courses.length <= 1}
                                        className="w-full h-10"
                                        aria-label="Remove course"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        <Button
                            variant="outline"
                            onClick={addCourse}
                            className="w-full"
                        >
                            Add Course
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button
                        onClick={calculateGPA}
                        className="w-full"
                    >
                        Calculate GPA
                    </Button>

                    {gpa !== null && (
                        <div className="text-center p-4 bg-muted rounded-md">
                            <p className="text-sm font-medium">Your GPA</p>
                            <p className="text-3xl font-bold">{gpa.toFixed(2)}</p>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
